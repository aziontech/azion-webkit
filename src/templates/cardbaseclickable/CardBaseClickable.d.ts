/**
 *
 * cardbaseclickable
 *
 * @module cardbaseclickable
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in cardbase component.
 */
export interface CardBaseClickableProps {
  /**
   * options: ['compact', 'relaxed', 'base'],
   * @defaultValue 'base'
   */
  spacing?: string,
  link: string;
  title?: string;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardBaseClickableSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardBaseClickableEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardBaseClickable extends ClassComponent<CardBaseClickableProps, CardBaseClickableSlots, CardBaseClickableEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardBaseClickable: GlobalComponentConstructor<CardBaseClickable>;
  }
}

export default CardBaseClickable;
