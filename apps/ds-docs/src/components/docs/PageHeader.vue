<script setup lang="ts">
import StatusBadge from './StatusBadge.vue';
import MetadataLinks from './MetadataLinks.vue';

/**
 * PageHeader Component
 * 
 * Displays the page title, description, status badge, and metadata links
 * for documentation pages. This is the primary header for all content pages.
 */

interface Props {
  title: string;
  description: string;
  status?: 'stable' | 'beta' | 'deprecated' | 'planned' | 'experimental';
  since?: string;
  source?: string;
  storybook?: string;
  figma?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <header class="page-header mb-8">
    <div class="flex items-start gap-4 mb-4">
      <h1 class="text-3xl font-bold tracking-tight text-text-primary">
        {{ title }}
      </h1>
    </div>
    
    <p class="text-base text-text-secondary mb-4 max-w-docs-content">
      {{ description }}
    </p>
    
    <div class="flex items-center justify-between">
      <div v-if="status" class="flex items-center gap-2 shrink-0">
        <StatusBadge :status="status" />
        <span v-if="since" class="text-sm text-text-muted">
          since v{{ since }}
        </span>
      </div>
      <MetadataLinks
        v-if="source || storybook || figma"
        :source="source"
        :storybook="storybook"
        :figma="figma"
      />
    </div>
  </header>
</template>

<style scoped>
.page-header {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
</style>
