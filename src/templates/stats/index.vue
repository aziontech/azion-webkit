<template>
  <div class="flex flex-col gap-2" :class="[{ 'items-center text-center': isCentralized }, { 'items-start': !isCentralized}]">
    <Tag v-if="tagLabel" :value="tagLabel" severity="info" />
    <p class="text-6xl	font-bold	"> {{ bigNumber }} </p>
    <p class="text-color-secondary"> {{ description }} </p>

  </div>
</template>

<script setup>
import Tag from 'primevue/tag'

defineProps({
  tagLabel: {
    type: String,
    required: false,
    default: null
  },
  bigNumber: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  isCentralized: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
