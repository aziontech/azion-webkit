<script setup lang="ts">
/**
 * DocsHeader
 * 
 * Documentation header component with breadcrumb context,
 * search placeholder, and version/language switcher placeholders.
 */

import type { Section, NavItem } from '@/lib/content/types';

defineProps<{
  /** Current section */
  section?: Section | null;
  /** Current page item */
  item?: NavItem | null;
}>();
</script>

<template>
  <header class="docs-header h-16 sticky top-0 z-10 border-b border-gray-200 bg-surface/95 backdrop-blur">
    <div class="flex items-center justify-between h-full px-6">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm">
        <span class="text-text-muted">Documentation</span>
        <span v-if="section" class="text-text-muted">/</span>
        <span v-if="section" class="text-text-primary font-medium">
          {{ section.label }}
        </span>
        <span v-if="item && !item.isIndex" class="text-text-muted">/</span>
        <span v-if="item && !item.isIndex" class="text-text-primary">
          {{ item.navLabel }}
        </span>
      </div>
      
      <!-- Header actions -->
      <div class="flex items-center gap-4">
        <!-- Search placeholder -->
        <button 
          class="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary bg-surface-subtle rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Search documentation"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="hidden sm:inline">Search</span>
          <kbd class="hidden sm:inline-flex px-1.5 py-0.5 text-xs bg-gray-200 rounded font-mono">⌘K</kbd>
        </button>
        
        <!-- Version switcher placeholder -->
        <div class="hidden md:flex items-center gap-1 px-2 py-1 text-xs text-text-muted bg-surface-subtle rounded">
          <span>v1.0</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <!-- Language switcher placeholder -->
        <div class="hidden md:flex items-center gap-1 px-2 py-1 text-xs text-text-muted bg-surface-subtle rounded">
          <span>EN</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <!-- GitHub link -->
        <a 
          href="https://github.com/aziontech/webkit" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-text-primary transition-colors"
          aria-label="View on GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
