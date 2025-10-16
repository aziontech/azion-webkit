<template>
  <div
    class="rounded flex items-center justify-center"
    :class="cardBackgroundColor[type]"
  >
    <div class="h-12 flex items-center justify-center">
      <div
        v-html="logo.src"
        :alt="logo.alt"
        class="max-h-full"
        :class="cardTextColor[type]"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'default',
      options: ['default', 'orange', 'white', 'lavander']
    },
    title: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    logo: {
      type: Object,
      default: () => ({
        src: '',
        alt: ''
      })
    }
  })

  const cardBackgroundColor = {
    default: 'bg-neutral-900',
    orange: 'bg-orange-500',
    lavander: 'bg-violet-500',
    white: 'bg-white'
  }

  const cardTextColor = {
    default: 'text-white',
    orange: 'text-white',
    lavander: 'text-gray-950',
    white: 'text-black'
  }
</script>
