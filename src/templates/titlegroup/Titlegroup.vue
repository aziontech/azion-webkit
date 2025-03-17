<template>
  <hgroup>
    <p class="text-[--surface-700] text-heading-3">{{ subtitle }}</p>
    <h1
      class="text-heading-3 text-balance"
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
