<template>
  <div class="p-4 md:p-8 relative overflow-hidden w-full h-full">
    <iframe
      :id="id"
      :src="`${iframeUrl}?id=${id}`"
      frameborder="0"
      class="w-full"
    />
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
    iframeUrl: {
      type: String,
      required: true
    }
  })

  const isResizeListenerActive = ref(false)

  const onResize = () => {
    const iframe = document.getElementById(props.id)
    iframe.style.height = iframe.scrollWidth + 'px'
  }

  const removeResizeListener = () => {
    if (isResizeListenerActive.value) {
      window.removeEventListener('resize', onResize)
      isResizeListenerActive.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
    isResizeListenerActive.value = true
    onResize()

    if (!window.azion) {
      window.azion = {}
      window.azion.sectionIframeSetHeight = sectionIframeSetHeight
    }
  })

  onBeforeUnmount(() => {
    removeResizeListener()
  })

  function sectionIframeSetHeight(iframeId, height) {
    removeResizeListener()

    try {
      let iframe
      if (typeof iframeId === 'string') {
        iframe = document.getElementById(iframeId) || document.querySelector(iframeId)
      } else {
        console.warn('[azion.sectionIframeSetHeight] Invalid iframe reference provided')
        return false
      }

      if (!iframe) {
        console.warn('[azion.sectionIframeSetHeight] Iframe not found: ${iframeId}')
        return false
      }

      const heightValue = typeof height === 'number' ? `${height}px` : height
      iframe.style.height = heightValue
      return true
    } catch (error) {
      console.error('[azion.sectionIframeSetHeight] Error setting iframe height:', error)
      return false
    }
  }
</script>
