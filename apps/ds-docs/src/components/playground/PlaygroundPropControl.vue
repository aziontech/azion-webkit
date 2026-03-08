<script setup lang="ts">
import { computed } from 'vue';
import type { PropMetadata, PropsValues } from './types';
import PlaygroundTextControl from './PlaygroundTextControl.vue';
import PlaygroundBooleanControl from './PlaygroundBooleanControl.vue';
import PlaygroundNumberControl from './PlaygroundNumberControl.vue';
import PlaygroundSelectControl from './PlaygroundSelectControl.vue';

/**
 * PlaygroundPropControl
 * 
 * Dynamic control renderer that selects the appropriate
 * control component based on the prop metadata.
 */

interface Props {
  name: string;
  metadata: PropMetadata;
  modelValue: unknown;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: unknown];
}>();

// Determine which control to render based on metadata
const controlType = computed(() => props.metadata.control);
</script>

<template>
  <div class="playground-prop-control">
    <!-- Text Control -->
    <PlaygroundTextControl
      v-if="controlType === 'text'"
      :name="name"
      :metadata="metadata as any"
      :model-value="(modelValue as string)"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Boolean Control -->
    <PlaygroundBooleanControl
      v-else-if="controlType === 'boolean'"
      :name="name"
      :metadata="metadata as any"
      :model-value="(modelValue as boolean)"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Number Control -->
    <PlaygroundNumberControl
      v-else-if="controlType === 'number'"
      :name="name"
      :metadata="metadata as any"
      :model-value="(modelValue as number)"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Select Control -->
    <PlaygroundSelectControl
      v-else-if="controlType === 'select'"
      :name="name"
      :metadata="metadata as any"
      :model-value="(modelValue as string)"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <!-- Fallback for unknown control types -->
    <div v-else class="playground-prop-control__unknown">
      <span class="text-xs text-gray-500">
        Unknown control type: {{ controlType }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.playground-prop-control {
  width: 100%;
}

.playground-prop-control__unknown {
  padding: 0.5rem;
  background-color: #fef3c7;
  border-radius: 0.375rem;
}
</style>
