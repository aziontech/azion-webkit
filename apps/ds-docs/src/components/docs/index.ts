/**
 * Documentation Components
 * 
 * Barrel export for all documentation-specific components.
 */

// Page structure
export { default as PageHeader } from './PageHeader.vue';
export { default as StatusBadge } from './StatusBadge.vue';
export { default as MetadataLinks } from './MetadataLinks.vue';

// Navigation
export { default as DocsSidebar } from './DocsSidebar.vue';
export { default as DocsSidebarSection } from './DocsSidebarSection.vue';
export { default as DocsSidebarItem } from './DocsSidebarItem.vue';
export { default as DocsHeader } from './DocsHeader.vue';

// Content display
export { default as DemoPreview } from './DemoPreview.vue';
// Note: CodeBlock.astro is imported directly in Astro files

/**
 * Components map for markdown rendering
 * 
 * Use this with Astro's Content component:
 * <Content components={markdownComponents} />
 */
import DemoPreview from './DemoPreview.vue';

export const markdownComponents = {
  DemoPreview,
  // Add more components as needed
};
