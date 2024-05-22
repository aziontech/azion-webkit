<template>
  <div class="flex flex-col items-center gap-7 max-w-xl text-center">
    <p class="text-2xl leading-normal text-balance">
      {{ slotProps.data.text }}
    </p>
    <div class="flex flex-col gap-3 items-center">
      <ImageSwitcher>
        <template #lightImage>
          <img :src="`${slotProps.data.imageLight}?ims=x40`" loading="lazy" width="160" :alt="slotProps.data.alt" />
        </template>
        <template #darkImage>
          <img :src="`${slotProps.data.imageDark}?ims=x40`" loading="lazy" width="160" :alt="slotProps.data.alt"/>
        </template>
      </ImageSwitcher>
      <p class="text-xs text-color-secondary leading-normal"> {{ slotProps.data.label }}</p>
    </div>
  </div>
</template>

<script setup>
  import ImageSwitcher from "../themeswitcherawareimage/ImageSwitcher.vue";

  defineProps({
    slotProps: {type: Object, required: true}
  });
</script>
