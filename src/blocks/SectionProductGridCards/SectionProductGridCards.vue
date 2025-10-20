<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0"
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
          `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0`,
          `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0`,
          index === cards.slice(0, 3).length - 1 ? 'md:after:block after:hidden' : 'after:hidden',
          index === cards.slice(0, 3).length - 1 ? 'md:before:hidden' : 'md:before:block'
        ]"
      >
        <div 
          :class="[
            'h-full w-full p-8 flex flex-col gap-4',
            `before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0`,
            `after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0`,
            index === cards.slice(0, 3).length - 1 ? 'before:block after:block' : 'before:hidden md:before:block after:hidden'
          ]"
        >
          <div class="flex items-start gap-3">
            <span :class="card.icon" class="text-orange-500 text-xl flex-shrink-0"></span>
            <h3 class="text-lg font-medium text-white">{{ card.title }}</h3>
          </div>
          <p class="text-sm text-neutral-400 leading-relaxed">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  export interface ProductCard {
    icon: string
    title: string
    description: string
  }

  interface SectionProductGridCardsProps {
    cards?: ProductCard[]
    id?: string
  }

  const props = withDefaults(defineProps<SectionProductGridCardsProps>(), {
    cards: () => []
  })
</script>
