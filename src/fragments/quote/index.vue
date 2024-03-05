
<template>
  <div class="flex flex-col lg:flex-row text-center lg:text-start lg:gap-16 items-center justify-center">
    <p class="max-w-md text-sm leading-relaxed">
      {{ text }}
    </p>
    <div class="flex flex-col gap-3 items-start min-w-[180px] mt-4 lg:mt-0">
      <ImageSwitcher>
        <template #lightImage>
          <img
            :src="`${imageLight}?ims=x40`"
            loading="lazy"
            width="160" />
        </template>
        <template #darkImage>
          <img
            :src="`${imageDark}?ims=x40`"
            loading="lazy"
            width="160" />
        </template>
      </ImageSwitcher>
      <template v-if="label">
        <p class="text-xs text-color-secondary leading-normal">
          {{ label }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
import ImageSwitcher from "../../templates/theme-aware-image-switcher/index.vue"

defineProps({
  text: {
    type: String,
    required: true,
    default: false
  },
  imageLight: {
    type: String,
    required: true,
    default: false
  },
  imageDark: {
    type: String,
    required: true,
    default: false
  },
  label: {
    type: String,
    required: false,
    default: false
  }
})
</script>
