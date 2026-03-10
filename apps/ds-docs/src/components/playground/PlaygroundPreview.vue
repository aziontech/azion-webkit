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
        classes.push('bg-[#0A0A0A]');
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
  <div class="flex flex-col h-full">
    <!-- Optional toolbar slot -->
    <div v-if="$slots.toolbar" class="flex items-center justify-end gap-2">
      <slot name="toolbar" />
    </div>

    <!-- Preview container wrapped for theme (class "dark" enables Tailwind dark: inside) -->
    <div :class="['flex-1 min-h-0 overflow-auto', wrapperClass]">
      <div
        :class="[
          'relative flex flex-wrap p-6 h-full overflow-auto',
          surfaceClasses,
          customClass,
          { 'items-center justify-center': center }
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
        class="flex flex-col items-center justify-center gap-2 p-8 text-gray-500 dark:text-gray-400"
      >
        <i class="pi pi-th-large text-2xl text-gray-400 dark:text-gray-500" aria-hidden="true" />
        <span class="text-sm">No component selected</span>
      </div>
    </div>
    </div>
  </div>
</template>
