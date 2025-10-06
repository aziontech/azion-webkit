<template>
  <div class="flex flex-col gap-8 max-w-[1600px] mx-auto">
    <!-- Title and Toggle -->
    <div class="flex flex-col items-center gap-6">
      <Toggle
        v-model="selectedView"
        :mainLabel="mainLabel"
        :alternativeLabel="alternativeLabel"
        :description="toggleDescription"
        @change="onToggleChange"
      />
    </div>

    <!-- Card Grid Sections with transition -->
    <Transition name="fade" mode="out-in">
      <div :key="selectedView" class="flex flex-col gap-20">
        <section 
          v-for="(section, index) in currentSections" 
          :key="index"
          :id="section.id"
          class="flex flex-col gap-4"
        >
          <p class="uppercase tracking-widest text-[#B5B1F4] font-proto-mono">{{ section.title }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <Card
              v-for="card in section.cards"
              :key="card.title || card.label"
              v-bind="card"
              class="h-full"
            />
          </div>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Card from '../../components/Card/Card.vue'
  import Toggle from '../Toggle/Toggle.vue'
  import type { CardProps } from '../../components/Card/Card.d.ts'

  interface GridSection {
    title: string
    id: string
    cards: CardProps[]
  }

  interface GridCardContainerWithToggleProps {
    mainSections: GridSection[]
    alternativeSections: GridSection[]
    mainTitle?: string
    mainLabel?: string
    alternativeLabel?: string
    toggleDescription?: string
    defaultView?: 'main' | 'alternative'
  }

  const props = withDefaults(defineProps<GridCardContainerWithToggleProps>(), {
    mainSections: () => [],
    alternativeSections: () => [],
    mainLabel: 'Option 1',
    alternativeLabel: 'Option 2',
    toggleDescription: '',
    defaultView: 'main'
  })

  const emit = defineEmits(['toggle-change'])

  const selectedView = ref<'main' | 'alternative'>(props.defaultView)

  const currentSections = computed(() => {
    return selectedView.value === 'main' ? props.mainSections : props.alternativeSections
  })

  const onToggleChange = (option: string) => {
    emit('toggle-change', option)
  }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.150s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
