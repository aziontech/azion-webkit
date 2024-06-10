<template>
  <a :href="link" :title="title" class="no-underline flex group border-radius md:max-w-sm focus:outline-[rgba(243,100,43,.624)]">
    <Card class="p-0 mt-0"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
      :pt="getPTOptions()">
      <template #header v-if="imgSrc" >
        <picture>
          <img height="209" width="372" loading="lazy" :alt="`${imgAlt}`" :src="`${imgSrc}?ims=372x209`"
               class="w-full aspect-video group-hover:scale-[1.10] transition-all duration-300" />
        </picture>
      </template>
      <template #content>
        <div class="flex flex-col gap-4" :class="{
         'justify-center h-full' : direction == 'row',
         'justify-between' : direction == 'column'
        }">
          <h2 class="text-xl font-bold text-color">{{ title }}</h2>
          <p class="text-sm text-color-secondary">{{ description }}</p>
          <template v-if="date || estimateReadTime">
            <p class="text-xs text-color-secondary">
              {{ date }}
              <template v-if="estimateReadTime">
                • {{ estimateReadTime }}
              </template>
            </p>
          </template>
            <div v-if="authors">
              <AvatarGroup>
                <Avatar v-for="({avatar, role, title }, index) in authors" :ariaLabel="`${title} - ${role}`" :key="index" :image="`${avatar}?ims=40x40`" shape="circle" v-tooltip.bottom="{ value: `${title}`, showDelay: 200 }"
                />
              </AvatarGroup>
            </div>
        </div>
      </template>
    </Card>
  </a>
</template>

<script setup>
import Card from 'primevue/card';
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
    required: false,
  },
  estimateReadTime: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: false,
    default: "column",
    options: ["column", "row"]
  },
});

const getPTOptions = () => {
  const response = {
      root: 'shadow-none bg-transparent gap-6',
      header: 'rounded border surface-border overflow-hidden',
      content: 'h-full'
    }

  response.root = props.direction == 'row' ? `${response.root} grid grid-cols-[repeat(2,_minmax(320px,_1fr))]` : `${response.root} flex flex-col`

  return response
}
</script>
