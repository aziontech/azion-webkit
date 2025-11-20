<template>
  <LayoutContainer>
    <div :class="`${bottomSpacing}`">
      <div
        class="flex flex-col border-neutral-900 border items-start relative w-full before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute md:after:bottom-0 after:right-0 md:items-stretch"
        :class="containerClasses"
      >
        <div
          v-if="title || descriptionRawMarkdown"
          class="flex flex-col justify-center md:sticky top-20 gap-5 shrink-0 w-full p-6 md:p-12 md:min-h-full"
          :class="textBlockClasses"
        >
          <h2
            v-if="title"
            class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 w-full"
          >
            {{ title }}
          </h2>

          <div
            v-if="descriptionRawMarkdown"
            class="flex flex-col gap-3 w-full py-3 pr-3"
          >
            <div
              class="text-base font-sora font-normal leading-[1.4] tracking-tight text-neutral-400"
              v-html="parsedMarkdown"
            />
          </div>
        </div>
        <div
          class="flex flex-col gap-6 shrink-0 relative w-full md:min-h-full"
          :class="imageBlockClasses"
        >
          <div
            :class="
              inverted
                ? 'border-t md:border-r border-neutral-900'
                : 'border-t md:border-l border-neutral-900'
            "
            class="relative w-full h-full flex-1"
          >
            <div class="overflow-hidden relative w-full h-full">
              <div class="absolute bottom-0 left-0 w-full flex justify-between h-1 z-10">
                <div class="w-1 h-1 bg-neutral-300" />
                <div class="w-1 h-1 bg-neutral-300" />
              </div>

              <div class="relative inset-0 flex items-start justify-center overflow-hidden">
                <div class="flex-1 relative h-full min-h-0 min-w-0">
                  <div
                    class="absolute h-full -left-0.5 -bottom-0.5 w-full overflow-hidden flex flex-col items-center"
                  >
                    <GridPattern
                      class="h-1/2 w-full relative"
                      :pattern="backgroundPattern.style"
                      color="light-gray"
                      :size="backgroundPattern.size"
                    />
                  </div>
                  <div
                    v-if="image"
                    class="relative rounded-lg overflow-hidden h-full w-full p-6 md:p-12"
                  >
                    <img
                      :src="image"
                      :alt="alt"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div class="absolute top-0 left-0 w-full flex justify-between h-1 z-10">
                <div class="w-1 h-1 bg-neutral-300" />
                <div class="w-1 h-1 bg-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup>
  import { computed } from 'vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import GridPattern from '../../components/GridPattern/GridPattern.vue'

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    descriptionRawMarkdown: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: '50/50',
      validator: (value) => ['50/50', '30/70'].includes(value)
    },
    inverted: {
      type: Boolean,
      default: false
    },
    bottomSpacing: {
      type: String,
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      default: 'mb-24'
    },
    backgroundPattern: () => ({
      style: 'dots',
      size: '24px'
    })
  })

  const parsedMarkdown = computed(() => {
    return parseMarkdown(props.descriptionRawMarkdown)
  })

  const textBlockClasses = computed(() => {
    return props.layout === '50/50' ? 'md:w-1/2' : 'md:w-1/3'
  })

  const imageBlockClasses = computed(() => {
    return props.layout === '50/50' ? 'md:w-1/2' : 'md:w-2/3'
  })

  const containerClasses = computed(() => {
    const baseClasses = 'md:flex-row'
    return props.inverted
      ? `${baseClasses} md:flex-row-reverse before:left-0 after:right-0 md:before:left-auto md:before:right-0`
      : `${baseClasses} before:left-0 after:right-0 md:after:left-0`
  })
</script>

<style scoped>
  :root {
    --ds-background-200: #171717;
    --ds-gray-300: #404040;
  }
</style>
