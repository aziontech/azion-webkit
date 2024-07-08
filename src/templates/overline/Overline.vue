<template>
  <span class="text-[.625rem] md:text-xs text-color-secondary font-mono uppercase leading-relaxed md:leading-none tracking-widest">
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

