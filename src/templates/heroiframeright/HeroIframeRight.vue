<template>
  <HeroBase
    :overline="props.overline"
    :title="props.title"
    :descriptionRawHtml="props.descriptionRawHtml"
    :position="props.position"
    :id="id"
    :margin="props.margin"
  >
    <template
      v-if="props.list.length"
      #content
    >
      <div class="flex flex-col gap-10 w-full">
        <UnorderedList :data="props.list" />
      </div>  
    </template>
    <template #main>
      <div class="p-4 md:p-8 relative overflow-hidden w-full h-full">
        <iframe id="embed" :src="props.iframeUrl" frameborder="0" class="w-full"></iframe>
      </div>
    </template>
  </HeroBase>
</template>

<script setup>
  import HeroBase from '../herobase/HeroBase'
  import UnorderedList from '../listunordered/ListUnordered'
  import { onMounted, onBeforeUnmount } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      required: true
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    list: {
      type: Array, // title, description, icon
      default: () => []
    },
    position: {
      type: String,
      options: ['left', 'right'],
      default: () => 'left'
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    },
    iframeUrl: {
      type: String,
      required: true
    }
  })

  const onResize = () => {
    const iframe = document.getElementById('embed')
    iframe.style.height = iframe.scrollWidth + 'px'
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
    onResize()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
</script>
