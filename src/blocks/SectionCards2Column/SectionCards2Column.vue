<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
    >
      <div
        v-if="cards && cards.length > 0"
        class="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :variant="variant"
          :icon="card.icon"
          :title="card.title"
          :descriptionRawMarkdown="card.descriptionRawMarkdown"
          :href="card.href"
          :target="card.target"
          :label="card.label"
        />
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import Card from '../../components/Card/Card.vue'

  export interface Card2Column {
    icon?: string
    title: string
    descriptionRawMarkdown: string
    href?: string
    target?: '_blank' | '_self'
    label?: string
  }

  interface SectionCards2ColumnProps {
    cards?: Card2Column[]
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    variant?: 'default' | 'outline'
  }

  const props = withDefaults(defineProps<SectionCards2ColumnProps>(), {
    cards: () => [],
    bottomSpacing: 'mb-24',
    variant: 'outline'
  })
</script>
