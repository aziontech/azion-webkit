/**
 *
 * ImageSwitcher represents people using links in the page with css buttons look.
 *
 *
 * @module `themeswitcherawareimage`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in ImageSwitcher component.
 */
export interface ImageSwitcherProps {}

/**
 * Defines valid slots in ImageSwitcher component.
 */
export interface ImageSwitcherSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in ImageSwitcher component.
 */
export interface ImageSwitcherEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ImageSwitcher extends ClassComponent<ImageSwitcherProps, ImageSwitcherSlots, ImageSwitcherEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ImageSwitcher: GlobalComponentConstructor<ImageSwitcher>;
  }
}

export default ImageSwitcher;
