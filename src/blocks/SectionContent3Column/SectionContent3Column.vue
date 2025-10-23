<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0 mb-40"
  >
    <div class="mx-auto grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="h-full relative w-full border-neutral-900 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 after:z-10 after:hidden md:after:block before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:z-10 before:hidden md:before:block"
        :class="[
          gridPattern === 'square' ? 'border-x border-t border-neutral-900' : 'border-y border-l border-r md:border-r-0 border-neutral-900',
          index == cards.length - 1 ? 'md:border-r' : ''
        ]"
      >
        <div class="flex flex-col h-full">
          <div class="border-b border-neutral-900 p-12 flex flex-col gap-5 h-full">
            <h4 class="text-sora text-2xl text-neutral-200">{{ item.title }}</h4>
            <p
              class="text-neutral-400 font-sora text-sm md:text-2xl"
              v-html="item.description"
            ></p>
          </div>
          <div>
            <Grid
              :rows="7"
              :columns="20"
              :pattern="gridPattern"
            />
          </div>
        </div>
        <div aria-hidden="true" v-if="index === 2" 
          class="before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-[-4px] before:z-10 before:hidden md:before:block after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-[-4px] after:z-10 after:hidden md:after:block" 
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Grid from '../../components/GridPattern'

  export interface ContentCard {
    title: string
    description: string
  }

  interface SectionContentImage2ColumnProps {
    cards: ContentCard[]
    id?: string
    gridPattern: 'square' | 'dots'
  }

  withDefaults(defineProps<SectionContentImage2ColumnProps>(), {
    cards: () => [],
    id: '',
    gridPattern: 'dots'
  })
</script>
