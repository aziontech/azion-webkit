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
      :circular="true"
      :showNavigators="isLargeScreen"
      :showIndicators="!isLargeScreen"
      :autoplayInterval="autoplayInterval"
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

  defineProps({
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

  const isLargeScreen = ref(true)
  const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 767
  }

  onBeforeMount(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })
</script>
