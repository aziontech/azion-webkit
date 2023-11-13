<template>
  <div class="container mx-auto">
    <h2>Newest</h2>
    <div class="post-list grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-4 pt-6">
      <a :href="link" v-for="({ image, link, title, description, tagList }, index) in data" :key="index" class="no-underline flex">
        <Card class="border-radius-md">
          <template #header>
            <img class="border-radius-md" lazy alt="user header" :src="`https://assets.azion.com${image}`" />
          </template>
          <template #title>
            <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" class="ml-2" />
            <h3 class="text-2xl font-bold text-color p-2 my-0">
              {{ title }}
            </h3>
          </template>
          <template #content>
            <p class="text-base text-color-secondary px-2">
              {{ description }}
            </p>
          </template>
        </Card>
      </a>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Tag from 'primevue/tag';

// interface Props {
//   data: Array<{
//     title: String,
//     description: String,
//     link: String,
//     image: String,
//     tagList: Array[String]
//   }>
// }

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const { data } = props
</script>
