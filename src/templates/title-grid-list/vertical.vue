<template>
  <ul class="list-none p-0">
    <li class="mb-8"  v-for="({tagList, title, description, buttonText, link}, index) in props.data" :key="index">
      <a :href="link" :title="title" :target="linkTarget" class="block no-underline text-current  mb-2">
        <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" />
        <p class="font-bold lg:text-2xl">{{ title }}</p>
        <p class="text-small">{{ description }}</p>
        <span class="text-small">{{ buttonText }}</span>
      </a>
    </li>
  </ul>
</template>
<script setup>
import Tag from 'primevue/tag'

// interface listItem {
//   tagList: Array<string>,
//   title: string,
//   description: String,
//   buttonText: String,
//   link: String,
//   linkTarget: _self, _blank
// }

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
