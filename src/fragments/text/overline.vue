<template>
  <span class="text-xs text-color-secondary font-mono uppercase leading-none tracking-widest">
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  }
})
</script>
