<template>
  <a :href="link" :title="linkText" :target="linkTarget" class="block">
    <div
      class="flex flex-col lg:flex-row gap-4 lg:gap-8 border border-solid surface-border surface-card rounded-md">
      <div class="h-full">
        <picture v-if="imgSrc" class="p-0 m-0">
          <img fetchpriority="high" class="w-full md:object-cover" width="576" height="324" :alt="imgAlt"
            :src="`${imgSrc}?ims=576x324`" />
        </picture>
      </div>
      <div class="flex flex-col lg:justify-center lg:w-1/2 lg:items-start gap-4 px-4 md:px-20 pb-4 lg:pl-0 lg:py-4">
        <p class="text-xs text-color-secondary"> {{ date }} &bull; {{ readTime }}</p>
        <div class="flex gap-2">
          <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
        </div>
        <h1 class="text-3xl font-bold text-color">
          {{ title }}
        </h1>
        <p class="font-normal text-color-secondary">
          {{ description }}
        </p>
        <div v-if="authors" class="flex gap-2 items-center">
          <AvatarGroup>
            <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
          </AvatarGroup>
          <p class="text-xs text-color-secondary">
            {{ authors.title }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'

defineProps({
  imgSrc: {
    type: String,
    required: false

  },
  imgAlt: {
    type: String,
    required: false
  },
  tagList: {
    type: Array,
    required: false,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  linkTarget: {
    type: String,
    required: false,
    options: ['_blank', '_self'],
    default: '_self'
  },
  date: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true
  },
  authors: {
    type: Object,
    required: true
  }
});
</script>
