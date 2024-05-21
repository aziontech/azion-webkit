/**
 *
 * Banner
 *
 *
 * @module `banner`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in Banner component.
 */
export interface BannerProps {
  description: string;
  cta: string;
  link: string;
}

/**
 * Defines valid slots in Banner component.
 */
export interface BannerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Banner component.
 */
export interface BannerEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Banner extends ClassComponent<BannerProps, BannerSlots, BannerEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Banner: GlobalComponentConstructor<Banner>;
  }
}

export default Banner;
