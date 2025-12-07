<template>
  <LayoutContainer
    :id="id"
    :class="`${bottomSpacing}`"
  >
    <div class="flex-col gap-3 max-w-xl flex lg:hidden">
      <h2 class="font-sora text-neutral-200 display-2-mobile md:display-2 text-pretty">
        {{ title }}
      </h2>
      <p
        class="font-sora text-neutral-200 text-xs text-pretty"
        v-html="parseMarkdown(descriptionRawMarkdown)"
      ></p>
    </div>
    <div class="grid gap-3 grid-cols-2 lg:grid-cols-4 grid-rows-4">
      <div class="col-span-2 lg:col-span-4 row-span-3 bg-neutral-900 rounded-lg overflow-hidden">
        <div class="relative flex h-full lg:h-auto min-h-96 md:min-h-[480px]">
          <div
            class="flex w-full gap-5 lg:justify-between justify-end items-right py-5 lg:py-10 lg:px-5 z-2"
          >
            <div class="flex-col gap-3 max-w-xl hidden lg:flex">
              <h2 class="font-sora text-neutral-200 text-5xl text-pretty">
                {{ title }}
              </h2>
              <p
                class="font-sora text-neutral-200 text-sm text-balance"
                v-html="parseMarkdown(descriptionRawMarkdown)"
              ></p>
            </div>
            <div
              class="flex flex-col gap-3 justify-end lg:justify-start font-proto-mono uppercase text-xs"
            >
              <template v-if="overlines && overlines.length > 0">
                <p
                  v-for="(item, index) in overlines"
                  :key="index"
                  class="bg-white font-proto-mono px-3 py-1 text-xs md:text-base text-neutral-900"
                >
                  {{ item }}
                </p>
              </template>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-0 z-1 bg-gradient-to-b from-neutral-900 from-10% to-transparent opacity-50 lg:hidden"
          />
          <EdgeMap class="absolute bottom-0 left-[-150px] md:right-0 md:left-auto lg:top-0" />
        </div>
      </div>
      <div
        v-if="items && items.length > 0"
        v-for="(item, index) in items"
        :key="index"
        class="bg-neutral-900 flex flex-col p-3 lg:p-5 gap-3 rounded-lg"
      >
        <p class="font-sora text-orange-500 text-xs lg:text-base">{{ item.titleup }}</p>
        <p class="font-proto-mono text-5xl lg:text-7xl text-neutral-200">{{ item.title }}</p>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup>
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import EdgeMap from './EdgeMap.vue'
  defineProps({
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    descriptionRawMarkdown: {
      type: String,
      required: true
    },
    overlines: {
      type: Array
    },
    bottomSpacing: {
      type: String,
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      default: 'mb-24'
    },
    id: {
      type: String,
      default: ''
    }
  })
</script>
