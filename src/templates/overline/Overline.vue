<template>
  <span
    class="text-[.625rem] md:text-xs text-color-secondary font-mono uppercase leading-1 tracking-widest text-balance"
  >
    {{ label }}
  </span>
</template>

<script setup>
  defineProps({
    label: {
      type: String,
      required: true
    }
  })
</script>
