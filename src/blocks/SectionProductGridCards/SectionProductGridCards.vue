<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0"
  >
    <div
      v-if="cards && cards.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="(card, index) in cards.slice(0, 3)"
        :key="index"
        class="flex flex-col gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
          <h3 class="text-lg font-medium text-white">{{ card.title }}</h3>
        </div>
        <p class="text-sm text-neutral-400 leading-relaxed">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  export interface ProductCard {
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
