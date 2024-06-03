<template>
  <ul class="flex flex-col md:flex-row gap-8 md:gap-16 md:items-center flex-wrap justify-center rounded px-8 py-10">
    <li class="flex flex-col gap-4 justify-evenly max-w-48" v-for="item in items" :key="item.title">
      <Tile v-if="item.icon" severity="primary"> <i :class="item.icon" /> </Tile>
      <div class="flex flex-col gap-0.5">
        <p v-if="item.titleup" class="text-sm text-color-secondary">
          {{ item.titleup }}
        </p>
        <strong class="text-7xl font-semibold ">
          {{ item.title }}
        </strong>
        <p v-if="item.description" class="text-sm text-color-secondary md:min-h-10">
          {{ item.description }}
        </p>
      </div>
    </li>
  </ul>
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
