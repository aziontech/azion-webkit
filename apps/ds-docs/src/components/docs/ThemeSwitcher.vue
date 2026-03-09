<script setup lang="ts">
/**
 * Theme Switcher Component
 *
 * Allows users to switch between documentation themes.
 * Persists preference using localStorage.
 * Supports Light, Dark, and System (auto) modes.
 */

import { ref, onMounted, computed, nextTick } from 'vue';
import { useDropdownPosition } from '@/composables/useDropdownPosition';

type Theme = 'light' | 'dark' | 'system';

interface Props {
  /** Current theme (defaults to system) */
  currentTheme?: Theme;
}

const props = withDefaults(defineProps<Props>(), {
  currentTheme: 'system',
});

const emit = defineEmits<{
  (e: 'change', theme: Theme): void;
}>();

// State
const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const selectedTheme = ref<Theme>(props.currentTheme);

// Dropdown positioning
const { position, dropdownClasses, updatePosition } = useDropdownPosition(
  triggerRef,
  dropdownRef,
  {
    defaultPosition: 'bottom-start',
    estimatedHeight: 150,
  }
);

// Theme options
const themes: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
  { value: 'system', label: 'System', icon: 'desktop' },
];

// Computed
const currentThemeLabel = computed(() => {
  const theme = themes.find((t) => t.value === selectedTheme.value);
  return theme?.label ?? 'System';
});

/**
 * Apply theme to document
 */
function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === 'system') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}

/**
 * Handle theme selection
 */
function selectTheme(theme: Theme) {
  if (theme !== selectedTheme.value) {
    selectedTheme.value = theme;
    emit('change', theme);

    // Persist to localStorage
    localStorage.setItem('docs-theme', theme);

    // Apply the theme
    applyTheme(theme);
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

/**
 * Listen for system theme changes
 */
function handleSystemThemeChange(event: MediaQueryListEvent) {
  if (selectedTheme.value === 'system') {
    document.documentElement.classList.toggle('dark', event.matches);
  }
}

// Initialize on mount
onMounted(() => {
  // Load saved preference
  const savedTheme = localStorage.getItem('docs-theme') as Theme | null;
  if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
    selectedTheme.value = savedTheme;
  }

  // Apply initial theme
  applyTheme(selectedTheme.value);

  // Add click outside listener
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', handleSystemThemeChange);
});
</script>

<template>
  <div class="theme-switcher font-mono" ref="triggerRef">
    <button
      type="button"
      class="theme-switcher__trigger text-xs min-w-[114px] flex justify-between"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-label="`Current theme: ${currentThemeLabel}. Change theme.`"
      @click="toggleDropdown"
    >
      <div class="flex gap-1.5 items-center">
      <!-- Sun icon for light theme -->
       <i class="pi pi-sun" v-if="selectedTheme === 'light'" />

      <!-- Moon icon for dark theme -->
       <i class="pi pi-moon" v-if="selectedTheme === 'dark'" />

      <!-- Desktop icon for system theme -->
       <i class="pi pi-desktop" v-if="selectedTheme === 'system'" />

      <span class="theme-switcher__label">
        {{ currentThemeLabel }}
      </span>
      </div>
      <i
        class="pi pi-angle-down theme-switcher__chevron"
        :class="{ 'theme-switcher__chevron--open': isOpen }"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        ref="dropdownRef"
        class="theme-switcher__dropdown text-xs"
        :class="dropdownClasses"
        role="listbox"
        aria-label="Select theme"
      >
        <button
          v-for="theme in themes"
          :key="theme.value"
          type="button"
          class="theme-switcher__option"
          :class="{ 'theme-switcher__option--active': theme.value === selectedTheme }"
          role="option"
          :aria-selected="theme.value === selectedTheme"
          @click="selectTheme(theme.value)"
        >
          <!-- Sun icon for light theme -->
          <i class="pi pi-sun" v-if="theme.icon === 'sun'" />

          <!-- Moon icon for dark theme -->
          <i class="pi pi-moon" v-else-if="theme.icon === 'moon'" />

          <!-- Desktop icon for system theme -->
          <i class="pi pi-desktop" v-else-if="theme.icon === 'desktop'" />

          <span class="theme-switcher__option-label">
            {{ theme.label }}
          </span>

          <i class="pi pi-check" v-if="theme.value === selectedTheme" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: relative;
  display: inline-flex;
}

.theme-switcher__trigger {
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

.theme-switcher__trigger:hover {
  background: var(--color-surface-hover, #f9fafb);
  border-color: var(--color-border-hover, #d1d5db);
}

.theme-switcher__trigger:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus-ring, rgba(59, 130, 246, 0.5));
}

.theme-switcher__icon {
  color: var(--color-text-secondary, #6b7280);
  flex-shrink: 0;
}

.theme-switcher__label {
  font-weight: 500;
}

.theme-switcher__chevron {
  color: var(--color-text-secondary, #6b7280);
  transition: transform 0.15s ease;
}

.theme-switcher__chevron--open {
  transform: rotate(180deg);
}

.theme-switcher__dropdown {
  position: absolute;
  min-width: 8rem;
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.375rem;
  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
  z-index: 50;
  overflow: hidden;
}

/* Positioning classes */
.theme-switcher__dropdown.dropdown--below {
  top: calc(100% + 0.25rem);
}

.theme-switcher__dropdown.dropdown--above {
  bottom: calc(100% + 0.25rem);
}

.theme-switcher__dropdown.dropdown--align-start {
  left: 0;
}

.theme-switcher__dropdown.dropdown--align-end {
  right: 0;
}

.theme-switcher__option {
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

.theme-switcher__option:hover {
  background: var(--color-surface-hover, #f9fafb);
}

.theme-switcher__option:focus {
  outline: none;
  background: var(--color-surface-hover, #f9fafb);
}

.theme-switcher__option--active {
  font-weight: 500;
}

.theme-switcher__option-icon {
  color: var(--color-text-secondary, #6b7280);
  flex-shrink: 0;
}

.theme-switcher__option-label {
  flex: 1;
}

.theme-switcher__check {
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
