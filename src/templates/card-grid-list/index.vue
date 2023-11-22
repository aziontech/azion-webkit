<template>
  <div class="container grid m-0 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
      <Card v-for="({ image, link, title, description, tagList }, index) in data" :href="link" :key="index" :imgSrc="image" :imgAlt="title" :tagList="tagList" :title="title" :description="description" />
  </div>
</template>

<script setup>
import Card from '../card/index.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    deafault: []
  }
});

const { data } = props;
</script>
