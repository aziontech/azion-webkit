<template>
  <div class="flex justify-center gap-3 w-full">
    <template v-for="(card, index) in cards" :key="index">
      <CardBase :class="[{ 'grow bg-[var(--surface-0)]': activeIndex === index }, `transition-all duration-300 ease-out overflow-hidden min-w-56`]"
        :style="activeIndex !== index ? `width: calc(100% / ${cards.length}) !important` : ''"
        @click="activeIndex = index">
        <template #content>
          <Tile> {{ index + 1 }} </Tile>
          <CardTitle> {{ card.title }} </CardTitle>
          <div class="relative">
            <div class="absolute w-full h-full top-0 left-0 overflow-hidden surface-ground" :class="activeIndex === index ? 'hidden' : 'block'" />
            <CardDescription> {{ card.description }} </CardDescription>
            <slot name="content" :slotProps="card" />
          </div>
        </template>
        <template #content-raw v-if="$slots['content-raw']">
          <div>
            <slot name="content-raw" :slotProps="card" />
          </div>
        </template>
      </CardBase>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardBase from '../card/base.vue'
import Tile from '../../fragments/tile/index.vue';
import CardTitle from '../../fragments/text/card-title.vue';
import CardDescription from '../../fragments/text/card-description.vue';

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
