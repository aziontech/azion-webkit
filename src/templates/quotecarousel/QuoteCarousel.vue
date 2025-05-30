<template>
  <template v-if="data.length == 1">
    <Quote
      direction="column"
      v-bind="data[0]"
    />
  </template>
  <div v-else>
    <Carousel
      :value="data"
      :responsiveOptions="responsiveOptions"
      :numVisible="numVisible"
      :circular="isCircularEnabled"
      :showNavigators="isLargeScreen && isCircularEnabled"
      :showIndicators="!isLargeScreen"
      :autoplayInterval="autoplayInterval && isCircularEnabled"
      :numScroll="numScroll"
      :pt="{ itemsContent: { class: 'py-6' } }"
    >
      <template #item="slotProps">
        <div class="md:mx-4 h-full mb-10">
          <Quote
            v-bind="slotProps.data"
            direction="column"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue'
  import Quote from '../quote'
  import Carousel from 'primevue/carousel'

  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    numVisible: {
      type: Number,
      required: false,
      default: 1
    },
    numScroll: {
      type: Number,
      required: false,
      default: 1
    },
    autoplayInterval: {
      type: Number,
      required: false,
      default: 3500
    }
  })

  const responsiveOptions = ref([
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ])

  const reversedResponsiveOptions = [...responsiveOptions].reverse()

  const isCircularEnabled = ref(true)
  const isLargeScreen = ref(true)

  const checkScreenSize = () => {
    const screenSize = window.innerWidth
    isLargeScreen.value = screenSize >= 767

    const breakpoint = reversedResponsiveOptions.find(({ breakpoint }) => {
      const breakpointValue = parseInt(breakpoint)
      return screenSize < breakpointValue
    })

    let numVisible = props.numVisible
    if (breakpoint) numVisible = breakpoint.numVisible
    isCircularEnabled.value = props.cards.length > numVisible
  }


  onBeforeMount(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })
</script>
