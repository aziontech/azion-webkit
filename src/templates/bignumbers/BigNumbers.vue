<template>
  <div class="flex flex-wrap gap-8 md:gap-16 items-center justify-center px-8 py-10">
    <div class="flex flex-col gap-3 w-1/3 md:w-fit" v-for="item in items" :key="item.title">
      <Tile v-if="item.icon" severity="primary"> <i :class="item.icon" class="text-sm md:text-md" /> </Tile>
      <div class="flex flex-col gap-2">
        <p v-if="item.titleup" class="text-xs md:text-sm text-color-secondary">
          {{ item.titleup }}
        </p>
        <strong class="md:text-7xl text-6xl font-semibold leading-tight">
          {{ item.title }}
        </strong>
        <p v-if="item.description" class="text-xs md:text-sm text-color-secondary md:min-h-10 max-w-48">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tile from "../tile"

defineProps({
  items: {
    type: Array,
    required: true
  },
  centralized: {
    type: Boolean,
    required: false,
    default: true
  }
});
</script>
