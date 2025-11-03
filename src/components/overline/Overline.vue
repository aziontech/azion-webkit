<template>
  <span
    class="text-balance font-proto-mono text-xs uppercase tracking-wide"
    :class="colorClass[color]"
  >
    <slot />
  </span>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    color: {
      type: String,
      default: 'primary',
      options: ['primary', 'orange', 'black']
    }
  })

  const colorClass = computed(() => {
    return {
      primary: 'text-neutral-200',
      orange: 'text-orange-500',
      black: 'text-neutral-900'
    }
  })
</script>
