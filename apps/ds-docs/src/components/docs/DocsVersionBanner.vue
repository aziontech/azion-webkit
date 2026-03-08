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
    class="version-banner"
    role="alert"
  >
    <div class="version-banner__content">
      <svg
        class="version-banner__icon"
        width="16"
        height="16"
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
      <p class="version-banner__message">
        You are viewing an older version of the documentation.
        <a :href="buildLatestVersionUrl()" class="version-banner__link">
          View the latest version ({{ latestVersionLabel }})
        </a>
      </p>
    </div>
    <button
      type="button"
      class="version-banner__dismiss"
      aria-label="Dismiss banner"
      @click="dismissBanner"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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

<style scoped>
.version-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--color-warning-light, #fef3c7);
  border-bottom: 1px solid var(--color-warning, #f59e0b);
}

.version-banner__content {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1;
}

.version-banner__icon {
  color: var(--color-warning-dark, #b45309);
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.version-banner__message {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-warning-dark, #b45309);
  line-height: 1.5;
}

.version-banner__link {
  color: var(--color-warning-dark, #b45309);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.125rem;
}

.version-banner__link:hover {
  text-decoration: none;
}

.version-banner__link:focus {
  outline: 2px solid var(--color-warning-dark, #b45309);
  outline-offset: 0.125rem;
  border-radius: 0.125rem;
}

.version-banner__dismiss {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  color: var(--color-warning-dark, #b45309);
  cursor: pointer;
  transition: background 0.15s ease;
  flex-shrink: 0;
}

.version-banner__dismiss:hover {
  background: var(--color-warning, #f59e0b);
  color: white;
}

.version-banner__dismiss:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-warning-dark, #b45309);
}
</style>
