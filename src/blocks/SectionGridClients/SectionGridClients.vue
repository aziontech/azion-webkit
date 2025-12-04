<template>
  <section
    class="m-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 max-w-xl xxxl:max-w-xxl mx-auto p-6 md:p-12"
    :class="`${bottomSpacing}`"
    :id="id"
  >
    <template
      v-for="(item, index) in resolvedCards"
      :key="index"
    >
      <template v-if="item.component === 'hidden'">
        <div
          class="invisible"
          aria-hidden="true"
        ></div>
      </template>
      <template v-else>
        <component
          :is="componentsMapping[item.component]"
          v-bind="item"
          :class="item.class"
          class="min-h-52"
        />
      </template>
    </template>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import CardShowCase from './CardShowCase.vue'
  import CardCompanyLogo from './CardCompanyLogo.vue'
  import ClientProfile from './ClientProfile.vue'
  import type { ShowcaseCard, LogoCard, PersonaCard } from './SectionGridClients.d.ts'

  const props = defineProps({
    showcaseCards: {
      type: Array,
      default: () => []
    },
    cards: {
      type: Array,
      default: () => []
    },
    bottomSpacing: {
      type: String,
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      default: 'mb-24'
    },
    id: {
      type: String,
      default: ''
    }
  })

  const layoutTypes = [
    { type: 'showcase' },
    { class: 'hidden md:flex' },
    { class: 'hidden xl:flex' },
    { class: 'hidden md:flex' },
    { type: 'showcase', class: 'hidden xl:flex' },
    { class: 'hidden md:flex' },
    { type: 'showcase' },
    { class: 'hidden md:flex' },
    { class: 'hidden md:flex' },
    { class: 'hidden md:flex' },
    { class: 'hidden xl:flex' }
  ]

  type ResolvedCard =
    | ((ShowcaseCard | LogoCard | PersonaCard) & { class: string })
    | { component: 'hidden'; class: string }

  const componentsMapping: Record<string, any> = {
    showcase: CardShowCase,
    logo: CardCompanyLogo,
    persona: ClientProfile
  }

  const resolvedCards = computed<ResolvedCard[]>(() => {
    let showcaseIndex = 0
    let cardsIndex = 0

    return layoutTypes.map((item) => {
      if (item.type === 'showcase') {
        const card = props.showcaseCards[showcaseIndex] || {}
        showcaseIndex += 1
        return { ...card, component: 'showcase', class: item.class ?? '' } as ResolvedCard
      }

      const card = (props.cards[cardsIndex] || {}) as LogoCard | PersonaCard | Record<string, any>
      cardsIndex += 1
      const component = (card as any).component ?? 'hidden'
      return { ...card, component, class: item.class ?? '' } as ResolvedCard
    })
  })
</script>
