<template>
  <div
    class="p-6 rounded group"
    :class="[
      cardBackgroundColor[type],
      size == '2x1' ? 'md:row-span-2' : 'col-span-1 md:col-span-2 md:row-span-2',
      backgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''
    ]"
    :style="backgroundImage ? computedBackgroundImage : ''"
  >
    <a
      :href="href"
      :target="target"
      class="flex flex-col gap-8 justify-between h-full cursor-pointer"
      :class="cardTextColor[type]"
    >
      <div class="h-10 flex">
        <div
          v-html="logo"
          class="max-h-full"
        />
      </div>
      <div class="flex flex-col gap-4">
        <p
          class="font-sora text-xl"
          :class="size == '2x1' ? 'text-xl' : 'text-2xl'"
        >
          {{ title }}
        </p>
        <p
          class="font-proto-mono uppercase text-xs leading-1 flex items-center gap-2"
          :class="actionTextColor[type]"
        >
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
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '2x2',
      options: ['2x2', '2x1']
    },
    type: {
      type: String,
      default: 'lavander',
      options: ['lavander', 'white', 'image']
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self',
      options: ['_blank', '_self']
    }
  })

  const cardBackgroundColor = {
    lavander: 'bg-violet-500 hover:bg-violet-400 transition-colors',
    white: 'bg-white hover:bg-neutral-100 transition-colors',
    image: 'bg-transparent'
  }

  const cardTextColor = {
    lavander: 'text-gray-950',
    white: 'text-black',
    image: 'text-white'
  }

  const actionTextColor = {
    lavander: 'group-hover:text-violet-900',
    white: 'group-hover:text-neutral-800 transition-colors',
    image: 'group-hover:text-neutral-300 transition-colors'
  }

  const computedBackgroundImage = computed(() => {
    const overlay = 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))'
    return `background-image: ${overlay}, url(${props.backgroundImage})`
  })
</script>
