<template>
  <div class="px-3 p-2 rounded-md border surface-border max-w-3xl">
      <div class="text-center">
        <Tag value="News" class="mr-1.5" />
        <span class="text-sm text-color-secondary text-center *:">
          {{ description }}
        </span>
        <a :href="link" class="text-sm font-medium ml-1" style="color: var(--text-color-link); display: inline;">{{ cta }}</a>
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
