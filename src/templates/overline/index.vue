<template>
  <span class="text-base font-normal uppercase" style="color: #F3652B; letter-spacing: .5rem;">
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
