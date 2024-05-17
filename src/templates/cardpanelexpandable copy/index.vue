<template>
  <div class="flex justify-center gap-3 w-fit">
    <template v-for="(card, index) in cards" :key="index">
      <CardBase :class="[{ 'w-full': activeIndex === index }, `overflow-hidden transition-all duration-700 ease-in-out delay-150`]"
        :style="activeIndex !== index ? `width: calc(100% / ${cards.length}) !important` : ''"
        @click="activeIndex = index">
        <template #content>
          <slot name="content" :data="card"></slot>
        </template>
      </CardBase>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardBase from '../card/base.vue'

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
