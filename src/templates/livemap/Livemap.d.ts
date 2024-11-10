/**
 *
 * Livemap
 *
 *
 * @module `livemap`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Livemap component.
 */
export interface LivemapProps {
  lang: string;
}

/**
 * Defines valid slots in Livemap component.
 */
export interface LivemapSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Livemap component.
 */
export interface LivemapEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Livemap extends ClassComponent<LivemapProps, LivemapSlots, LivemapEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Livemap: GlobalComponentConstructor<Livemap>;
  }
}

export default Livemap;
