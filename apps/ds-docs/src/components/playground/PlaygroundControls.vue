<script setup lang="ts">
import { computed } from 'vue';
import type { PropsDefinition, PropsValues, PropMetadata, PreviewTheme } from './types';
import PlaygroundPropControl from './PlaygroundPropControl.vue';

/**
 * PlaygroundControls
 *
 * Renders all prop controls for a component.
 * Groups controls by category and maintains
 * the reactive state for all props.
 * Includes reset and preview theme toggle.
 */

interface Props {
  propsDefinition: PropsDefinition;
  propsValues: PropsValues;
  /** Current preview theme (light/dark) */
  previewTheme?: PreviewTheme;
}

const props = withDefaults(defineProps<Props>(), {
  previewTheme: 'light',
});

const emit = defineEmits<{
  'update:propsValues': [values: PropsValues];
  'update:previewTheme': [value: PreviewTheme];
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

// Toggle preview theme between light and dark
function togglePreviewTheme() {
  emit('update:previewTheme', props.previewTheme === 'light' ? 'dark' : 'light');
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Header -->
    <div class="flex items-center justify-between pb-3 border-b border-gray-200">
      <h3 class="!text-lg !font-medium !text-gray-900 !m-0">
        Props
      </h3>
      <div class="flex items-center gap-1.5">
        <button
          class="flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-gray-500 bg-transparent border border-gray-300 rounded-md cursor-pointer transition-all duration-150 hover:text-gray-900 hover:bg-gray-50 font-mono"
          @click="resetToDefaults"
          title="Reset to defaults"
        >
          <i class="pi pi-refresh"/>
          Reset
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 p-0 text-xs text-gray-500 bg-transparent border border-gray-300 rounded-md cursor-pointer transition-all duration-150 hover:text-gray-900 hover:bg-gray-50"
          :title="previewTheme === 'light' ? 'Dark theme' : 'Light theme'"
          :aria-label="previewTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
          @click="togglePreviewTheme"
        >
          <i :class="previewTheme === 'light' ? 'pi pi-moon' : 'pi pi-sun'" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Controls by category -->
    <div
      v-for="(items, category) in groupedProps"
      :key="category"
      class="flex flex-col gap-3"
    >
      <h4
        v-if="Object.keys(groupedProps).length > 1"
        class="!text-xs !font-semibold !text-gray-500 !uppercase !font-mono !tracking-wide !m-0 !my-1 !mt-2"
      >
        {{ category }}
      </h4>
      <div class="flex flex-col gap-3">
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
