<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0 mb-40"
  >
    <div class="mx-auto grid grid-cols-1 md:grid-cols-2">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="border h-full relative w-full border-neutral-900 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 before:hidden md:before:block after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-[-4px]"
        :class="[
          `order-${index === 0 ? 4 : 2} md:order-none`,
          index === 1 ? 'after:hidden md:after:block' : 'after:hidden'
        ]"
      >
        <div class="border-b border-neutral-900 p-12 flex flex-col gap-5 h-full">
          <Overline v-if="item.overline">{{ item.overline }}</Overline>
          <p
            class="text-neutral-400 font-sora text-sm md:text-2xl"
            v-html="item.description"
          ></p>
        </div>
      </div>
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="border-x border-b border-neutral-900 relative w-full before:content-[''] before:z-10 before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0 before:hidden md:before:block after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-[-4px] after:z-10"
        :class="[
          `order-${index === 0 ? 1 : 3} md:order-none`,
          index === 1
            ? 'before:hidden md:before:block after:hidden md:after:block'
            : 'after:hidden before:hidden'
        ]"
      >
        <div class="relative overflow-hidden">
          <div class="h-1/2 absolute top-0 left-0">
            <Grid
              :rows="7"
              :columns="20"
              :pattern="gridPattern"
            />
          </div>
          <div class="p-12 flex items-center justify-center">
            <img
              class="relative z-10"
              :src="item.image.src"
              :alt="item.image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Overline from '../../components/overline/Overline.vue'
  import Grid from '../../components/GridPattern/GridPattern.vue'

  export interface ContentCard {
    overline?: string
    description: string
    image: {
      src: string
      alt: string
    }
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
