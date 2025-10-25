<template>
  <div
    class="grid-cell"
    :style="{ gridRow: row, gridColumn: column }"
  >
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps({
    row: {
      type: Number,
      required: true
    },
    column: {
      type: Number,
      required: true
    }
  })
</script>

<style scoped>
  .grid-cell {
    display: block;
    position: relative;
    z-index: 10;
  }
</style>
