<script setup lang="ts">
import { ref, computed } from 'vue';

/**
 * AzFieldset - Demo Component
 *
 * This is a demonstration component for the playground.
 * In production, this would be imported from @aziontech/components.
 */

type FieldsetVariant = 'default' | 'bordered' | 'elevated';

interface Props {
  title?: string;
  variant?: FieldsetVariant;
  disabled?: boolean;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Fieldset',
  variant: 'default',
  disabled: false,
  collapsible: false,
  defaultExpanded: true,
});

const isExpanded = ref(props.defaultExpanded);

const fieldsetClasses = computed(() => {
  const classes: string[] = [];

  // Base styles
  classes.push('rounded-lg', 'transition-all');

  // Variant styles
  switch (props.variant) {
    case 'default':
      classes.push('bg-gray-50', 'border', 'border-gray-200');
      break;
    case 'bordered':
      classes.push('bg-white', 'border-2', 'border-gray-300');
      break;
    case 'elevated':
      classes.push('bg-white', 'shadow-md', 'border', 'border-gray-100');
      break;
  }

  // Disabled
  if (props.disabled) {
    classes.push('opacity-50', 'cursor-not-allowed');
  }

  return classes.join(' ');
});

function toggleExpanded() {
  if (props.collapsible && !props.disabled) {
    isExpanded.value = !isExpanded.value;
    }
  }
  </script>

<template>
  <fieldset
    :class="fieldsetClasses"
    :disabled="disabled"
  >
    <!-- Header -->
    <legend
      :class="[
        'px-3 py-1.5 text-sm font-medium text-gray-700',
        { 'cursor-pointer hover:text-gray-900': collapsible && !disabled }
      ]"
      @click="toggleExpanded"
    >
      <span class="flex items-center gap-2">
        <svg
          v-if="collapsible"
          :class="['w-4 h-4 transition-transform', { 'rotate-90': isExpanded }]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        {{ title }}
      </span>
    </legend>

    <!-- Content -->
    <div
      v-show="isExpanded || !collapsible"
      class="p-4"
    >
      <slot>
        <p class="text-sm text-gray-500">Fieldset content goes here</p>
      </slot>
    </div>
  </fieldset>
</template>
