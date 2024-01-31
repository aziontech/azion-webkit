<template>
  <a :href="link" :target="linkTarget" class="bloc group">
    <div
      class="flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div class="h-full min-w-[50%] border surface-border rounded-md overflow-hidden">
        <picture v-if="image" class="p-0 m-0">
          <img fetchpriority="high" class="w-full md:object-cover group-hover:scale-[1.05] transition-all duration-300" width="576" height="324" :alt="title"
            :src="`https://assets.azion.com${image}?ims=576x324`" />
        </picture>
      </div>
      <div class="flex flex-col lg:max-w-lg lg:items-start gap-4">
        <p v-if="date" class="text-xs text-color-secondary"> {{ date }} <span v-if="estimateReadTime">• {{ estimateReadTime }}</span></p>
        <div class="flex gap-2">
          <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
        </div>
        <h1 class="text-3xl font-bold text-color group-hover:underline">
          {{ title }}
        </h1>
        <p class="font-normal text-color-secondary">
          {{ description }}
        </p>
        <div v-if="authors" class="flex flex-wrap flex-col md:flex-row gap-4 md:gap-8">
          <template v-for="({avatar, title, role}, index) in authors" :key="index">
            <div class="flex gap-3 md:w-56 items-center">
              <div class="w-8 flex items-center">
                <Avatar size="xlarge" :image="avatar" shape="circle" />
              </div>
              <div>
                <p class="font-normal text-sm">
                  {{ title }}
                </p>
                <p class="font-normal text-xs text-color-secondary">
                  {{ role }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar'

defineProps({
  tagList: {
    type: Array,
    required: false,
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linkTarget: {
    type: String,
    required: false,
    options: ['_blank', '_self'],
    default: '_self'
  },
  image: {
    type: String, // pathname of the image
    required: false
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  estimateReadTime: {
    type: String,
    required: true
  },
});
</script>
