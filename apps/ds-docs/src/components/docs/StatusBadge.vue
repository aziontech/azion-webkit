<script setup lang="ts">
/**
 * StatusBadge Component
 * 
 * Displays component status with appropriate styling.
 * Used to indicate the stability and maturity of components.
 */

type Status = 'stable' | 'beta' | 'deprecated' | 'planned' | 'experimental';

interface Props {
  status: Status;
}

const props = defineProps<Props>();

const statusConfig: Record<Status, { label: string; class: string; icon: string }> = {
  stable: {
    label: 'Stable',
    class: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: '✓',
  },
  beta: {
    label: 'Beta',
    class: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: 'β',
  },
  deprecated: {
    label: 'Deprecated',
    class: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: '⚠',
  },
  planned: {
    label: 'Planned',
    class: 'bg-gray-50 text-gray-600 border-gray-200',
    icon: '○',
  },
  experimental: {
    label: 'Experimental',
    class: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: '⚗',
  },
};

const config = statusConfig[props.status];
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-md border',
      config.class,
    ]"
  >
    <span class="text-sm">{{ config.icon }}</span>
    <span class="font-mono">{{ config.label }}</span>
  </span>
</template>
