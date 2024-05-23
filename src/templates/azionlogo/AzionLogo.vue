<template>
  <a
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
    class="block mr-3 p-button p-button-text px-2 -ml-2">

    <AzionLogoDefault class="w-[90px]" />
  </a>
</template>

<script setup>
import AzionLogoDefault from '../../src/assets/icons/azion-logo-default.vue'

defineProps({
  href: {
    type: String
  },
  hrefTitle: {
    type: String
  },
  target: {
    type: String,
    default: '_self'
  }
})
</script>
