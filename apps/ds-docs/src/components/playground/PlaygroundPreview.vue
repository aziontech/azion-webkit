<script setup lang="ts">
import { computed, type Component } from 'vue';
import type { PropsValues, PreviewSurface, PreviewTheme } from './types';

/**
 * PlaygroundPreview
 *
 * Renders the component being edited in the playground.
 * Provides different surface backgrounds and responsive containers.
 * Supports light/dark theme switching for the preview area only.
 */

interface Props {
  /** The Vue component to render */
  component?: Component | null;
  /** Current props values */
  propsValues: PropsValues;
  /** Surface/background style */
  surface?: PreviewSurface;
  /** Preview theme (light/dark) - only affects the preview container */
  previewTheme?: PreviewTheme;
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
  previewTheme: 'light',
  center: true,
  minHeight: '120px',
  slotContent: '',
});

const emit = defineEmits<{
  (e: 'update:previewTheme', value: PreviewTheme): void;
}>();

// Compute surface classes
const surfaceClasses = computed(() => {
  const classes: string[] = [];
  const isDark = props.previewTheme === 'dark';

  if (isDark) {
    switch (props.surface) {
      case 'light':
        classes.push('bg-gray-800');
        break;
      case 'dark':
        classes.push('bg-gray-950');
        break;
      case 'neutral':
      default:
        classes.push('bg-gray-900');
        break;
    }
  } else {
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
  }

  return classes.join(' ');
});

// Wrapper class: add .dark for Tailwind dark: variants inside preview
const wrapperClass = computed(() => (props.previewTheme === 'dark' ? 'dark' : ''));

// Compute container styles
const containerStyle = computed(() => ({
  minHeight: props.minHeight,
}));
</script>

<template>
  <div class="playground-preview h-full">
    <!-- Optional toolbar slot -->
    <div v-if="$slots.toolbar" class="playground-preview__toolbar">
      <slot name="toolbar" />
    </div>

    <!-- Preview container wrapped for theme (class "dark" enables Tailwind dark: inside) -->
    <div :class="['playground-preview__wrapper', wrapperClass]">
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
        class="playground-preview__empty text-gray-500 dark:text-gray-400"
      >
        <svg class="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
        <span class="text-sm">No component selected</span>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.playground-preview {
  display: flex;
  flex-direction: column;
}

.playground-preview__container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  height: 100%;
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

.playground-preview__wrapper {
  flex: 1;
  min-height: 0;
  border-radius: 0.5rem;
  overflow: auto;
}
</style>
