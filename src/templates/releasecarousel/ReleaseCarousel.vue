<template>
  <div class="-pt-6">
    <Carousel
      :value="data"
      :responsiveOptions="responsiveOptions"
      :numVisible="numVisible"
      :circular="true"
      :showNavigators="isLargeScreen"
      :showIndicators="!isLargeScreen"
      :autoplayInterval="autoplayInterval"
      :numScroll="numScroll"
      :pt="{
        itemsContent: { class: 'pt-6'}
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
  import { ref, onBeforeMount } from "vue"
  import CardRelease from "../cardrelease"
  import Carousel from 'primevue/carousel';

  defineProps({
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
  });

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
  ];

  const isLargeScreen = ref(true)

  const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 767;
  };

  onBeforeMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
</script>
