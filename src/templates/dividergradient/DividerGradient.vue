<template>
  <div class="azion-divider gradient"></div>
</template>

<script setup>
  const props = defineProps({});
</script>

<style lang="scss">
  .azion-divider {
    width: 100%;
    height: 1px;

    &.gradient {
      background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(102,102,102,1) 35%, rgba(34,34,34,1) 100%);
    }
  }
</style>
