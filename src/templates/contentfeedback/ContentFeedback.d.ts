/**
 *
 * ContentFeedback
 *
 *
 * @module `contentfeedback`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ContentFeedbackProps {
  /**
   * @defaultValue 3000
   */
  autoplayInterval?: number | 3000;
  cards: [];
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ContentFeedbackSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ContentFeedbackEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ContentFeedback extends ClassComponent<ContentFeedbackProps, ContentFeedbackSlots, ContentFeedbackEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ContentFeedback: GlobalComponentConstructor<ContentFeedback>;
  }
}

export default ContentFeedback;
