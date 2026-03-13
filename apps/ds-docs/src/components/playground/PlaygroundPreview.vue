<script setup lang="ts">
import { computed, type Component } from 'vue';
import type { PropsValues, PreviewSurface, PreviewTheme } from './types';
import { useAzionStatusFetchMock } from './useAzionStatusFetchMock';

/**
 * PlaygroundPreview
 *
 * Renders the component being edited in the playground.
 * Provides different surface backgrounds and responsive containers.
 * Supports light/dark theme switching for the preview area only.
 * When demo-only values include demoStatus (e.g. Azion System Status),
 * installs a fetch mock so the component shows the simulated status.
 */

interface Props {
  /** The Vue component to render */
  component?: Component | null;
  /** Current props values (excluding demo-only; these are not passed to the component) */
  propsValues: PropsValues;
  /** Demo-only values (e.g. "Simulate status") used for mocks in the preview */
  demoOnlyValues?: PropsValues;
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
  demoOnlyValues: () => ({}),
  surface: 'neutral',
  previewTheme: 'light',
  center: true,
  minHeight: '120px',
  slotContent: '',
});

// When "Simulate status" is set, mock status.azion.com API so the component shows that status
const demoStatus = computed(() => (props.demoOnlyValues?.demoStatus as string) ?? undefined);
useAzionStatusFetchMock(demoStatus);

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
        classes.push('bg-base');
        break;
      case 'dark':
        classes.push('bg-base');
        break;
      case 'neutral':
      default:
        classes.push('bg-base');
        break;
    }
  } else {
    switch (props.surface) {
      case 'light':
        classes.push('bg-base');
        break;
      case 'dark':
        classes.push('bg-base');
        break;
      case 'neutral':
      default:
        classes.push('bg-base');
        break;
    }
  }

  return classes.join(' ');
});

// Wrapper class:
// - .dark when preview is dark → dark: variants apply inside preview only
// - .playground-preview-light when preview is light → token plugin re-emits light utilities
//   with higher specificity so they win over html.dark / .azion.azion-dark (site dark + preview light)
const wrapperClass = computed(() =>
  props.previewTheme === 'dark' ? 'dark' : 'playground-preview-light'
);

// Azion theme class for preview container so PrimeVue/components get correct CSS vars (light/dark)
const azionThemeClass = computed(() =>
  props.previewTheme === 'dark' ? 'azion-dark' : 'azion-light'
);

// Compute container styles
const containerStyle = computed(() => ({
  minHeight: props.minHeight,
}));
</script>

<template>
  <!-- Root establishes preview theme + bg so the whole preview area (incl. toolbar) matches light/dark -->
  <div
    class="flex flex-col h-full min-h-[200px] bg-base"
    :class="wrapperClass"
  >
    <!-- Optional toolbar slot -->
    <div v-if="$slots.toolbar" class="flex items-center justify-end gap-2 px-2 pt-2">
      <slot name="toolbar" />
    </div>

    <!-- Scroll region shares same bg so no white/transparent gaps when site is dark and preview is light -->
    <div class="flex-1 min-h-0 overflow-auto bg-base">
      <div
        :class="[
          'azion relative flex flex-wrap p-6 h-full overflow-auto',
          azionThemeClass,
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
        class="flex flex-col items-center justify-center gap-2 p-8 text-muted dark:text-muted"
      >
        <i class="pi pi-th-large text-2xl text-muted dark:text-muted" aria-hidden="true" />
        <span class="text-sm">No component selected</span>
      </div>
    </div>
    </div>
  </div>
</template>
