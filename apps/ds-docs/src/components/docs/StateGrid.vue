<script setup lang="ts">
/**
 * StateGrid
 * 
 * Displays component states in a grid format with visual examples.
 * Dynamically renders states based on configuration.
 */

interface StateConfig {
  name: string;
  label: string;
  description: string;
  props?: Record<string, unknown>;
}

interface Props {
  columns?: 2 | 3 | 4;
  states?: StateConfig[];
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  states: () => [
    { name: 'default', label: 'Default', description: 'Normal resting state', props: {} },
    { name: 'hover', label: 'Hover', description: 'Cursor is over the element', props: { state: 'hover' } },
    { name: 'focus', label: 'Focus', description: 'Element has keyboard focus', props: { state: 'focus' } },
    { name: 'active', label: 'Active', description: 'Element is being pressed', props: { state: 'active' } },
    { name: 'disabled', label: 'Disabled', description: 'Element is not interactive', props: { disabled: true } },
  ],
});

const gridCols = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};
</script>

<template>
  <div class="state-grid">
    <div :class="`grid ${gridCols[columns]} gap-4`">
      <div
        v-for="state in states"
        :key="state.name"
        class="state-item border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700"
      >
        <div class="state-item__preview p-6 bg-white flex items-center justify-center min-h-[80px] dark:bg-gray-900">
          <slot :name="state.name" :state="state.props" />
        </div>
        <div class="state-item__label px-4 py-2 bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <span class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ state.label }}</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ state.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
