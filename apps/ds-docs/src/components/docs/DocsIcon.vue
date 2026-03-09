<script setup lang="ts">
/**
 * DocsIcon Component
 *
 * A reusable icon component for the documentation platform.
 * Wraps the @aziontech/icons icon font library with:
 * - Size variants
 * - Accessibility support (decorative vs semantic)
 * - Custom class passthrough
 * - Type-safe icon names
 *
 * Usage:
 * ```vue
 * <!-- Decorative icon (hidden from screen readers) -->
 * <DocsIcon name="ai-azion" />
 *
 * <!-- Semantic icon (announced by screen readers) -->
 * <DocsIcon name="pi-search" ariaLabel="Search" />
 *
 * <!-- With size variant -->
 * <DocsIcon name="ai-home" size="lg" />
 *
 * <!-- With custom class -->
 * <DocsIcon name="pi-cog" class="text-primary-600" />
 * ```
 */

import { computed } from 'vue';
import type { PropType } from 'vue';

// Props definition
const props = defineProps({
  /**
   * Icon name with prefix (e.g., "ai-azion", "pi-home")
   * Can also accept just the name without prefix for ai icons
   */
  name: {
    type: String,
    required: true,
  },

  /**
   * Size variant
   * - sm: 14px
   * - md: 16px (default)
   * - lg: 20px
   * - xl: 24px
   * - 2xl: 32px
   */
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value),
  },

  /**
   * Accessible label for screen readers
   * When provided, the icon is considered semantic (not decorative)
   * and will be announced by screen readers
   */
  ariaLabel: {
    type: String,
    default: undefined,
  },

  /**
   * Explicitly mark icon as decorative
   * When true, the icon is hidden from screen readers
   * Default behavior: decorative if no ariaLabel provided
   */
  decorative: {
    type: Boolean,
    default: false,
  },

  /**
   * Additional CSS classes
   */
  class: {
    type: [String, Array, Object],
    default: undefined,
  },
});

// Size mapping to Tailwind classes
const sizeClasses: Record<string, string> = {
  sm: 'text-sm',    // 14px
  md: 'text-base',  // 16px
  lg: 'text-lg',    // 18px
  xl: 'text-xl',    // 20px
  '2xl': 'text-2xl', // 24px
};

// Computed values
const isDecorative = computed(() => {
  // If explicitly marked as decorative, it's decorative
  if (props.decorative) return true;
  // If ariaLabel is provided, it's semantic (not decorative)
  if (props.ariaLabel) return false;
  // Default to decorative
  return true;
});

const iconClasses = computed(() => {
  // Parse the icon name to get prefix and full class
  const name = props.name;
  let prefix: string;
  let iconClass: string;

  if (name.startsWith('ai-')) {
    prefix = 'ai';
    iconClass = `ai ${name}`;
  } else if (name.startsWith('pi-')) {
    prefix = 'pi';
    iconClass = `pi ${name}`;
  } else {
    // Default to ai prefix for backwards compatibility
    prefix = 'ai';
    iconClass = `ai ai-${name}`;
  }

  const classes = [
    prefix,
    iconClass.split(' ')[1], // The specific icon class (e.g., "ai-azion")
    sizeClasses[props.size],
    props.class,
  ].filter(Boolean);

  return classes;
});

const ariaAttributes = computed(() => {
  if (isDecorative.value) {
    return {
      'aria-hidden': true as const,
      role: 'img' as const,
    };
  }

  return {
    'aria-label': props.ariaLabel,
    role: 'img' as const,
  };
});
</script>

<template>
  <i :class="iconClasses" v-bind="ariaAttributes" />
</template>

<style scoped>
/* Icon base styles are provided by @aziontech/icons */
/* Additional styling can be added via class prop */
</style>
