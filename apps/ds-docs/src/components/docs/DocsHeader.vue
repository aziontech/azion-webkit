<script setup lang="ts">
/**
 * DocsHeader
 *
 * Documentation header component with breadcrumb context
 * and search trigger button.
 */

import { computed } from 'vue';
import type { Section, NavItem } from '@/lib/content/types';
import { useSearch } from '@/lib/search/use-search';
import LanguageSwitcher from './LanguageSwitcher.vue';
import DocsIcon from './DocsIcon.vue';
import { getDefaultLanguage } from '@/config';
import { t } from '@/lib/i18n';

const props = withDefaults(defineProps<{
  /** Current section */
  section?: Section | null;
  /** Current page item */
  item?: NavItem | null;
  /** Current language */
  language?: string;
}>(), {
  language: () => getDefaultLanguage(),
});

const { openSearch } = useSearch();

const isDefaultLang = computed(() => props.language === getDefaultLanguage());

// Build home link with language prefix
const homeLink = computed(() => {
  return isDefaultLang.value ? '/' : `/${props.language}`;
});

// Build section link with language prefix
const sectionLink = computed(() => {
  if (!props.section) return '/';
  if (isDefaultLang.value) {
    return props.section.basePath;
  }
  return `/${props.language}${props.section.basePath}`;
});

// Get translated section label
const sectionLabel = computed(() => {
  if (!props.section) return '';
  const sectionId = props.section.id;
  // Map section IDs to i18n keys
  const keyMap: Record<string, string> = {
    'get-started': 'nav.getStarted',
    'foundations': 'nav.foundations',
    'tokens': 'nav.tokens',
    'components': 'nav.components',
    'blocks': 'nav.blocks',
    'patterns': 'nav.patterns',
    'templates': 'nav.templates',
    'icons': 'nav.icons',
    'playground': 'nav.playground',
    'contributing': 'nav.contributing',
  };
  const key = keyMap[sectionId];
  return key ? t(key, props.language) : props.section.label;
});

// Translated "Documentation" text
const documentationText = computed(() => {
  return t('nav.documentation', props.language);
});
</script>

<template>
  <header class="docs-header h-16 sticky top-0 z-10 border-b border-gray-200 bg-surface/95 backdrop-blur">
    <div class="flex items-center justify-between h-full px-6">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2">
          <li>
            <a :href="homeLink" class="text-text-muted hover:text-text-primary transition-colors">
              {{ documentationText }}
            </a>
          </li>
          <li v-if="section" class="flex items-center gap-2">
            <span class="text-text-muted" aria-hidden="true">/</span>
            <a
              :href="sectionLink"
              class="text-text-primary font-medium hover:text-primary-600 transition-colors"
              :aria-current="item && !item.isIndex ? undefined : 'page'"
            >
              {{ sectionLabel }}
            </a>
          </li>
          <li v-if="item && !item.isIndex" class="flex items-center gap-2">
            <span class="text-text-muted" aria-hidden="true">/</span>
            <span class="text-text-primary" aria-current="page">
              {{ item.navLabel }}
            </span>
          </li>
        </ol>
      </nav>
      
      <!-- Header actions -->
      <div class="flex items-center gap-4">
        <!-- Search button -->
        <button 
          class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary bg-surface-subtle rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Search documentation"
          @click="openSearch"
        >
          <DocsIcon name="pi-search" size="sm" decorative />
          <span class="hidden sm:inline">Search</span>
          <kbd class="hidden sm:inline-flex px-1.5 py-0.5 text-xs bg-gray-200 rounded font-mono">⌘K</kbd>
        </button>
        
        <!-- Version switcher placeholder -->
        <div class="hidden md:flex items-center gap-1 px-2 py-1 text-xs text-text-muted bg-surface-subtle rounded">
          <span>v1.0</span>
          <DocsIcon name="pi-chevron-down" size="sm" decorative />
        </div>
        
        <!-- Language switcher -->
        <LanguageSwitcher :current-language="language" />
        
        <!-- GitHub link -->
        <a 
          href="https://github.com/aziontech/webkit" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-text-primary transition-colors"
          aria-label="View on GitHub"
        >
          <DocsIcon name="pi-github" size="lg" decorative />
        </a>
      </div>
    </div>
  </header>
</template>
