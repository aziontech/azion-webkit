<script setup lang="ts">
import { computed, type Component } from 'vue';
import type { PropsValues, PreviewSurface } from './types';

/**
 * PlaygroundPreview
 * 
 * Renders the component being edited in the playground.
 * Provides different surface backgrounds and responsive containers.
 */

interface Props {
  /** The Vue component to render */
  component?: Component | null;
  /** Current props values */
  propsValues: PropsValues;
  /** Surface/background style */
  surface?: PreviewSurface;
  /** Custom class for preview container */
  customClass?: string;
  /** Center the content */
  center?: boolean;
  /** Minimum height */
  minHeight?: string;
  /** Slot content for the component */
  slotContent?: string;
}

const props = withDefaults(defineProps<Props>(), {
  component: null,
  surface: 'neutral',
  center: true,
  minHeight: '120px',
  slotContent: '',
});

// Compute surface classes
const surfaceClasses = computed(() => {
  const classes: string[] = [];

  switch (props.surface) {
    case 'light':
      classes.push('bg-white');
      break;
    case 'dark':
      classes.push('bg-gray-800');
      break;
    case 'neutral':
    default:
      classes.push('bg-gray-50');
      break;
  }

  return classes.join(' ');
});

// Compute container styles
const containerStyle = computed(() => ({
  minHeight: props.minHeight,
}));
</script>

<template>
  <div class="playground-preview">
    <!-- Preview container -->
    <div
      :class="[
        'playground-preview__container',
        surfaceClasses,
        customClass,
        { 'playground-preview--center': center }
      ]"
      :style="containerStyle"
    >
      <!-- Component rendering -->
      <component
        :is="component"
        v-if="component"
        v-bind="propsValues"
      >
        {{ slotContent }}
      </component>
      
      <!-- Empty state when no component -->
      <div
        v-else
        class="playground-preview__empty"
      >
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
        <span class="text-sm text-gray-500">No component selected</span>
      </div>
    </div>

    <!-- Surface switcher (future enhancement) -->
    <div class="playground-preview__toolbar">
      <slot name="toolbar" />
    </div>
  </div>
</template>

<style scoped>
.playground-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.playground-preview__container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: auto;
}

.playground-preview--center {
  align-items: center;
  justify-content: center;
}

.playground-preview__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
}

.playground-preview__toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
