<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    compact: {
      type: Boolean,
      default: false
    }
  })

  const containerClasses = computed(() => {
    const baseClasses = 'flex flex-col justify-center pt-10 lg:pt-20 pb-10 lg:pb-20'
    const gapClasses = props.compact
      ? 'gap-10 lg:gap-20 xl:gap-30 2xl:gap-40'
      : 'gap-20 lg:gap-40 xl:gap-60 2xl:gap-80'

    return `${baseClasses} ${gapClasses}`
  })
</script>
