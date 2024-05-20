/**
 *
 * tabmenuwithsearch
 *
 *
 * @module tabmenuwithsearch
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in tabmenuwithsearch component.
 */
export interface TabMenuWithSearchLinkProps {
  tabList: [];
  /**
   * @defaultValue "Search articles..."
   */
  inputPlaceholder?: string;
  algoliaAppId: string;
  algoliaApiKey: string;
  algoliaIndex: [];
  algoliaModel: [];
}

/**
 * Defines valid slots in Avatar component.
 */
export interface TabMenuWithSearchLinkSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface TabMenuWithSearchLinkEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class TabMenuWithSearchLink extends ClassComponent<TabMenuWithSearchLinkProps, TabMenuWithSearchLinkSlots, TabMenuWithSearchLinkEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    TabMenuWithSearchLink: GlobalComponentConstructor<TabMenuWithSearchLink>;
  }
}

export default TabMenuWithSearchLink;
