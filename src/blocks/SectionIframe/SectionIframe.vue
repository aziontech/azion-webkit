<template>
  <LayoutContainer>
    <div class="relative overflow-hidden w-full h-full">
      <iframe
        :id="id"
        :src="`${iframeUrl}?id=${id}`"
        frameborder="0"
        class="w-full"
      />
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'

  declare global {
    interface Window {
      azion?: {
        sectionIframeSetHeight?: (iframeId: string, height: string | number) => boolean
      }
    }
  }

  interface Props {
    id: string
    iframeUrl: string
    bottomSpacing: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  const props = withDefaults(defineProps<Props>(), {
    bottomSpacing: 'mb-24'
  })

  const isResizeListenerActive = ref(false)

  const onResize = () => {
    const iframe = document.getElementById(props.id)
    if (iframe) {
      iframe.style.height = iframe.scrollWidth + 'px'
    }
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

  function sectionIframeSetHeight(iframeId: string, height: string | number): boolean {
    removeResizeListener()

    try {
      let iframe: HTMLElement | null = null
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
