<template>
  <div class="flex flex-col gap-5">
    <div
      class="text-white"
      v-html="logo"
    />
    <h3 class="text-xl font-sora text-gray-200">{{ testimonial }}</h3>
    <p class="text-sm font-sora text-gray-500">{{ source }}</p>
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
