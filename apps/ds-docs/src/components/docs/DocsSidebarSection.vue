<script setup lang="ts">
/**
 * DocsSidebarSection
 * 
 * Renders a single navigation section with its items.
 * Supports collapsible groups and active state highlighting.
 */

import { computed } from 'vue';
import type { NavSection, NavItem } from '@/lib/content/types';
import DocsSidebarItem from './DocsSidebarItem.vue';

const props = defineProps<{
  /** Navigation section data */
  section: NavSection;
  /** Whether this section is currently active */
  isActive: boolean;
  /** Current URL path */
  currentPath: string;
}>();

// Filter out index pages from sidebar listing (they're accessible via section link)
const visibleItems = computed(() => {
  return props.section.items.filter((item) => !item.isIndex);
});
</script>

<template>
  <div class="sidebar-section">
    <!-- Section Link -->
    <a
      :href="section.section.basePath"
      class="section-link block px-3 py-2 text-sm rounded-md transition-colors"
      :class="[
        isActive
          ? 'bg-primary-50 text-primary-700 font-medium'
          : 'hover:bg-surface-subtle text-text-secondary hover:text-text-primary'
      ]"
    >
      {{ section.section.label }}
    </a>
    
    <!-- Section Items (only show when section is active) -->
    <div v-if="isActive && visibleItems.length > 0" class="mt-1 ml-3 space-y-0.5 border-l border-gray-200 pl-3">
      <DocsSidebarItem
        v-for="item in visibleItems"
        :key="item.href"
        :item="item"
        :is-active="currentPath === item.href"
      />
    </div>
  </div>
</template>

<style scoped>
.sidebar-section {
  margin-bottom: 0.25rem;
}
</style>
