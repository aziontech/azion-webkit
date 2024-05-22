/**
 *
 * CardDescription
 *
 *
 * @module `carddescription`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in CardDescription component.
 */
export interface CardDescriptionProps {
  /**
   * options: ['primary', 'secondary'],
   * @defaultValue 'secondary'
   */
  color?: string;
}

/**
 * Defines valid slots in CardDescription component.
 */
export interface CardDescriptionSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in CardDescription component.
 */
export interface CardDescriptionEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardDescription extends ClassComponent<CardDescriptionProps, CardDescriptionSlots, CardDescriptionEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardDescription: GlobalComponentConstructor<CardDescription>;
  }
}

export default CardDescription;
