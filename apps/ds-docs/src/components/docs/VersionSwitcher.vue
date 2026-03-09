<script setup lang="ts">
/**
 * Version Switcher Component
 *
 * Allows users to switch between documentation versions.
 * Maintains the current page when possible, falls back to section index if page doesn't exist.
 */

import { computed, ref, onMounted, onUnmounted } from 'vue';
import {
  getAllVersions,
  getVersionLabel,
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

// State
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

// Computed
const versions = computed(() => getAllVersions());

const currentVersionLabel = computed(() => {
  return getVersionLabel(props.currentVersion);
});

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
  
  isOpen.value = false;
}

/**
 * Toggle dropdown
 */
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

/**
 * Handle click outside
 */
function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="version-switcher" ref="dropdownRef">
    <button
      type="button"
      class="version-switcher__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggleDropdown"
    >
      <span class="version-switcher__label">
        {{ currentVersionLabel }}
      </span>
      <span v-if="isCurrentVersion(currentVersion)" class="version-switcher__badge">
        Latest
      </span>
      <svg
        class="version-switcher__icon"
        :class="{ 'version-switcher__icon--open': isOpen }"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="version-switcher__dropdown"
        role="listbox"
        :aria-label="'Select documentation version'"
      >
        <button
          v-for="version in versions"
          :key="version"
          type="button"
          class="version-switcher__option"
          :class="{ 'version-switcher__option--active': version === currentVersion }"
          role="option"
          :aria-selected="version === currentVersion"
          @click="selectVersion(version)"
        >
          <span class="version-switcher__option-label">
            {{ getVersionLabel(version) }}
          </span>
          <span v-if="isCurrentVersion(version)" class="version-switcher__option-badge">
            Latest
          </span>
          <svg
            v-if="version === currentVersion"
            class="version-switcher__check"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L6 12L2.5 8.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.version-switcher {
  position: relative;
  display: inline-flex;
}

.version-switcher__trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text, #1f2937);
  cursor: pointer;
  transition: all 0.15s ease;
}

.version-switcher__trigger:hover {
  background: var(--color-surface-hover, #f9fafb);
  border-color: var(--color-border-hover, #d1d5db);
}

.version-switcher__trigger:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.5));
}

.version-switcher__label {
  font-family: var(--font-code, ui-monospace, monospace);
}

.version-switcher__badge {
  padding: 0.125rem 0.375rem;
  background: var(--color-primary-light, #dbeafe);
  color: var(--color-primary, #2563eb);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.version-switcher__icon {
  color: var(--color-text-secondary, #6b7280);
  transition: transform 0.15s ease;
}

.version-switcher__icon--open {
  transform: rotate(180deg);
}

.version-switcher__dropdown {
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  min-width: 100%;
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.375rem;
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  z-index: 50;
  overflow: hidden;
}

.version-switcher__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  color: var(--color-text, #1f2937);
  cursor: pointer;
  transition: background 0.15s ease;
  text-align: left;
}

.version-switcher__option:hover {
  background: var(--color-surface-hover, #f9fafb);
}

.version-switcher__option:focus {
  outline: none;
  background: var(--color-surface-hover, #f9fafb);
}

.version-switcher__option--active {
  font-weight: 500;
}

.version-switcher__option-label {
  flex: 1;
  font-family: var(--font-code, ui-monospace, monospace);
}

.version-switcher__option-badge {
  padding: 0.125rem 0.375rem;
  background: var(--color-primary-light, #dbeafe);
  color: var(--color-primary, #2563eb);
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.version-switcher__check {
  color: var(--color-primary, #2563eb);
  flex-shrink: 0;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.25rem);
}
</style>
