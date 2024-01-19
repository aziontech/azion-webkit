<template>
  <section>
    <div class="grid gap-8 grid-cols-1" :class="grids[gridType].columns">
      <div v-for="(item, i) in grids[gridType].array" :key="i" class="rounded-md surface-ground row-span-1" :class="grids[gridType].rows(i)">
        <slot :name="`item-${i}`" />
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  gridType: {
    type: String,
    required: false,
    default: "2-column-6-items"
  }
})

const grids = {
  "2-columns-3-items": {
    array: Array(3),
    columns: "md:grid-cols-2",
    rows: (i) => i === 0 ? 'md:row-span-2' : null
  },
  "2-columns-4-items": {
    array: Array(4),
    columns: "md:grid-cols-2",
    rows: (i) => i === 0 || i === 2 ? 'md:row-span-2' : null
  },
  "2-columns-5-items": {
    array: Array(5),
    columns: "md:grid-cols-6",
    rows: (i) => i === 0 ? 'md:col-span-3 md:row-span-2' : i === 3 ? 'md:col-span-2' : i === 4 ? 'md:col-span-4' : 'md:col-span-3'
  },
  "2-columns-6-items": {
    array: Array(6),
    columns: "md:md:grid-cols-5",
    rows: (i) => i === 0 || i === 3 || i === 4 ? 'md:col-span-3' : 'md:col-span-2'
  },
}
</script>
