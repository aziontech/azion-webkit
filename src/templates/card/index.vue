<template>
  <a :href="props.href" :title="props.title" class="no-underline flex">
    <Card class="border-radius hover:shadow hover:shadow-orange-500 overflow-hidden">
      <template #header v-if="props.imgSrc">
        <img lazy alt="`${imgAlt}`" :src="`https://assets.azion.com${props.imgSrc}`" />
      </template>
      <template #content>
        <div class="p-10 grid gap-4">
          <div class="flex gap-2" v-if="props.tagList?.length">
            <Tag v-for="(tag, index) in props.tagList" :key="index" :value="tag" severity="info" />
          </div>
          <h3 class="text-2xl font-bold text-color ">{{ props.title }}</h3>
          <p class="text-base text-color-secondary">{{ props.description }}</p>
        </div>
      </template>
    </Card>
  </a>
</template>

<script setup>
import Card from 'primevue/card';
import Tag from 'primevue/tag';

const props = defineProps({
  imgSrc: {
    type: String,
    required: false,
    default: false
  },
  imgAlt: {
    type: String,
    required: false,
  },
  tagList: {
    type: Array,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>
