/**
 *
 * ContentLogo
 *
 *
 * @module `contentlogo`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ContentLogoProps {
  /**
   * @defaultValue false
   */
  isCentralized?: boolean | false;
  title?: string | undefined;
  logos: [/* {imageSrc, alt}, ... */];
  /**
   * options: ["small", "default", "large"],
   * @defaultValue false
   */
  size: string | 'default';
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ContentLogoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ContentLogoEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ContentLogo extends ClassComponent<ContentLogoProps, ContentLogoSlots, ContentLogoEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ContentLogo: GlobalComponentConstructor<ContentLogo>;
  }
}

export default ContentLogo;
