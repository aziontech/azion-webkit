<template>
  <div class="items-center px-3 p-2 rounded-md border surface-border max-w-3xl">
    <div class="flex items-start justify-center flex-row gap-2">
      <Tag value="News" />
      <p class="text-sm text-color-secondary mt-1" style="display: inline-block;">
        {{ description }}
        <a :href="link" class="text-sm font-medium" style="color: var(--text-color-link); display: inline;">{{ cta }}</a>
      </p>
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
