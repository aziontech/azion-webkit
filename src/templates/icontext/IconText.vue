<template>
  <div class="flex gap-3">
    <div>
      <Tile v-bind="{ severity }">
        <i :class="icon" />
      </Tile>
    </div>
    <div class="max-w-lg">
      <div class="flex gap-3 items-center">
        <p class="text-sm font-medium leading-tight">
          {{ title }}
        </p>
        <Tag v-if="tag" :value="tag" :severity="tagSeverity" :pt="{
          root: {
            class: 'h-6'
          }
        }" />
      </div>
      <p v-if="description" class="text-xs font-normal text-color-secondary mt-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';
import Tile from '../tile';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  tag: {
    type: String,
    required: false,
  },
  tagSeverity: {
    type: String,
    required: false,
    default: 'info'
  },
  severity: {
    type: String,
    required: false,
    default: 'default',
    options: ['default', 'primary']
  }
});
</script>
