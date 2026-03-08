<script setup lang="ts">
import { computed } from 'vue';
import type { NumberPropMetadata } from './types';

/**
 * PlaygroundNumberControl
 * 
 * Number input control for numeric props.
 * Supports min, max, and step constraints.
 */

interface Props {
  name: string;
  metadata: NumberPropMetadata;
  modelValue: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const inputId = computed(() => `prop-${props.name}`);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = parseFloat(target.value);
  if (!isNaN(value)) {
    emit('update:modelValue', value);
  }
}
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
      type="number"
      :value="modelValue"
      :min="metadata.min"
      :max="metadata.max"
      :step="metadata.step || 1"
      class="playground-control__input"
      @input="handleInput"
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
  -moz-appearance: textfield;
}

.playground-control__input::-webkit-outer-spin-button,
.playground-control__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.playground-control__input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
