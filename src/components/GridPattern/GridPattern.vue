<template>
  <div
    class="grid-container relative"
    :style="{ '--rows': rows, '--columns': columns }"
  >
    <div class="grid-background overflow-hidden">
      <div
        v-for="index in totalCells"
        :key="`guide-${index}`"
        class="grid-guide"
        :class="gridPattern[pattern]"
        :style="{ '--x': getX(index - 1), '--y': getY(index - 1) }"
        aria-hidden="true"
      />
    </div>
    <div class="grid-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    rows: {
      type: Number,
      required: true
    },
    columns: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 36
    },
    pattern: {
      type: String,
      required: false,
      default: 'square',
      options: ['square', 'dots']
    }
  })

  const gridPattern = computed(() => {
    return {
      square: 'border-r border-b border-neutral-900',
      dots: "relative m-3 after:content-[''] after:bg-neutral-500 after:w-0.5 after:h-0.5 after:absolute after:top-0 after:left-0"
    }
  })

  const totalCells = computed(() => props.rows * props.columns)

  const getX = (index) => {
    return (index % props.columns) + 1
  }

  const getY = (index) => {
    return Math.floor(index / props.columns) + 1
  }
</script>

<style scoped>
  .grid-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .grid-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--columns), 36px);
    grid-template-rows: repeat(var(--rows), 36px);
    pointer-events: none;
    z-index: 1;
  }

  .grid-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--columns), 36px);
    grid-template-rows: repeat(var(--rows), 36px);
    z-index: 2;
  }

  .grid-guide {
    grid-column: var(--x);
    grid-row: var(--y);
  }
</style>
