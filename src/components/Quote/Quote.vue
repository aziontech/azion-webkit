<template>
  <div class="flex flex-col gap-3">
    <img
      :src="`${logo}?ims=x60`"
      loading="lazy"
      class="max-h-[60px] brightness-0 invert"
      width="auto"
      height="60"
      :alt="source"
    />
    <h3 class="text-base font-sora text-neutral-200">{{ testimonial }}</h3>
    <p class="text-sm font-sora text-neutral-500">{{ source }}</p>
  </div>
</template>

<script setup>
  defineProps({
    logo: {
      type: String,
      required: true
    },
    testimonial: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  })
</script>
