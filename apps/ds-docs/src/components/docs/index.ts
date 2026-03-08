/**
 * Documentation Components
 * 
 * Barrel export for all documentation-specific components.
 * These components are used within markdown content and layouts.
 */

// Page structure
export { default as PageHeader } from './PageHeader.vue';
export { default as StatusBadge } from './StatusBadge.vue';
export { default as MetadataLinks } from './MetadataLinks.vue';
export { default as SectionBlock } from './SectionBlock.astro';
export { default as RelatedLinks } from './RelatedLinks.astro';

// Navigation
export { default as DocsSidebar } from './DocsSidebar.vue';
export { default as DocsSidebarSection } from './DocsSidebarSection.vue';
export { default as DocsSidebarItem } from './DocsSidebarItem.vue';
export { default as DocsHeader } from './DocsHeader.vue';

// Version & Language
export { default as VersionSwitcher } from './VersionSwitcher.vue';
export { default as LanguageSwitcher } from './LanguageSwitcher.vue';
export { default as DocsVersionBanner } from './DocsVersionBanner.vue';

// Demo & Code
export { default as DemoPreview } from './DemoPreview.vue';
export { default as CodeBlock } from './CodeBlock.astro';
export { default as ExampleBlock } from './ExampleBlock.astro';

// API Documentation
export { default as PropsTable } from './PropsTable.astro';
export { default as SlotsTable } from './SlotsTable.astro';
export { default as EventsTable } from './EventsTable.astro';
export { default as ApiSection } from './ApiSection.astro';

// Accessibility
export { default as AccessibilityChecklist } from './AccessibilityChecklist.astro';

// Visual Documentation
export { default as AnatomyBlock } from './AnatomyBlock.astro';
export { default as StateGrid } from './StateGrid.astro';
export { default as DoDont } from './DoDont.astro';

// Callouts
export { default as Callout } from './Callout.astro';

// Component Status
export { default as ProgressStatusBadge } from './ProgressStatusBadge.vue';
export { default as ComponentsStatusTable } from './ComponentsStatusTable.astro';

// Navigation
export { default as Tabs } from './Tabs.astro';

/**
 * Components map for markdown rendering
 * 
 * Use this with Astro's Content component:
 * <Content components={markdownComponents} />
 */
import DemoPreview from './DemoPreview.vue';
import SectionBlock from './SectionBlock.astro';
import ExampleBlock from './ExampleBlock.astro';
import PropsTable from './PropsTable.astro';
import SlotsTable from './SlotsTable.astro';
import EventsTable from './EventsTable.astro';
import ApiSection from './ApiSection.astro';
import AccessibilityChecklist from './AccessibilityChecklist.astro';
import AnatomyBlock from './AnatomyBlock.astro';
import StateGrid from './StateGrid.astro';
import DoDont from './DoDont.astro';
import RelatedLinks from './RelatedLinks.astro';
import Callout from './Callout.astro';

export const markdownComponents = {
  DemoPreview,
  SectionBlock,
  ExampleBlock,
  PropsTable,
  SlotsTable,
  EventsTable,
  ApiSection,
  AccessibilityChecklist,
  AnatomyBlock,
  StateGrid,
  DoDont,
  RelatedLinks,
  Callout,
  // Aliases for convenience
  Demo: DemoPreview,
  Section: SectionBlock,
  Example: ExampleBlock,
  Props: PropsTable,
  Slots: SlotsTable,
  Events: EventsTable,
  API: ApiSection,
  A11y: AccessibilityChecklist,
  Anatomy: AnatomyBlock,
  States: StateGrid,
};

// Re-export playground components for markdown usage
export { Playground, PlaygroundPreview, PlaygroundControls, PlaygroundCode } from '../playground';
export type { PropsDefinition, PropsValues, PlaygroundConfig } from '../playground';
