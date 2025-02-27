<template>
  <a :href="link" :target="linkTarget" class="block group">
    <div class="flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div class="h-full min-w-[50%] border surface-border rounded-md overflow-hidden">
        <picture v-if="image" class="p-0 m-0 block overflow-hidden w-full max-h-96">
          <img
            fetchpriority="high"
            class="w-full md:object-cover group-hover:scale-[1.05] transition-all duration-300"
            width="576"
            height="324"
            :alt="title"
            :src="image" />
        </picture>
      </div>
      <div class="flex flex-col xl:max-w-lg min-w-1/2 xl:min-w-[512px] lg:items-start gap-5">
        <div class="flex flex-col gap-3 lg:gap-4">
          <h1 class="text-heading-3 font-medium text-color">
            {{ title }}
          </h1>
          <p class="text-body-3 text-color-secondary">
            {{ description }}
          </p>
        </div>
        <div class="flex md:flex-row gap-2.5 items-center">
          <template v-if="authors">
            <AvatarGroup>
              <Avatar v-for="({avatar, title, role}, index) in authors" :ariaLabel="`${title} - ${role}`" :key="index" size="xlarge" :image="`${avatar}?ims=40x40`" shape="circle" />
            </AvatarGroup>
          </template>
          <p v-if="date" class="text-xs text-color-secondary">
            {{ date }} <span v-if="estimateReadTime">• {{ estimateReadTime }} </span>
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

defineProps({
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
  }
});
</script>
