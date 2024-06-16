/**
 *
 * AzionSquareGradient represents people using Algolia Search.
 *
 *
 * @module `azionsquaregradient`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AzionSquareGradient component.
 */
export interface AzionSquareGradientProps {}

/**
 * Defines valid slots in AzionSquareGradient component.
 */
export interface AzionSquareGradientSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AzionSquareGradient component.
 */
export interface AzionSquareGradientEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class AzionSquareGradient extends ClassComponent<AzionSquareGradientProps, AzionSquareGradientSlots, AzionSquareGradientEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    AzionSquareGradient: GlobalComponentConstructor<AzionSquareGradient>;
  }
}

export default AzionSquareGradient;
