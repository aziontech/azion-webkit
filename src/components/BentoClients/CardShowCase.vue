<template>
  <div
    class="p-6 rounded"
    :class="[
      cardBackgroundColor[type],
      size == 'small' ? 'md:row-span-2' : 'col-span-1 md:col-span-2 lg:row-span-2',
      backgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''
    ]"
    :style="backgroundImage ?? ''"
  >
    <a
      :href="href"
      class="flex flex-col gap-8 justify-between h-full"
      :class="cardTextColor[type]"
    >
      <div
        v-html="logo.src"
        :alt="logo.alt"
        class="h-12"
        :class="logo.color"
      />
      <div class="flex flex-col gap-4">
        <p
          class="font-sora text-xl"
          :class="size == 'small' ? 'text-xl' : 'text-2xl'"
        >
          {{ title }}
        </p>
        <p class="font-proto-mono uppercase text-xs leading-1 flex items-center gap-2">
          <i class="pi pi-angle-right text-xs"></i> {{ action }}
        </p>
      </div>
    </a>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
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
    },
    size: {
      type: String,
      default: 'default',
      options: ['default', 'small']
    },
    type: {
      type: String,
      default: 'default',
      options: ['default', 'white', 'image']
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  })

  const cardBackgroundColor = {
    default: 'bg-violet-500',
    white: 'bg-white',
    image: 'bg-transparent'
  }

  const cardTextColor = {
    default: 'text-gray-950',
    white: 'text-black',
    image: 'text-white'
  }

  const backgroundImage = computed(() => {
    return `background-image: url(${props.backgroundImage})`
  })
</script>
