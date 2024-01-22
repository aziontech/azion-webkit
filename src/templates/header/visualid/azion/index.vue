<template>
  <a
    :href="href"
    :title="hrefTitle"
    :target="target"
    class="block mr-6">

    <AzionLogoDefault class="w-[90px]" />
  </a>
</template>

<script setup>
import AzionLogoDefault from '../../../../assets/icons/azion-logo-default.vue'

const props = defineProps({
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
