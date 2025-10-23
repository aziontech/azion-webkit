<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0 mb-40"
  >
    <div
      v-if="cards && cards.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(card, index) in cards.slice(0, 3)"
        :key="index"
        :class="[
          'p-1 border border-neutral-900 relative',
          `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:block`,
          `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0 after:block`,
          index === cards.slice(0, 3).length - 1 ? '' : 'md:after:hidden'
        ]"
      >
        <div 
          :class="[
            'h-full w-full p-6 flex flex-col gap-2',
            `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0`,
            `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0`,
            index === cards.slice(0, 3).length - 1 ? 'before:block after:block' : 'before:hidden md:before:block after:hidden'
          ]"
        >
          <div class="flex items-center gap-2">
            <span :class="card.icon" class="text-orange-500 text-xl flex-shrink-0"></span>
            <h3 class="display-3 text-white font-sora">{{ card.title }}</h3>
          </div>
          <div 
            class="text-xs text-neutral-400 leading-relaxed font-sora"
            v-html="parseMarkdown(card.descriptionRawMarkdown)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { parseMarkdown } from '../../utils/markdown'

  export interface Card3Column {
    icon: string
    title: string
    descriptionRawMarkdown: string
  }

  interface SectionCards3ColumnProps {
    cards?: Card3Column[]
    id?: string
  }

  const props = withDefaults(defineProps<SectionCards3ColumnProps>(), {
    cards: () => []
  })
</script>
