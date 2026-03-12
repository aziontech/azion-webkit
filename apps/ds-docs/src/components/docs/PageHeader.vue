<script setup lang="ts">
import StatusBadge from './StatusBadge.vue';
import MetadataLinks from './MetadataLinks.vue';
import { motion } from 'motion-v';

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
  <motion.header
    class="mb-8"
    :initial="{ opacity: 0, y: 10 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.4, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }"
  >
    <div class="flex items-start gap-4 mb-4">
      <h1 class="text-3xl font-medium tracking-tight text-base">
        {{ title }}
      </h1>
    </div>
    
    <p class="text-sm text-muted mb-4 mt-4 max-w-docs-content">
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
  </motion.header>
</template>
