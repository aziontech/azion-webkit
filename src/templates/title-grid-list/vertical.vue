<template>
  <ul class="list-none p-0 gap-4 lg:gap-11 flex flex-col">
    <li v-for="({tagList, title, description, link, linkTarget}, index) in props.data" :key="index">
      <a :href="link" :title="title" :target="linkTarget" class="block no-underline text-current mb-2 group">
        <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
        <div class="hover:underline my-2">
          <p class="lg:text-2xl font-bold text-color">{{ title }}</p>
          <p class="truncate text-small font-normal text-color-secondary">{{ description }}</p>
        </div>
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
