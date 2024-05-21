/**
 *
 * SharerBlock represents people using links in the page with css buttons look.
 *
 *
 * @module `sharerblock`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in SharerBlock component.
 */
export interface SharerBlockProps {
  data: [];
  tooltipText: string;
  title: string;
  sharedURL: URL;
}

/**
 * Defines valid slots in SharerBlock component.
 */
export interface SharerBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SharerBlock component.
 */
export interface SharerBlockEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SharerBlock extends ClassComponent<SharerBlockProps, SharerBlockSlots, SharerBlockEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SharerBlock: GlobalComponentConstructor<SharerBlock>;
  }
}

export default SharerBlock;
