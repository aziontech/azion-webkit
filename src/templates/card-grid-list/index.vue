<template>
  <div class="container mx-auto">
    <div class="post-list grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-4 pt-6">
      <a class="no-underline flex" v-for="({ image, link, title, description, tagList }, index) in data" :href="link" :key="index">
        <Card :imgSrc="image" :imgAlt="title" :tagList="tagList" :title="title" :description="description" />
      </a>
    </div>
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
