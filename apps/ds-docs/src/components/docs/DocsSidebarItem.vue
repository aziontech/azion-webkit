<script setup lang="ts">
/**
 * DocsSidebarItem
 *
 * Renders a single navigation item in the sidebar.
 */

import { computed } from 'vue';
import type { NavItem } from '@/lib/content/types';
import { getDefaultLanguage } from '@/config';

const props = defineProps<{
  /** Navigation item data */
  item: NavItem;
  /** Whether this item is currently active */
  isActive: boolean;
  /** Current language */
  language?: string;
}>();

const currentLanguage = computed(() => props.language || getDefaultLanguage());
const isDefaultLang = computed(() => currentLanguage.value === getDefaultLanguage());

// Build item link with language prefix
const itemLink = computed(() => {
  if (isDefaultLang.value) {
    return props.item.href;
  }
  return `/${currentLanguage.value}${props.item.href}`;
});
</script>

<template>
  <a
    :href="itemLink"
    class="sidebar-item block px-3 py-1.5 text-sm transition-colors"
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
  border-left-color: var(--color-primary-500);
}
</style>
