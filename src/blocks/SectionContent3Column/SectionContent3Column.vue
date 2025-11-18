<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
    >
      <div class="mx-auto grid grid-cols-1 md:grid-cols-3">
        <div
          v-for="(item, index) in cards"
          :key="index"
          class="h-full relative w-full border-neutral-900 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 after:z-10 after:hidden md:after:block before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:z-10 before:hidden md:before:block"
          :class="[index == cards.length - 1 ? 'md:border-r' : '']"
        >
          <GridPattern
            size="48px"
            :pattern="gridPattern"
            color="light-gray"
            class="flex flex-col h-full"
          >
            <div class="border-b border-neutral-900 p-6 md:p-12 flex flex-col gap-5 h-full">
              <h4 class="font-sora text-2xl text-neutral-200">{{ item.title }}</h4>
              <p
                class="text-neutral-400 font-sora text-sm"
                v-html="item.description"
              ></p>
            </div>
          </GridPattern>
          <div
            aria-hidden="true"
            v-if="index === 2"
            class="before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-[-4px] before:z-10 before:hidden md:before:block after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-[-4px] after:z-10 after:hidden md:after:block"
          />
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import GridPattern from '../../components/GridPattern/GridPattern.vue'

  export interface ContentCard {
    title: string
    description: string
  }

  interface SectionContentImage2ColumnProps {
    cards: ContentCard[]
    id?: string
    gridPattern: 'square' | 'dots'
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  withDefaults(defineProps<SectionContentImage2ColumnProps>(), {
    cards: () => [],
    id: '',
    gridPattern: 'dots',
    bottomSpacing: 'mb-24'
  })
</script>
