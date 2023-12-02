<template>
  <a :href="link" :title="title" class="no-underline flex group border-radius md:max-w-sm">
    <Card class="p-0 mt-0"
      :pt="{ header: { class: 'group-hover:shadow-[0_0_0_0.2rem_rgba(243,101,43,0.32)] rounded' }, root: { class: 'shadow-none surface-ground flex flex-col gap-6' } }">
      <template #header v-if="imgSrc">
        <img class="w-full aspect-video rounded" lazy alt="`${imgAlt}`" :src="`https://assets.azion.com${imgSrc}?ims=372x209`" />
      </template>
      <template #content>
        <div class="flex flex-col justify-between gap-4">
          <div class="flex gap-2" v-if="tagList?.length">
            <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
          </div>
          <h3 class="text-xl font-bold text-color">{{ title }}</h3>
          <p class="text-sm text-color-secondary">{{ description }}</p>
          <p class="text-xs text-color-secondary">{{ date }} • {{ estimateReadTime }}</p>
          <div v-if="authors">
            <AvatarGroup>
              <Avatar v-for="(image, index) in authors.avatars" :key="index" :image="image" shape="circle" />
            </AvatarGroup>
          </div>
        </div>
      </template>
    </Card>
  </a>
</template>

<script setup>
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'

defineProps({
  imgSrc: {
    type: String,
    required: false,
  },
  imgAlt: {
    type: String,
    required: false,
  },
  tagList: {
    type: Array,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: Object,
    required: false
  },
  date: {
    type: String,
    required: true,
  },
  estimateReadTime: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>
