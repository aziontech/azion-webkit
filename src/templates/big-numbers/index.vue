<template>
  <ul class="flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center rounded px-8" :class="[{ 'border surface-border' : border}]">
    <li class="flex flex-col gap-5 py-10 px-6 justify-evenly max-w-64" v-for="item in items" :key="item.title">
      <strong class="text-6xl text-center">
        {{ item.title }}
      </strong>
      <p class="text-sm text-color-secondary text-center">
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  /*
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
  */
  items: { type: Array, required: true },
  border: {
    type: Boolean, required: false, default: true
  }
});
</script>
