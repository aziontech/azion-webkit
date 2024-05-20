<template>
  <p class="text-sm max-w-lg" :class="[
    { 'text-color-secondary' : color == 'secondary'}
  ]"> <slot /> </p>
</template>

<script setup>

defineProps({
  color: {
    type: String,
    options: ['primary', 'secondary'],
    required: false,
    default: 'secondary'
  }
})
</script>
