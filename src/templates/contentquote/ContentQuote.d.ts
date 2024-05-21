/**
 *
 * ContentQuote
 *
 *
 * @module `contentquote`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ContentQuoteProps {
  /**
   * @defaultValue false
   */
  isCarousel?: boolean | false;
  data: [];
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ContentQuoteSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ContentQuoteEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ContentQuote extends ClassComponent<ContentQuoteProps, ContentQuoteSlots, ContentQuoteEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ContentQuote: GlobalComponentConstructor<ContentQuote>;
  }
}

export default ContentQuote;
