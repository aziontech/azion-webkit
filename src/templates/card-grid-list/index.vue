<template>
  <div class="transition-all surface-ground grid m-0 p-0 justify-between gap-6 lg:gap-16"  :class="pt.class">
      <Card v-for="({ image, link, title, description, tagList, authors, estimateReadTime, date }, index) in data" :link="link" :key="index" :imgSrc="image" :imgAlt="title" :tagList="tagList" :title="title" :description="description" :authors="authors" :estimateReadTime="estimateReadTime" :date="date" />
  </div>
</template>

<script setup>
import Card from '../card/index.vue';

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  pt: {
    type: Object,
    required: false,
    default: () => { return { class: "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" }}
  }
});
</script>
