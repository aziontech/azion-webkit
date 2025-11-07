<template>
  <section
    :id="id"
    :class="`text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0 ${bottomSpacing}`"
  >
    <div
      v-if="cards && cards.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 p-0 md:p-12"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'p-1 border hover:bg-neutral-900 transition-colors duration-150 border-neutral-900 relative',
          `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:block`,
          (index + 1) % 3 === 0
            ? `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0 after:block`
            : ''
        ]"
      >
        <div
          :class="[
            'h-full w-full p-6 flex flex-col gap-2',
            `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0`,
            `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0`,
            (index + 1) % 3 === 0
              ? 'before:block after:block'
              : 'before:hidden md:before:block after:hidden'
          ]"
        >
          <div class="flex gap-2">
            <span
              v-if="card.icon"
              :class="card.icon"
              class="text-orange-500 text-lg md:text-xl flex-shrink-0"
            ></span>
            <div class="flex flex-col gap-2">
              <h3 class="display-5-mobile md:display-5 text-white font-sora">{{ card.title }}</h3>
              <div
                class="body-2 text-neutral-400 leading-relaxed font-sora"
                v-html="parseMarkdown(card.descriptionRawMarkdown)"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { parseMarkdown } from '../../services/markdown/markdown-service'

  export interface Card3Column {
    icon: string
    title: string
    descriptionRawMarkdown: string
  }

  interface SectionCards3ColumnProps {
    cards?: Card3Column[]
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  const props = withDefaults(defineProps<SectionCards3ColumnProps>(), {
    cards: () => [],
    bottomSpacing: 'mb-24'
  })
</script>
