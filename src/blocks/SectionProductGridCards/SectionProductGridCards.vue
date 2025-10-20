<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0"
  >
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
      <div class="flex flex-col gap-2">
        <h2 v-if="title" class="display-2 font-normal tracking-tight text-gray-200">
          {{ title }}
        </h2>
        <p v-if="description" class="text-base text-neutral-400 max-w-2xl">
          {{ description }}
        </p>
      </div>
      <Button
        v-if="link"
        :href="link"
        :label="linkLabel"
        size="large"
        theme="dark"
        type="linkSecondary"
        customClass="px-0 py-0 whitespace-nowrap"
      />
    </div>

    <div
      v-if="cards && cards.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :href="card.href"
        :label="card.label"
        :target="card.target || '_self'"
        theme="default"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Card from '../../components/Card/Card.vue'
  import Button from '../../components/Button/Button.vue'

  export interface ProductCard {
    title: string
    description: string
    href?: string
    label?: string
    target?: '_blank' | '_self'
  }

  interface SectionProductGridCardsProps {
    title?: string
    description?: string
    link?: string
    linkLabel?: string
    cards?: ProductCard[]
    id?: string
  }

  const props = withDefaults(defineProps<SectionProductGridCardsProps>(), {
    cards: () => [],
    linkLabel: 'View All'
  })
</script>
