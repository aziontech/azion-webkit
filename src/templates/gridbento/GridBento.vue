<template>
  <section>
    <div
      class="grid m-0 gap-8 grid-cols-1"
      :class="grids[gridType].columns"
    >
      <div
        v-for="(item, i) in grids[gridType].array"
        :key="i"
        class="rounded-md surface-ground row-span-1"
        :class="grids[gridType].rows(i)"
      >
        <slot :name="`item-${i + 1}`" />
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    gridType: {
      type: String,
      required: false,
      default: '2-column-6-items',
      options: [
        '2-columns-3-items',
        '2-columns-4-items',
        '2-columns-5-items',
        '2-columns-6-items',
        '3-columns-4-items',
        '3-columns-7-items',
        '4-columns-5-items'
      ]
    }
  })

  const grids = {
    '2-columns-3-items': {
      array: Array(3),
      columns: 'md:grid-cols-2',
      rows: (i) => (i === 0 ? 'md:row-span-2' : null)
    },
    '2-columns-4-items': {
      array: Array(4),
      columns: 'md:grid-cols-2',
      rows: (i) => (i === 0 || i === 2 ? 'md:row-span-2' : null)
    },
    '2-columns-5-items': {
      array: Array(5),
      columns: 'md:grid-cols-6',
      rows: (i) => (i === 0 ? 'md:col-span-3 md:row-span-2' : 'md:col-span-3')
    },
    '2-columns-6-items': {
      array: Array(6),
      columns: 'md:grid-cols-5',
      rows: (i) => (i === 0 || i === 3 || i === 4 ? 'md:col-span-3' : 'md:col-span-2')
    },
    '3-columns-4-items': {
      array: Array(4),
      columns: 'md:grid-cols-3',
      rows: (i) => (i === 0 ? 'md:col-span-3' : 'cols-span-1')
    },
    '3-columns-7-items': {
      array: Array(7),
      columns: 'md:grid-cols-3',
      rows: (i) => (i === 3 ? 'md:col-span-3' : 'cols-span-1')
    },
    '4-columns-5-items': {
      array: Array(5),
      columns: 'md:grid-cols-2 lg:grid-cols-4',
      rows: (i) => (i < 3 ? 'md:row-span-2' : '')
    }
  }
</script>
