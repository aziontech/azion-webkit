<script setup lang="ts">
import { computed } from 'vue';
import AzButton from '../demo/AzButton.vue';

/**
 * ComponentPreview
 * 
 * Renders a component preview based on a code string.
 * Parses simple Vue-like syntax to extract props and content.
 */

interface Props {
  /** Code string like '<AzButton variant="primary">Click me</AzButton>' */
  code: string;
  /** Component name to render */
  componentName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  componentName: 'AzButton',
});

/**
 * Parse a Vue-like template string to extract props and slot content
 * Supports simple patterns like:
 * <AzButton variant="primary">Click me</AzButton>
 * <AzButton size="sm" disabled>Small</AzButton>
 */
function parseCodeString(code: string): { props: Record<string, unknown>; slotContent: string } {
  const result: { props: Record<string, unknown>; slotContent: string } = {
    props: {},
    slotContent: '',
  };

  if (!code) return result;

  // Extract tag content (slot content)
  const contentMatch = code.match(/>([^<]*)<\/AzButton>/);
  if (contentMatch) {
    result.slotContent = contentMatch[1].trim();
  }

  // Extract props from the opening tag
  const tagMatch = code.match(/<AzButton([^>]*)>/);
  if (tagMatch) {
    const propsString = tagMatch[1];
    
    // Match boolean attributes (e.g., "disabled", "loading")
    const booleanProps = propsString.match(/\b(disabled|loading|fullWidth)\b/g);
    if (booleanProps) {
      booleanProps.forEach(prop => {
        result.props[prop] = true;
      });
    }

    // Match key="value" props
    const valueProps = propsString.match(/(\w+)=(["'])([^"']*)\2/g);
    if (valueProps) {
      valueProps.forEach(propMatch => {
        const [, key, , value] = propMatch.match(/(\w+)=(["'])([^"']*)\2/) || [];
        if (key && value !== undefined) {
          result.props[key] = value;
        }
      });
    }
  }

  return result;
}

const parsed = computed(() => parseCodeString(props.code));

// Map component names to their actual components
const componentMap: Record<string, unknown> = {
  AzButton,
  // Add more components as needed
};

const componentToRender = computed(() => {
  return componentMap[props.componentName] || AzButton;
});
</script>

<template>
  <div class="component-preview">
    <component
      :is="componentToRender"
      v-bind="parsed.props"
    >
      {{ parsed.slotContent }}
    </component>
  </div>
</template>

<style scoped>
.component-preview {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
