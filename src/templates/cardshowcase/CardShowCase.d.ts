/**
 *
 * cardshowcase
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module cardshowcase
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in cardshowcase component.
 */
export interface CardShowCaseProps {
  title: string;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardShowCaseSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardShowCaseEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardShowCase extends ClassComponent<CardShowCaseProps, CardShowCaseSlots, CardShowCaseEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardShowCase: GlobalComponentConstructor<CardShowCase>;
  }
}

export default CardShowCase;
