<template>
  <div class="w-full surface-section">
    <div class="container flex mx-auto lg:gap-20">
      <div class="w-full lg:w-2/3 pt-12">
        <div class="flex justify-between">
          <div class="flex">
            <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
          </div>
          <p class="m-0">
            {{ date }}
          </p>
        </div>
        <h1 class="text-5xl font-bold text-color my-6">
          {{ title }}
        </h1>
        <div class="flex" v-if="authors">
          <AvatarGroup>
            <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
          </AvatarGroup>
          <p class="font-normal text-color-secondary ml-2">
            {{ authors.title }}
          </p>
        </div>
      </div>
      <figure class="hidden lg:block p-0 m-0 w-1/3" v-if="postImage">
        <img :alt="postImage.alt" class="h-max w-max" :src="postImage.url">
      </figure>
    </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Tag from 'primevue/tag'

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
  tagList: {
    required: true,
    type: Array
  },
  authors: {
    type: Object,
    required: false
  },
  postImage: {
    url: String,
    alt: String
  }
})

const { date, title, tagList, authors } = props
</script>
