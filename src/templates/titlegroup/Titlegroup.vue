<template>
  <hgroup>
    <p class="text-[--surface-700] text-3xl md:text-4xl font-medium">{{ subtitle }}</p>
    <h1
      class="text-3xl md:text-4xl font-medium text-balance"
      style="line-height: 125% !important"
    >
      {{ title }}
    </h1>
  </hgroup>
</template>

<script setup>
  defineProps({
    subtitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
</script>
