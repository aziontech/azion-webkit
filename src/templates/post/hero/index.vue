<template>
  <div class="w-full surface-section">
    <div class="px-6 py-4 lg:py-0 lg:pl-16 xl:pl-40 lg:pr-0 flex flex-col-reverse lg:flex-row gap-4 lg:gap-32">
      <div class="w-full lg:w-2/3 lg:py-14 flex flex-col gap-4 lg:gap-9 lg:-mr-14">
        <div class="flex flex-col gap-4 lg:gap-6">
          <div>
            <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
          </div>
          <h1 class="text-5xl font-bold text-color">
            {{ title }}
          </h1>
        </div>
        <div v-if="authors">
          <AvatarGroup>
            <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
          </AvatarGroup>
          <p class="font-normal text-color-secondary pt-3">
            {{ authors.title }}
          </p>
        </div>
        <p class="font-normal text-color-secondary ">
          {{ date }}
        </p>
      </div>
        <figure class="p-0 m-0 w-full lg:w-1/3 flex justify-center align-center" v-if="postImage">
          <img :alt="postImage.alt" class="h-full w-full lg:object-cover max-w-md lg:max-w-none" :src="postImage.url">
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
