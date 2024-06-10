<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="p-button p-component p-button-icon-only p-button-primary p-button-outlined hover:surface-hover"
    v-tooltip.top="{ value: tooltipText, showDelay: 200 }">

    <span :class="`p-button-icon ${icon}`" data-pc-section="icon"></span>
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  tooltipText: {
    type: String,
    required: true
  }
})
</script>
