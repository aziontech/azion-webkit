<template>
  <ul class="flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center rounded px-8 gap-y-6 py-10"
    :class="[{ 'border surface-border surface-card': border }]">
    <li class="flex flex-col gap-2 justify-evenly min-w-32 md:px-4 max-w-64" v-for="item in items" :key="item.title">
      <Tile v-if="item.icon" severity="primary"> <i :class="item.icon" /> </Tile>
      <p v-if="item.titleup" class="text-sm text-color-secondary">
        {{ item.titleup }}
      </p>
      <strong class="text-7xl font-semibold ">
        {{ item.title }}
      </strong>
      <p v-if="item.description" class="text-sm text-color-secondary">
        {{ item.description }}
      </p>
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
  },
  border: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>
