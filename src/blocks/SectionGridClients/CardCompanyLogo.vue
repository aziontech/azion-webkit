<template>
  <div
    class="rounded flex items-center justify-center"
    :class="cardBackgroundColor[type]"
  >
    <div class="h-12 flex items-center justify-center">
      <div
        v-html="logo"
        class="max-h-full"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'neutral',
      options: ['neutral', 'orange', 'white', 'lavander']
    },
    logo: {
      type: String,
      required: true,
      default: ''
    }
  })

  const cardBackgroundColor = {
    neutral: 'bg-neutral-900',
    orange: 'bg-orange-500',
    lavander: 'bg-violet-500',
    white: 'bg-white'
  }
</script>
