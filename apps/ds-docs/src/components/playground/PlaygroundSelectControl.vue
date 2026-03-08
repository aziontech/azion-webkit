<script setup lang="ts">
import { computed } from 'vue';
import type { SelectPropMetadata } from './types';

/**
 * PlaygroundSelectControl
 * 
 * Dropdown select for enum props.
 * Displays available options with optional labels.
 */

interface Props {
  name: string;
  metadata: SelectPropMetadata;
  modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputId = computed(() => `prop-${props.name}`);

const options = computed(() => {
  return props.metadata.options.map((option) => ({
    value: option,
    label: props.metadata.optionLabels?.[option] || option,
  }));
});
</script>

<template>
  <div class="playground-control">
    <label
      :for="inputId"
      class="playground-control__label"
    >
      {{ metadata.label || name }}
    </label>
    <select
      :id="inputId"
      :value="modelValue"
      class="playground-control__select"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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

.playground-control__select {
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-family: inherit;
  color: #111827;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  appearance: none;
}

.playground-control__select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
