<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
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
          <div class="border-b border-neutral-900 p-6 md:p-12 flex flex-col gap-5 h-full">
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
            <div
              class="h-1/2 w-full absolute top-0 left-0"
              aria-hidden="true"
            >
              <GridPattern
                class="relative h-full w-full"
                :size="backgroundPattern.size"
                :pattern="backgroundPattern.style"
                color="light-gray"
                aria-hidden="true"
              />
            </div>
            <div class="p-6 md:p-12 flex items-center justify-center">
              <img
                class="relative z-10"
                :src="item.image.src"
                :alt="item.image.alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import Overline from '../../components/overline/Overline.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import GridPattern from '../../components/GridPattern/GridPattern.vue'

  export interface ContentCard {
    overline?: string
    description: string
    image: {
      src: string
      alt: string
    }
  }

  interface SectionContent2ColumnProps {
    cards: ContentCard[]
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    backgroundPattern: {
      style: 'dots' | 'square'
      size: '12px' | '24px' | '48px'
    }
  }

  withDefaults(defineProps<SectionContent2ColumnProps>(), {
    cards: () => [],
    id: '',
    bottomSpacing: 'mb-24',
    backgroundPattern: () => ({
      style: 'dots',
      size: '48px'
    })
  })
</script>
