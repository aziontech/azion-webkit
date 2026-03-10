<script setup lang="ts">
/**
 * Docs Version Banner Component
 * 
 * Shows a banner when the user is viewing an older version of the documentation.
 * Provides a link to the latest version.
 */

import { computed } from 'vue';
import { isCurrentVersion, getCurrentVersion, getVersionLabel } from '@/config';

interface Props {
  /** Current version being viewed */
  version: string;
  /** Current section (for URL building) */
  section?: string;
  /** Current page slug (for URL building) */
  slug?: string;
  /** Current language */
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  section: '',
  slug: 'index',
  language: 'en',
});

// Computed
const isLatest = computed(() => isCurrentVersion(props.version));
const latestVersionLabel = computed(() => getVersionLabel(getCurrentVersion()));

/**
 * Build URL for the latest version
 */
function buildLatestVersionUrl(): string {
  const isDefaultLang = props.language === 'en';
  
  // For default language, use short URL
  if (isDefaultLang) {
    if (props.slug === 'index') {
      return `/${props.section}`;
    }
    return `/${props.section}/${props.slug}`;
  }
  
  // For other languages, include language prefix
  const slugPart = props.slug === 'index' ? '' : `/${props.slug}`;
  return `/${props.language}/${props.section}${slugPart}`;
}

/**
 * Dismiss the banner (could store in localStorage)
 */
function dismissBanner() {
  // Could implement localStorage persistence here
  // For now, just hide via parent component
  emit('dismiss');
}

const emit = defineEmits<{
  (e: 'dismiss'): void;
}>();
</script>

<template>
  <div
    v-if="!isLatest"
    class="flex items-center justify-between gap-4 py-3 px-4 bg-amber-100 border-b border-amber-500"
    role="alert"
  >
    <div class="flex items-start gap-2 flex-1">
      <svg
        class="text-amber-800 shrink-0 mt-0.5 w-4 h-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 4.5C8.41421 4.5 8.75 4.83579 8.75 5.25V8.25C8.75 8.66421 8.41421 9 8 9C7.58579 9 7.25 8.66421 7.25 8.25V5.25C7.25 4.83579 7.58579 4.5 8 4.5ZM8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z"
          fill="currentColor"
        />
      </svg>
      <p class="m-0 text-sm text-amber-800 leading-relaxed">
        You are viewing an older version of the documentation.
        <a :href="buildLatestVersionUrl()" class="text-amber-800 font-semibold underline underline-offset-2 hover:no-underline focus:outline-2 focus:outline-offset-2 focus:outline-amber-800 focus:rounded">
          View the latest version ({{ latestVersionLabel }})
        </a>
      </p>
    </div>
    <button
      type="button"
      class="flex items-center justify-center w-6 h-6 p-0 bg-transparent border-0 rounded text-amber-800 cursor-pointer transition-colors duration-150 shrink-0 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-800"
      aria-label="Dismiss banner"
      @click="dismissBanner"
    >
      <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4L12 12M12 4L4 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
