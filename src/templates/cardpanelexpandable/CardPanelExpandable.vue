<template>
  <div class="flex justify-center gap-3 w-full h-full max-h-[440px]">
    <template v-for="(card, index) in cards" :key="index">
      <CardBase :class="[{ 'grow bg-[var(--surface-0)]': activeIndex === index }, `transition-all duration-300 ease-out overflow-hidden min-w-56`]"
        :style="activeIndex !== index ? `width: calc(100% / ${cards.length}) !important` : ''"
        @click="activeIndex = index">
        <template #content>
          <Tile> {{ index + 1 }} </Tile>
          <CardTitle> {{ card.title }} </CardTitle>
          <div v-if="activeIndex === index">
            <CardDescription> {{ card.description }} </CardDescription>
            <slot name="content" :slotProps="card" />
          </div>
        </template>
        <template #actions>
          <div class="flex justify-between w-full">
            <div>
              <slot name="actions" :slotProps="card"></slot>
            </div>
            <Button class="self-end" size="small" icon="pi pi-arrow-right" aria-label="Next card" :pt="{icon: { class: activeIndex === index ? 'text-[var(--orange-500)]' : '' }}" />
          </div>
        </template>
        <template #content-raw v-if="$slots['content-raw']">
          <div v-if="activeIndex === index">
            <slot name="content-raw" :slotProps="card" />
          </div>
        </template>
      </CardBase>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardBase from '../cardbase/CardBase.vue'
import Tile from '../tile/Tile.vue';
import CardTitle from '../cardtitle/CardTitle.vue';
import CardDescription from '../carddescription/CardDescription.vue';
import Button from 'primevue/button'

const props = defineProps({
  activeIndex: {
    type: Number,
    required: false,
    default: 0
  },
  cards: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(props.activeIndex)

</script>
