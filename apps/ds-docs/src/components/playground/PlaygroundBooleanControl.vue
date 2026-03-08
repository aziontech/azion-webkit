<script setup lang="ts">
import { computed } from 'vue';
import type { BooleanPropMetadata } from './types';

/**
 * PlaygroundBooleanControl
 * 
 * Toggle switch for boolean props.
 * Provides a visual toggle with on/off states.
 */

interface Props {
  name: string;
  metadata: BooleanPropMetadata;
  modelValue: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const inputId = computed(() => `prop-${props.name}`);
</script>

<template>
  <div class="playground-control">
    <label
      :for="inputId"
      class="playground-control__label"
    >
      {{ metadata.label || name }}
    </label>
    <button
      :id="inputId"
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :class="['playground-toggle', { 'playground-toggle--active': modelValue }]"
      @click="emit('update:modelValue', !modelValue)"
    >
      <span class="playground-toggle__thumb" />
    </button>
  </div>
</template>

<style scoped>
.playground-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.playground-control__label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #374151;
  text-transform: capitalize;
}

.playground-toggle {
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  background-color: #d1d5db;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.playground-toggle:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.playground-toggle--active {
  background-color: #3b82f6;
}

.playground-toggle__thumb {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.playground-toggle--active .playground-toggle__thumb {
  transform: translateX(1rem);
}
</style>
