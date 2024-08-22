/**
 *
 * Globe represents a visual component
 *
 *
 * @module `globe`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Globe component.
 */
export interface GlobeProps {
  /**
   * Defines the countries theme image
   */
  lightImage?: string;
  darkImage?: string;
}

/**
 * Defines valid slots in Globe component.
 */
export interface GlobeSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Globe component.
 */
export interface GlobeEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Globe extends ClassComponent<GlobeProps, GlobeSlots, GlobeEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Globe: GlobalComponentConstructor<Globe>;
  }
}

export default Globe;
