<script setup lang="ts">
/**
 * DocsSidebar
 *
 * Main sidebar navigation component.
 * Renders all primary sections with their navigation items.
 */

import { computed } from 'vue';
import type { NavigationTree, NavItem, NavSection } from '@/lib/content/types';
import DocsSidebarSection from './DocsSidebarSection.vue';
import { getDefaultLanguage } from '@/config';
import { t } from '@/lib/i18n';

const props = defineProps<{
  /** Full navigation tree */
  navigation: NavigationTree;
  /** Current URL path */
  currentPath: string;
  /** Current language */
  language?: string;
}>();

const currentLanguage = computed(() => props.language || getDefaultLanguage());
const isDefaultLang = computed(() => currentLanguage.value === getDefaultLanguage());

// Compute active section - strip language prefix for matching
const pathForMatching = computed(() => {
  const langPrefixMatch = props.currentPath.match(/^\/(pt|en)(\/.*)?$/);
  if (langPrefixMatch) {
    return langPrefixMatch[2] || '/';
  }
  return props.currentPath;
});

// Compute active section
const activeSectionId = computed(() => {
  for (const section of props.navigation) {
    if (pathForMatching.value.startsWith(section.section.basePath)) {
      return section.section.id;
    }
  }
  return null;
});

// Compute home link with language prefix
const homeLink = computed(() => {
  return isDefaultLang.value ? '/' : `/${currentLanguage.value}`;
});

// Translated brand name
const brandName = computed(() => {
  return t('brand.name', currentLanguage.value);
});
</script>

<template>
  <aside class="docs-sidebar w-64 h-screen sticky top-0 border-r border-gray-200 bg-surface overflow-y-auto">
    <div class="p-4">
      <!-- Logo/Brand -->
      <div class="mb-6">
        <a :href="homeLink" class="flex items-center gap-2 text-lg font-semibold text-text-primary">
          <span class="text-primary-600">Azion</span>
          <span class="text-text-secondary">{{ brandName }}</span>
        </a>
      </div>
      
      <!-- Navigation -->
      <nav class="space-y-1">
        <DocsSidebarSection
          v-for="navSection in navigation"
          :key="navSection.section.id"
          :section="navSection"
          :is-active="activeSectionId === navSection.section.id"
          :current-path="currentPath"
          :language="currentLanguage"
        />
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.docs-sidebar {
  flex-shrink: 0;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.docs-sidebar:hover {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}
</style>
