<template>
  <div class="flex flex-col gap-6 lg:gap-10 ">
    <div class="pb-4 flex gap-4 lg:gap-8 flex-col w-full">
      <Breadcrumb :model="breadcrumbItems" class="-ml-1" />
      <h1 class="text-4xl font-medium text-color">
        {{ title }}
      </h1>
      <p class="font-normal text-color-secondary">
        {{ date }}
      </p>
      <p class="font-normal text-color-secondary">
        {{ description }}
      </p>
      <div v-if="authors" class="flex gap-8">
        <template v-for="({avatar, title, role}, index) in authors" :key="index">
          <div class="flex gap-3">
            <Avatar size="xlarge" :image="avatar" shape="circle" />
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
  <div class="flex justify-between items-center">
    <TagBlockList :tagList="tagList" v-if="tagList" />
    <slot name="sharer"/>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb';
import TagBlockList from '../../tag-block-list/index.vue';

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
},
tagList: {
  type: Array,
  required: false
},
description: {
  type: String,
  required: true
}
})

const { date, title, authors } = props
</script>
