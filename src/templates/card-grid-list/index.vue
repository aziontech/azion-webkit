<template>
  <div class="transition-all surface-ground grid m-0 p-0 justify-between gap-6 lg:gap-16"  :class="pt.class">
    <template v-if="cardType === 'blog'">
      <CardBlog v-for="({ image, link, title, description, authors, estimateReadTime, date }, index) in data" :link="link" :key="index" :imgSrc="image" :imgAlt="title" :title="title" :description="description" :authors="authors" :estimateReadTime="estimateReadTime" :date="date" />
    </template>
    <template v-if="cardType === 'cases'">
      <CardCases v-for="({image, link, description, alt, tagList}, index) in data" :key="index"
        :image="image"
        :imgAlt="alt"
        :description="description"
        :link="link"
        :tagList="tagList"
      />
    </template>
  </div>
</template>

<script setup>
import CardBlog from '../card/blog.vue';
import CardCases from '../card/cases.vue';

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
  },
  cardType: {
    type: String,
    required: false,
    default: 'blog',
    options: ['blog', 'cases']
  }
});


</script>
