<template>
  <div
    class="px-8 py-4 rounded bg-cover bg-center bg-no-repeat h-full flex items-end"
    :style="{ backgroundImage: backgroundImage }"
  >
    <p class="text-xl font-sora">{{ title }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  })

  const backgroundImage = computed(() => {
    return `url(${props.backgroundImage})`
  })
</script>
