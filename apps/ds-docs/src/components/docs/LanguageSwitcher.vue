<script setup lang="ts">
/**
 * Language Switcher Component
 *
 * Allows users to switch between documentation languages.
 * Maintains the current page when possible, falls back to English if translation doesn't exist.
 */

import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import {
  getAllLanguages,
  getLanguageLabel,
  isDefaultLanguage,
  getDefaultLanguage,
} from '@/config';
import { useDropdownPosition } from '@/composables/useDropdownPosition';

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
const triggerRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

// Dropdown positioning
const { position, dropdownClasses, updatePosition } = useDropdownPosition(
  triggerRef,
  dropdownRef,
  {
    defaultPosition: 'bottom-end',
    estimatedHeight: 150,
  }
);

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
  if (isOpen.value) {
    // Update position when opening
    nextTick(() => {
      updatePosition();
    });
  }
}

/**
 * Close dropdown when clicking outside
 */
function handleClickOutside(event: MouseEvent) {
  if (triggerRef.value && !triggerRef.value.contains(event.target as Node)) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false;
    }
  }
}

/**
 * Handle escape key
 */
function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
    triggerRef.value?.focus();
  }
}

// Add event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <div class="language-switcher font-mono text-xs" ref="triggerRef">
    <button
      type="button"
      class="language-switcher__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-label="`Current language: ${currentLanguageLabel}. Change language.`"
      @click="toggleDropdown"
    >
      <i class="pi pi-globe"/>
      <span class="language-switcher__label">
        {{ currentLanguageLabel }}
      </span>
      <i class="pi pi-angle-down"/>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        ref="dropdownRef"
        class="language-switcher__dropdown"
        :class="dropdownClasses"
        role="listbox"
        :aria-label="'Select language'"
      >
        <button
          v-for="language in languages"
          :key="language"
          type="button"
          class="language-switcher__option text-xs"
          :class="{ 'language-switcher__option--active': language === currentLanguage }"
          role="option"
          :aria-selected="language === currentLanguage"
          @click="selectLanguage(language)"
        >
          <span class="language-switcher__option-label">
            {{ getLanguageLabel(language) }}
          </span>
          <i class="pi pi-check" v-if="language === currentLanguage"/>
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
  min-width: 10rem;
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.375rem;
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  z-index: 50;
  overflow: hidden;
}

/* Positioning classes */
.language-switcher__dropdown.dropdown--below {
  top: calc(100% + 0.25rem);
}

.language-switcher__dropdown.dropdown--above {
  bottom: calc(100% + 0.25rem);
}

.language-switcher__dropdown.dropdown--align-start {
  left: 0;
}

.language-switcher__dropdown.dropdown--align-end {
  right: 0;
}

.language-switcher__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
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
