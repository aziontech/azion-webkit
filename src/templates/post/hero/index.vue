<template>
    <div class="flex flex-col gap-10">
      <div class="flex gap-8 flex-col w-full">
        <Breadcrumb :model="breadcrumbItems" class="-ml-1" />
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-medium text-color">
            {{ title }}
          </h1>
          <p class="font-normal text-2xl text-color-secondary">
            {{ description }}
          </p>
        </div>
        <p class="font-normal text-xs text-color-secondary">
          {{ date }}
        </p>
        <div v-if="authors" class="flex flex-col md:flex-row gap-4 md:gap-8">
          <template v-for="({avatar, title, role}, index) in authors" :key="index">
            <div class="flex gap-3 md:max-w-56 items-center">
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
      <div class="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
        <TagBlockList :tagList="tagList" v-if="tagList" />
        <slot name="sharer"/>
      </div>
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
