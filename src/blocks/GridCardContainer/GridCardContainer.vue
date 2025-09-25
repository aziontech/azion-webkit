<template>
  <section class="flex flex-col gap-4">
    <p class="uppercase tracking-widest text-[#B5B1F4] font-proto-mono">{{ title }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Card
        v-for="card in cards"
        v-bind="card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Card from '../../components/Card/Card.vue'
  import type { CardProps } from '../../components/Card/Card.d.ts'

  interface GridCardContainerProps {
    cards: CardProps[]
    title: string
  }

  withDefaults(defineProps<GridCardContainerProps>(), {
    cards: () => [],
    title: ''
  })
</script>
