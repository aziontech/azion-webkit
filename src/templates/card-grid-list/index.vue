<template>
  <div class="transition-all container surface-ground grid m-0 p-0 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-16 justify-between">
      <Card v-for="({ image, link, title, description, tagList, authors }, index) in data" :href="link" :key="index" :imgSrc="image" :imgAlt="title" :tagList="tagList" :title="title" :description="description" :authors="authors" />
  </div>
</template>


<script setup>
import Card from '../card/index.vue';

defineProps({
  data: {
    type: Array,
    required: true,
    deafault: []
  }
});
</script>
