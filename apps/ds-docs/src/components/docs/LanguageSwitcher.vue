<script setup lang="ts">
/**
 * Language Switcher Component
 *
 * Allows users to switch between documentation languages.
 * Maintains the current page when possible, falls back to English if translation doesn't exist.
 */

import { computed, ref, onMounted, onUnmounted } from 'vue';
import {
  getAllLanguages,
  getLanguageLabel,
  isDefaultLanguage,
  getDefaultLanguage,
} from '@/config';

interface Props {
  /** Current language */
  currentLanguage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  currentLanguage: () => getDefaultLanguage(),
});

const emit = defineEmits<{
  (e: 'change', language: string): void;
}>();

// State
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

// Computed
const languages = computed(() => getAllLanguages());

const currentLanguageLabel = computed(() => {
  return getLanguageLabel(props.currentLanguage);
});

/**
 * Build URL for a language by manipulating the current URL
 */
function buildLanguageUrl(language: string): string {
  const currentPath = window.location.pathname;
  const isDefault = isDefaultLanguage(language);
  
  // Check if current path starts with a language prefix
  const langPrefixMatch = currentPath.match(/^\/(pt|en)(\/.*)?$/);
  
  let pathWithoutLang: string;
  if (langPrefixMatch) {
    // Remove the language prefix from the current path
    pathWithoutLang = langPrefixMatch[2] || '/';
  } else {
    // Current path has no language prefix (it's in English)
    pathWithoutLang = currentPath;
  }
  
  // Build the new URL
  if (isDefault) {
    // Default language (English) - no prefix
    return pathWithoutLang || '/';
  } else {
    // Other languages - add language prefix
    return `/${language}${pathWithoutLang}`;
  }
}

/**
 * Handle language selection
 */
function selectLanguage(language: string) {
  if (language !== props.currentLanguage) {
    emit('change', language);
    
    // Navigate to the new language version
    const url = buildLanguageUrl(language);
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
 * Close dropdown when clicking outside
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
  <div class="language-switcher" ref="dropdownRef">
    <button
      type="button"
      class="language-switcher__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-label="`Current language: ${currentLanguageLabel}. Change language.`"
      @click="toggleDropdown"
    >
      <svg
        class="language-switcher__globe"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="6.5"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M2 8H14"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M8 1.5C8 1.5 5.5 4 5.5 8C5.5 12 8 14.5 8 14.5"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M8 1.5C8 1.5 10.5 4 10.5 8C10.5 12 8 14.5 8 14.5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      <span class="language-switcher__label">
        {{ currentLanguageLabel }}
      </span>
      <svg
        class="language-switcher__icon"
        :class="{ 'language-switcher__icon--open': isOpen }"
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
        class="language-switcher__dropdown"
        role="listbox"
        :aria-label="'Select language'"
      >
        <button
          v-for="language in languages"
          :key="language"
          type="button"
          class="language-switcher__option"
          :class="{ 'language-switcher__option--active': language === currentLanguage }"
          role="option"
          :aria-selected="language === currentLanguage"
          @click="selectLanguage(language)"
        >
          <span class="language-switcher__option-label">
            {{ getLanguageLabel(language) }}
          </span>
          <span v-if="isDefaultLanguage(language)" class="language-switcher__option-badge">
            Default
          </span>
          <svg
            v-if="language === currentLanguage"
            class="language-switcher__check"
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
.language-switcher {
  position: relative;
  display: inline-flex;
}

.language-switcher__trigger {
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

.language-switcher__trigger:hover {
  background: var(--color-surface-hover, #f9fafb);
  border-color: var(--color-border-hover, #d1d5db);
}

.language-switcher__trigger:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.5));
}

.language-switcher__globe {
  color: var(--color-text-secondary, #6b7280);
  flex-shrink: 0;
}

.language-switcher__label {
  font-weight: 500;
}

.language-switcher__icon {
  color: var(--color-text-secondary, #6b7280);
  transition: transform 0.15s ease;
}

.language-switcher__icon--open {
  transform: rotate(180deg);
}

.language-switcher__dropdown {
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  min-width: 10rem;
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.375rem;
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  z-index: 50;
  overflow: hidden;
}

.language-switcher__option {
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

.language-switcher__option:hover {
  background: var(--color-surface-hover, #f9fafb);
}

.language-switcher__option:focus {
  outline: none;
  background: var(--color-surface-hover, #f9fafb);
}

.language-switcher__option--active {
  font-weight: 500;
}

.language-switcher__option-label {
  flex: 1;
}

.language-switcher__option-badge {
  padding: 0.125rem 0.375rem;
  background: var(--color-neutral-light, #f3f4f6);
  color: var(--color-text-secondary, #6b7280);
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.language-switcher__check {
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
