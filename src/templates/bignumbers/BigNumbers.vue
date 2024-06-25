<template>
  <div class="flex flex-wrap gap-8 sm:gap-10 md:gap-20 justify-center px-0 sm:px-4 md:px-8 py-6 md:py-10">
    <div class="flex basis-5/12 sm:basis-0 justify-center" v-for="item in items" :key="item.title">
      <div class="flex flex-col gap-3 md:gap-5 w-fit min-w-32 sm:min-w-none">
      <Tile v-if="item.icon" severity="primary"> <i :class="item.icon" class="text-sm md:text-md" /> </Tile>
      <div class="flex flex-col gap-2 justify-evenly w-fit">
        <p v-if="item.titleup" class="text-xs md:text-sm text-color-secondary">
          {{ item.titleup }}
        </p>
        <strong class="md:text-7xl text-5xl font-semibold w-fit leading-tight text-nowrap">
          {{ item.title }}
        </strong>
        <p v-if="item.description" class="text-xs md:text-sm text-color-secondary md:min-h-10 text-wrap w-full max-w-36 md:max-w-52">
          {{ item.description }}
        </p>
      </div>
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
