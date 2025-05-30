<template>
  <div class="-pt-6">
    <Carousel
      :value="data"
      :responsiveOptions="responsiveOptions"
      :numVisible="numVisible"
      :circular="isCircularEnabled"
      :autoplayInterval="autoplayInterval"
      :numScroll="numScroll"
      :showNavigators="isCircularEnabled"
      :pt="{
        itemsContent: { class: 'pt-6' },
        previousButton: { class: 'hidden md:block' },
        nextButton: { class: 'hidden md:block' },
        indicators: { class: 'flex md:hidden' }
      }"
    >
      <template #item="slotProps">
        <div class="md:mx-4 h-full">
          <CardRelease
            hover="outlined"
            :grid="true"
            :tag="slotProps.data.tag"
            :title="slotProps.data.title"
            :card="slotProps.data.card"
            :image="slotProps.data.image"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount} from 'vue'
  import CardRelease from '../cardrelease'
  import Carousel from 'primevue/carousel'

  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    numVisible: {
      type: Number,
      required: false,
      default: 3
    },
    numScroll: {
      type: Number,
      required: false,
      default: 3
    },
    autoplayInterval: {
      type: Number,
      required: false,
      default: 5000
    }
  })

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  const reversedResponsiveOptions = [...responsiveOptions].reverse()
  const isCircularEnabled = ref(true)

  const checkScreenSize = () => {
    const screenSize = window.innerWidth
    const breakpoint = reversedResponsiveOptions.find(({ breakpoint }) => {
      const breakpointValue = parseInt(breakpoint)
      return screenSize < breakpointValue
    })

    let numVisible = props.numVisible
    if (breakpoint) numVisible = breakpoint.numVisible
    isCircularEnabled.value = props.data.length > numVisible
  }

  onBeforeMount(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })
</script>
