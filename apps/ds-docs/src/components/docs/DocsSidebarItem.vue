<script setup lang="ts">
/**
 * DocsSidebarItem
 * 
 * Renders a single navigation item in the sidebar.
 */

import type { NavItem } from '@/lib/content/types';

defineProps<{
  /** Navigation item data */
  item: NavItem;
  /** Whether this item is currently active */
  isActive: boolean;
}>();
</script>

<template>
  <a
    :href="item.href"
    class="sidebar-item block px-3 py-1.5 text-sm rounded-md transition-colors"
    :class="[
      isActive
        ? 'bg-primary-50 text-primary-700 font-medium'
        : 'hover:bg-surface-subtle text-text-secondary hover:text-text-primary'
    ]"
    :aria-current="isActive ? 'page' : undefined"
  >
    {{ item.navLabel }}
  </a>
</template>

<style scoped>
.sidebar-item {
  border-left: 2px solid transparent;
}

.sidebar-item:hover {
  border-left-color: var(--color-gray-300, #d1d5db);
}

.sidebar-item[aria-current='page'] {
  border-left-color: var(--color-primary-500, #3b82f6);
}
</style>
