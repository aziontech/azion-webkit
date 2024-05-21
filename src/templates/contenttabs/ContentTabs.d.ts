/**
 *
 * ContentTabs
 *
 *
 * @module `contenttabs`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ContentTabsProps {
  content: [];
  title: string;
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ContentTabsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ContentTabsEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ContentTabs extends ClassComponent<ContentTabsProps, ContentTabsSlots, ContentTabsEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ContentTabs: GlobalComponentConstructor<ContentTabs>;
  }
}

export default ContentTabs;
