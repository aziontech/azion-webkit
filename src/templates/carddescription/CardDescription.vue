<template>
  <p class="max-w-lg" :class="[
    { 'text-color-secondary' : color == 'secondary'},
    { 'text-xs' : size == 'small'},
    { 'text-sm' : size == 'medium'},
    { 'text-base' : size == 'large'}
  ]"> <slot /> </p>
</template>

<script setup>

defineProps({
  color: {
    type: String,
    options: ['primary', 'secondary'],
    required: false,
    default: 'secondary'
  },
  size: {
    type: String,
    options: ['small', 'medium', 'large'],
    required: false,
    default: 'medium'
  }
})
</script>
