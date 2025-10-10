<template>
  <div :class="containerClasses">
    <img
      :src="src"
      :alt="alt"
      :class="imageClasses"
      :loading="loading"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  cover: {
    type: Boolean,
    default: false
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  }
})

const emit = defineEmits(['load', 'error'])

const containerClasses = computed(() => [
  'relative overflow-hidden',
  props.fullWidth ? 'w-full' : 'w-auto'
])

const imageClasses = computed(() => [
  'block',
  props.fullWidth ? 'w-full' : 'w-auto',
  props.cover ? 'h-full object-cover' : 'h-auto'
])
</script>
