<template>
  <a :href="link" :title="title" class="no-underline flex group border-radius md:max-w-sm">
    <Card class="p-0 mt-0"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
      :pt="{
        header: { class: 'rounded border surface-border overflow-hidden' },
        root: { class: 'shadow-none surface-ground flex flex-col gap-6' }
      }">
      <template #header>
        <picture v-if="imgSrc" >
          <img height="209" width="372" loading="lazy" :alt="`${imgAlt}`" :src="`${imgSrc}?ims=372x209`"
               class="w-full aspect-video group-hover:scale-[1.10] transition-all duration-300" />
        </picture>
      </template>
      <template #content>
        <div class="flex flex-col justify-between gap-4">
          <div class="flex gap-2 flex-wrap" v-if="tagList?.length">
            <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
          </div>
          <h3 class="text-xl font-bold text-color group-hover:underline">{{ title }}</h3>
          <p class="text-sm text-color-secondary">{{ description }}</p>
          <p class="text-xs text-color-secondary">{{ date }} • {{ estimateReadTime }}</p>
          <div v-if="authors">
            <AvatarGroup>
              <Avatar v-for="({avatar, role, title }, index) in authors" :ariaLabel="`${title} - ${role}`" :key="index" :image="`${avatar}?ims=28x28`" shape="circle" />
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
