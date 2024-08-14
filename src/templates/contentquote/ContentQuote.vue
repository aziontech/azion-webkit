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
        <Quote
          :text="slotProps.data.text"
          :imageLight="slotProps.data.imageLight"
          :imageDark="slotProps.data.imageDark"
          :label="slotProps.data.label" />
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
import Quote from '../quote/Quote.vue';
import Carousel from 'primevue/carousel'

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
