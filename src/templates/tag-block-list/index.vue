<template>
  <div class="flex gap-2 lg:gap-8">
    <div>
      <Tag class="mr-2" v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
    </div>
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
