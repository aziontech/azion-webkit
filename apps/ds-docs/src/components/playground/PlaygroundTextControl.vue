<script setup lang="ts">
import { computed } from 'vue';
import type { TextPropMetadata } from './types';

/**
 * PlaygroundTextControl
 * 
 * Text input control for string props.
 * Provides a simple text input with optional placeholder.
 */

interface Props {
  name: string;
  metadata: TextPropMetadata;
  modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputId = computed(() => `prop-${props.name}`);
const placeholder = computed(() => props.metadata.placeholder || `Enter ${props.name}...`);
</script>

<template>
  <div class="playground-control">
    <label
      :for="inputId"
      class="playground-control__label"
    >
      {{ metadata.label || name }}
    </label>
    <input
      :id="inputId"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      class="playground-control__input"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.playground-control {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.playground-control__label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #374151;
  text-transform: capitalize;
}

.playground-control__input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-family: inherit;
  color: #111827;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.playground-control__input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.playground-control__input::placeholder {
  color: #9ca3af;
}
</style>
