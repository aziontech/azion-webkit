<template>
  <section :class="containerClasses">
    <slot />
  </section>
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
    const baseClasses = 'relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0'
    const flexClasses = 'flex flex-col justify-center'

    return `${baseClasses} ${flexClasses}`
  })
</script>
