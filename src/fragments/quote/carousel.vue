<template>
  <div class="flex flex-col items-center gap-7 max-w-xl text-center">
    <p class="text-base leading-relaxed text-balance">{{ slotProps.data.text }}</p>
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

<script setup>
  import ImageSwitcher from "../../templates/theme-aware-image-switcher/index.vue"

  defineProps({
    slotProps: {type: Object, required: true}
  });
</script>
