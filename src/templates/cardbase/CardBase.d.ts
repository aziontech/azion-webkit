/**
 *
 * cardbase
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module cardbase
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in cardbase component.
 */
export interface CardBaseProps {
  /**
   * options: ['compact', 'relaxed', 'base'],
   * @defaultValue 'base'
   */
  spacing?: string,
  grid?: boolean;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardBaseSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardBaseEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardBase extends ClassComponent<CardBaseProps, CardBaseSlots, CardBaseEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardBase: GlobalComponentConstructor<CardBase>;
  }
}

export default CardBase;
