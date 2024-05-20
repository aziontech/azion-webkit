/**
 *
 * readablecontent represents people using post article
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module readablecontent
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in readablecontent component.
 */
export interface ReadableContentProps {
}

/**
 * Defines valid slots in Avatar component.
 */
export interface ReadableContentSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface ReadableContentEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ReadableContent extends ClassComponent<ReadableContentProps, ReadableContentSlots, ReadableContentEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ReadableContent: GlobalComponentConstructor<ReadableContent>;
  }
}

export default ReadableContent;
