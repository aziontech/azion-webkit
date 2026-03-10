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
    class="block rounded-md px-3 py-1.5 text-sm text-white font-medium transition-colors border-l-2 border-l-transparent hover:bg-[#343434] hover:border-l-[#343434]"
    :class="[
      isActive ? 'bg-[#343434]' : ''
    ]"
    :aria-current="isActive ? 'page' : undefined"
  >
    {{ item.navLabel }}
  </a>
</template>
