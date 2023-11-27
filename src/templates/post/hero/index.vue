<template>
  <div class="surface-section flex justify-center py-6 lg:py-14 px-4 md:px-8 ">
    <div class="container flex flex-col ">
      <div class="py-4 flex gap-4 lg:gap-8 flex-col w-full">
        <Breadcrumb :model="breadcrumbItems" class="-ml-1" />
        <h1 class="text-5xl font-bold text-color">
          {{ title }}
        </h1>
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
  }
})

const { date, title, authors } = props
</script>
