<template>
  <div v-if="isCarousel">
    <Carousel
      :value="data"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="3000"
      :pt="{
        item: { class: 'flex justify-center '}
      }">

      <template #item="slotProps">
        <QuoteCarousel :slotProps="slotProps" />
      </template>
    </Carousel>
  </div>
  <div v-else>
    <div class="px-container flex flex-col gap-12 items-center">
      <template v-for="({text, imageLight, imageDark, label}, i) in data" :key="i">
        <Quote
          :text="text"
          :imageLight="imageLight"
          :imageDark="imageDark"
          :label="label" />
      </template>
    </div>
  </div>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import QuoteCarousel from '../quotecarousel/QuoteCarousel.vue'
import Quote from '../quote/Quote.vue';

defineProps({
  isCarousel: {
    type: Boolean,
    required: false,
    default: false,
  },
  data: {
    type: Array,
    required: true
  }
})
</script>
