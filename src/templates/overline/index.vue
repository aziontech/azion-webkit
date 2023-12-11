<template>
  <span class="text-xs font-normal uppercase tracking-[.375rem] text-[#F3652B]">
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
