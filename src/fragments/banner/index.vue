<template>
  <div class="gap-2 flex flex-col md:flex-row items-center px-3 p-2 rounded-md border surface-border max-w-3xl">
    <Tag value="News" />
    <div class="flex items-center justify-center flex-wrap gap-1">
      <p class="text-sm text-color-secondary text-center">
        {{ description }}
      </p>
      <a :href="link" class="text-sm font-medium" style="color: var(--text-color-link)" target="_blank">{{ cta }}</a>
    </div>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';

defineProps({
  description: {
    type: String,
    required: true
  },
  cta: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>
