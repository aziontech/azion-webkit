<script setup lang="ts">
import { computed } from 'vue';
import type { PropsDefinition, PropsValues, PropMetadata } from './types';
import PlaygroundPropControl from './PlaygroundPropControl.vue';

/**
 * PlaygroundControls
 * 
 * Renders all prop controls for a component.
 * Groups controls by category and maintains
 * the reactive state for all props.
 */

interface Props {
  propsDefinition: PropsDefinition;
  propsValues: PropsValues;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:propsValues': [values: PropsValues];
}>();

// Group props by category
const groupedProps = computed(() => {
  const groups: Record<string, Array<{ name: string; metadata: PropMetadata }>> = {
    General: [],
  };

  for (const [name, metadata] of Object.entries(props.propsDefinition)) {
    const category = metadata.category || 'General';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push({ name, metadata });
  }

  // Remove empty groups
  for (const [category, items] of Object.entries(groups)) {
    if (items.length === 0) {
      delete groups[category];
    }
  }

  return groups;
});

// Update a single prop value
function updateProp(name: string, value: unknown) {
  emit('update:propsValues', {
    ...props.propsValues,
    [name]: value,
  });
}

// Reset all props to defaults
function resetToDefaults() {
  const defaults: PropsValues = {};
  for (const [name, metadata] of Object.entries(props.propsDefinition)) {
    defaults[name] = metadata.default;
  }
  emit('update:propsValues', defaults);
}
</script>

<template>
  <div class="playground-controls">
    <!-- Header -->
    <div class="playground-controls__header">
      <h3 class="playground-controls__title">
        Props
      </h3>
      <button
        class="playground-controls__reset"
        @click="resetToDefaults"
        title="Reset to defaults"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Reset
      </button>
    </div>

    <!-- Controls by category -->
    <div
      v-for="(items, category) in groupedProps"
      :key="category"
      class="playground-controls__group"
    >
      <h4
        v-if="Object.keys(groupedProps).length > 1"
        class="playground-controls__category"
      >
        {{ category }}
      </h4>
      <div class="playground-controls__items">
        <PlaygroundPropControl
          v-for="item in items"
          :key="item.name"
          :name="item.name"
          :metadata="item.metadata"
          :model-value="propsValues[item.name]"
          @update:model-value="updateProp(item.name, $event)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.playground-controls__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.playground-controls__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.playground-controls__reset {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.playground-controls__reset:hover {
  color: #111827;
  background-color: #f9fafb;
}

.playground-controls__group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.playground-controls__category {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  font-family: Proto Mono;
  letter-spacing: 0.05em;
  margin: 0;
}

.playground-controls__items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
