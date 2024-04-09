<template>
  <div class="items-center px-3 p-2 rounded-md border surface-border max-w-3xl w-fit">
      <div class="w-fit text-center" style="display: inline-block;">
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
