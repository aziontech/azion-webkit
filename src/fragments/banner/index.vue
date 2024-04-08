<template>
  <div class="gap-2 flex flex-col md:flex-row items-center text-center px-3 py-2 rounded-md border surface-border max-w-2xl">
    <Tag value="News" class="mr-2" />
    <p class="text-sm text-color-secondary">
      {{ description }}
      <a :href="link" class="text-sm font-medium" style="color: var(--text-color-link)" target="_blank">{{ cta }}</a>
    </p>
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
