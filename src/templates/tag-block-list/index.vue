<template>
  <div class="flex gap-2">
      <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
  </div>
</template>

<script setup>
import Tag from 'primevue/tag'

defineProps({
  tagList: {
    required: true,
    type: Array
  },
})
</script>
