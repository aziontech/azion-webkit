<template>
  <ul class="flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center rounded px-8 gap-y-6 py-10" :class="[{ 'border surface-border' : border}]">
    <li class="flex flex-col gap-2 justify-evenly min-w-32 md:px-4 max-w-64" v-for="item in items" :key="item.title">
      <p class="text-base text-color-secondary font-medium" 
        :class="[
            {'text-center' : centralized },
            {'text-left' : !centralized }
          ]">
        {{ item.titleup }}
      </p>
      <strong class="text-6xl font-medium"
      :class="[
            {'text-center' : centralized },
            {'text-left' : !centralized }
          ]">
        {{ item.title }}
      </strong>
      <p class="text-base text-color-secondary font-medium"
      :class="[
            {'text-center' : centralized },
            {'text-left' : !centralized }
          ]">
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
  centralized: {
    type: Boolean, required: false, default: true
  },
  border: {
    type: Boolean, required: false, default: true
  }
});
</script>
