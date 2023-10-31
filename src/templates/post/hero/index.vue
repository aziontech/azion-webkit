<template>
  <div class="flex gap-4 mb-8">
    <div class="px-8">
      <div class="flex justify-between">
        <div class="flex">
          <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" />
        </div>
        <p class="m-0">
          {{ date }}
        </p>
      </div>
      <h1 class="text-5xl">
        {{ title }}
      </h1>
      <div class="flex">
        <AvatarGroup>
          <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
        </AvatarGroup>
        <p>
          {{ authors.title }}
        </p>
      </div>
    </div>
    <figure class="hidden lg:block p-0 m-0 min-w-fit" v-if="postImage">
      <img
        :alt="postImage.alt"
        class="h-auto w-full"
        :src="postImage.url">
    </figure>
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
      required: true
    },
    postImage: {
      url: String,
      alt: String
    }
  })

  const { date, title, tagList, authors } = props
</script>
