<template>
  <div v-if="isCarousel">
    <Carousel :value="data" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="3000"
    :pt="{ item: { class: 'flex justify-center '}}">
      <template #item="slotProps">
        <div class="flex flex-col items-center gap-7 max-w-xl text-center text-balance">
          <p class="text-base leading-relaxed">{{ slotProps.data.text }}</p>
          <div class="flex flex-col gap-3 items-center">
            <ImageSwitcher>
              <template #lightImage>
                <img :src="`${slotProps.data.imageLight}?ims=x40`" loading="lazy" width="160" />
              </template>
              <template #darkImage>
                <img :src="`${slotProps.data.imageDark}?ims=x40`" loading="lazy" width="160"/>
              </template>
            </ImageSwitcher>
            <p class="text-xs text-color-secondary leading-normal"> {{ slotProps.data.label }}</p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div v-else>
    <div class="flex flex-col gap-12 items-center">
      <template v-for="({text, imageLight, imageDark, label}, i) in data" :key="i">
        <div class="flex gap-16 items-center">
          <p class="max-w-md text-sm leading-relaxed">{{ text }}</p>
          <div class="flex flex-col gap-3 items-start min-w-[180px]">
            <ImageSwitcher>
              <template #lightImage>
                <img :src="`${imageLight}?ims=x40`" loading="lazy" width="160"/>
              </template>
              <template #darkImage>
                <img :src="`${imageDark}?ims=x40`" loading="lazy" width="160"/>
              </template>
            </ImageSwitcher>
            <p class="text-xs text-color-secondary leading-normal"> {{ label }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel"
import ImageSwitcher from "../theme-aware-image-switcher/index.vue"

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
