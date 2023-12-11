<template>
  <a :href="link" :title="linkText" :target="linkTarget" class="bloc group">
    <div
      class="flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div class="h-full min-w-[50%]">
        <picture v-if="imgSrc" class="p-0 m-0">
          <img fetchpriority="high" class="w-full md:object-cover rounded-md group-hover:shadow-[0_0_0_0.2rem_rgba(243,101,43,0.32)]" width="576" height="324" :alt="imgAlt"
            :src="`${imgSrc}?ims=576x324`" />
        </picture>
      </div>
      <div class="flex flex-col lg:max-w-lg lg:items-start gap-4">
        <p v-if="date" class="text-xs text-color-secondary"> {{ date }} <span v-if="readTime">&bull; {{ readTime }}</span></p>
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
