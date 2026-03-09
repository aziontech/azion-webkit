<script setup lang="ts">
/**
 * Version Switcher Component
 *
 * Displays version numbers as inline buttons.
 * Allows users to switch between documentation versions.
 */

import { computed } from 'vue';
import {
  getAllVersions,
  isCurrentVersion,
  getCurrentVersion,
} from '@/config';

interface Props {
  /** Current version */
  currentVersion?: string;
  /** Current section (for URL building) */
  section?: string;
  /** Current page slug (for URL building) */
  slug?: string;
  /** Current language */
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currentVersion: () => getCurrentVersion(),
  section: '',
  slug: 'index',
  language: 'en',
});

const emit = defineEmits<{
  (e: 'change', version: string): void;
}>();

// Computed
const versions = computed(() => getAllVersions());

/**
 * Build URL for a version
 * Tries to keep the same page, falls back to section index
 */
function buildVersionUrl(version: string): string {
  const isCurrent = isCurrentVersion(version);
  const isDefaultLang = props.language === 'en';
  
  // For current version with default language, use short URL
  if (isCurrent && isDefaultLang) {
    if (props.slug === 'index') {
      return `/${props.section}`;
    }
    return `/${props.section}/${props.slug}`;
  }
  
  // For other versions or languages, use full URL
  const langPart = isDefaultLang ? '' : `/${props.language}`;
  const slugPart = props.slug === 'index' ? '' : `/${props.slug}`;
  
  return `/${version}${langPart}/${props.section}${slugPart}`;
}

/**
 * Handle version selection
 */
function selectVersion(version: string) {
  if (version !== props.currentVersion) {
    emit('change', version);
    
    // Navigate to the new version
    const url = buildVersionUrl(version);
    window.location.href = url;
  }
}
</script>

<template>
  <div class="version-switcher">
    <button
      v-for="version in versions"
      :key="version"
      type="button"
      class="version-switcher__button !h-8 !w-8 text-text-primary bg-surface-subtle"
      :class="{ '': version === currentVersion }"
      @click="selectVersion(version)"
    >
      {{ version }}
    </button>
  </div>
</template>

<style scoped>
.version-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.version-switcher__button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: ui-monospace, monospace;
  cursor: pointer;
  transition: all 0.15s ease;
}

.version-switcher__button:hover {
  background: var(--color-surface-hover, #f9fafb);
  color: var(--color-text-primary, #1f2937);
}

.version-switcher__button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.5));
}
</style>
