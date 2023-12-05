<template>
  <div class="flex justify-center">
    <div class="flex flex-col ">
      <div class="py-4 flex gap-4 lg:gap-8 flex-col w-full">
        <Breadcrumb :model="breadcrumbItems" class="-ml-1" />
        <h1 class="text-4xl font-medium text-color">
          {{ title }}
        </h1>
        <TagBlockList :tagList="tagList" v-if="tagList" />
        <p class="font-normal text-color-secondary ">
          {{ date }}
        </p>
        <div v-if="authors">
          <AvatarGroup>
            <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
          </AvatarGroup>
          <p class="font-normal text-color-secondary">
            {{ authors.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Breadcrumb from 'primevue/breadcrumb';
import TagBlockList from '../../tag-block-list/index.vue';

// interface Authors {
//   avatars: [url, url],
//   title: String
// }

const props = defineProps({
  date: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  authors: {
    type: Object,
    required: false
  },
  postImage: {
    url: String,
    alt: String
  },
  breadcrumbItems: {
    type: Array,
    required: true
  },
  tagList: {
    type: Array,
    required: false
  }
})

const { date, title, authors } = props
</script>
