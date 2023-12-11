<template>
  <a :href="link" target="_blank" rel="noopener noreferrer"
    class="p-button p-component p-button-icon-only p-button-primary p-button-outlined"
    v-for="({ icon, link }, index) in data" :key="index">
    <span :class="`p-button-icon ${icon}`" data-pc-section="icon"></span>
  </a>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
