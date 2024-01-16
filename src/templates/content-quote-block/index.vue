<template>
  <div v-if="isCarousel">
    <Carousel :value="data" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="3000"
    :pt="{ item: { class: 'flex justify-center '}}">
      <template #item="slotProps">
        <div class="flex flex-col items-center gap-7 max-w-xl text-center">
          <p class="text-xl">{{ slotProps.data.text }}</p>
          <div class="flex flex-col gap-3 items-center">
            <img :src="slotProps.data.image" />
            <p class="text-xs text-color-secondary"> {{ slotProps.data.label }}</p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div v-else>
    <div class="flex flex-col gap-12 items-center">
      <template v-for="({text, image, label}, i) in data" :key="i">
        <div class="flex gap-16">
          <p class="max-w-md text-xl">{{ text }}</p>
          <div class="flex flex-col gap-3 items-center">
            <img :src="image" />
            <p class="text-xs text-color-secondary"> {{ label }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel"

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
