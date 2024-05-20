/**
 *
 * BigNumbers represents the big numbers template
 *
 *
 * @module `bignumbers`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface BigNumbersProps {
  items: [];
  /**
   * Defines the text to display is centralized.
   * @defaultValue true
   */
  centralized: boolean;
  /**
   * Defines the text to display with border.
   * @defaultValue true
   */
  border: boolean;
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface BigNumbersSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface BigNumbersEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class BigNumbers extends ClassComponent<BigNumbersProps, BigNumbersSlots, BigNumbersEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    BigNumbers: GlobalComponentConstructor<BigNumbers>;
  }
}

export default BigNumbers;
