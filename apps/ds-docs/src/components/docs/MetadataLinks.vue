<script setup lang="ts">
/**
 * MetadataLinks Component
 * 
 * Displays links to external resources like source code, Storybook, and Figma.
 * Used in component documentation headers.
 */

interface Props {
  source?: string;
  storybook?: string;
  figma?: string;
}

const props = defineProps<Props>();

interface LinkItem {
  href: string;
  label: string;
  icon: string;
}

const links: LinkItem[] = [];

if (props.source) {
  links.push({ href: props.source, label: 'Source', icon: '📁' });
}
if (props.storybook) {
  links.push({ href: props.storybook, label: 'Storybook', icon: '📖' });
}
if (props.figma) {
  links.push({ href: props.figma, label: 'Figma', icon: '🎨' });
}
</script>

<template>
  <div v-if="links.length > 0" class="metadata-links flex flex-wrap gap-3">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-text-secondary hover:text-primary-600 bg-surface-subtle hover:bg-gray-100 rounded-md transition-colors"
    >
      <span>{{ link.icon }}</span>
      <span>{{ link.label }}</span>
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
</template>
