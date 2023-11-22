<template>
  <a :href="props.href" :title="props.title" class="no-underline flex group border-radius md:max-w-sm">
    <Card class="overflow-hidden"
      :pt="{ header: { class: 'border border-transparent	group-hover:border group-hover:border-solid group-hover:border-[#f3652b]' }, root: { class: 'shadow-none surface-ground flex flex-col gap-6 p-1' } }">
      <template #header v-if="props.imgSrc">
        <img class="w-full aspect-video" lazy alt="`${imgAlt}`" :src="`https://assets.azion.com${props.imgSrc}`" />
      </template>
      <template #content>
        <div class="flex flex-col justify-between gap-4">
          <div class="flex gap-2" v-if="props.tagList?.length">
            <Tag v-for="(tag, index) in props.tagList" :key="index" :value="tag" severity="info" />
          </div>
          <h3 class="text-xl font-bold text-color">{{ props.title }}</h3>
          <p class="text-sm text-color-secondary">{{ props.description }}</p>
          <p class="text-xs text-color-secondary">JUL, 13, 2020 • 11min read</p>
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

const props = defineProps({
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
  }
});
</script>
