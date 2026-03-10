<script setup lang="ts">
import { ref, computed, watch, type Component, onMounted, shallowRef } from 'vue';
import type { PropsDefinition, PropsValues, PlaygroundConfig, PlaygroundHooks, GeneratedCode, PreviewSurface, PreviewTheme } from './types';
import { generateCode } from './code-generator';
import PlaygroundPreview from './PlaygroundPreview.vue';
import PlaygroundControls from './PlaygroundControls.vue';
import PlaygroundCode from './PlaygroundCode.vue';

// Import demo components for registry
import { AzButton } from '../demo';

/**
 * Component Registry
 * 
 * Maps component names to their actual component objects.
 * This is necessary because Astro's client:load directive cannot
 * serialize Vue component objects as props.
 */
const componentRegistry: Record<string, Component> = {
  AzButton,
};

/**
 * Playground
 * 
 * Main playground container that orchestrates the interactive
 * component preview, controls, and code generation.
 * 
 * Usage:
 * ```vue
 * <Playground
 *   component-name="AzButton"
 *   :props="buttonProps"
 * />
 * ```
 */

interface Props {
  /** The Vue component to render (for backwards compatibility) */
  component?: Component;
  /** Component name for lookup in registry */
  componentName: string;
  /** Props definition with metadata */
  props: PropsDefinition;
  /** Initial props values (optional) */
  initialValues?: PropsValues;
  /** Preview surface style */
  surface?: PreviewSurface;
  /** Whether to show code panel */
  showCode?: boolean;
  /** Whether to show controls panel */
  showControls?: boolean;
  /** Whether code is initially visible */
  codeInitiallyVisible?: boolean;
  /** Custom preview container class */
  previewClass?: string;
  /** Slot content for the component */
  slotContent?: string;
  /** Extensibility hooks */
  hooks?: PlaygroundHooks;
}

const props = withDefaults(defineProps<Props>(), {
  component: undefined,
  surface: 'neutral',
  showCode: true,
  showControls: true,
  codeInitiallyVisible: true,
  slotContent: '',
});

// Resolve component from registry or use provided component
const resolvedComponent = computed(() => {
  // If component is directly provided, use it (for backwards compatibility)
  if (props.component) {
    return props.component;
  }
  
  // Otherwise, look up in registry by name
  return componentRegistry[props.componentName] || null;
});

// Initialize props values with defaults
function initializeValues(): PropsValues {
  const values: PropsValues = {};

  // Use initial values if provided
  if (props.initialValues) {
    Object.assign(values, props.initialValues);
  }

  // Fill in defaults for any missing props
  for (const [name, metadata] of Object.entries(props.props)) {
    if (values[name] === undefined && metadata.default !== undefined) {
      values[name] = metadata.default;
    }
  }

  return values;
}

// Reactive state
const propsValues = ref<PropsValues>(initializeValues());
const previewTheme = ref<PreviewTheme>('light');

// Generate code from current state
const generatedCode = computed<GeneratedCode>(() => {
  return generateCode(
    props.componentName,
    props.props,
    propsValues.value,
    props.slotContent
  );
});

// Update props values
function updatePropsValues(newValues: PropsValues) {
  propsValues.value = newValues;
  
  // Call hook if provided
  props.hooks?.onPropsChange?.(newValues);
}

// Handle code copy
function handleCodeCopy(code: string) {
  props.hooks?.onCodeCopy?.(code);
}

// Reset to defaults
function resetToDefaults() {
  propsValues.value = initializeValues();
}

// Expose methods for external control
defineExpose({
  resetToDefaults,
  getPropsValues: () => propsValues.value,
  getGeneratedCode: () => generatedCode.value,
});
</script>

<template>
  <div class="playground">
    <!-- Main content area -->
    <div class="playground__main">
      <!-- Preview section -->
      <div class="playground__preview">
        <PlaygroundPreview
          :component="resolvedComponent"
          :props-values="propsValues"
          :surface="surface"
          :preview-theme="previewTheme"
          :custom-class="previewClass"
          :slot-content="slotContent"
          @update:preview-theme="previewTheme = $event"
        >
          <template #toolbar>
            <slot name="preview-toolbar" />
          </template>
        </PlaygroundPreview>
      </div>

      <!-- Controls section -->
      <div
        v-if="showControls"
        class="playground__controls"
      >
        <PlaygroundControls
          :props-definition="props.props"
          :props-values="propsValues"
          :preview-theme="previewTheme"
          @update:props-values="updatePropsValues"
          @update:preview-theme="previewTheme = $event"
        />
      </div>
    </div>

    <!-- Code section -->
    <div
      v-if="showCode"
      class="playground__code"
    >
      <PlaygroundCode
        :code="generatedCode"
        :initially-expanded="codeInitiallyVisible"
        @copy="handleCodeCopy"
      />
    </div>

    <!-- Future extensibility slots -->
    <div v-if="$slots.extra" class="playground__extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.playground__main {
  display: grid;
  grid-template-columns: 1fr 280px;
}

@media (max-width: 768px) {
  .playground__main {
    grid-template-columns: 1fr;
  }
}

.playground__preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.playground__preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.playground__label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.playground__controls {
  flex-shrink: 0;
  padding: 1rem;
  background-color: #f9fafb;
  border-left: 1px solid #e5e7eb;
  overflow-y: auto;
  max-height: 512px;
}

.playground__code {
}

.playground__extra {
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
</style>
