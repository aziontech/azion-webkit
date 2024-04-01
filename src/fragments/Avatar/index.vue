<template>
  <div class="flex gap-3 items-center">
    <Avatar :ariaLabel="ariaLabel" :image="image" shape="circle" />
    <div class="flex flex-col">
      <p class="text-sm">
        {{ title }}
      </p>
      <template v-if="description">
        <p class="text-xs text-color-secondary">
          {{ description }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';

defineProps({
  image: {
    type: String,
    required: true,
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})
</script>
