/**
 *
 * CardTitle
 *
 *
 * @module `cardtitle`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in CardTitle component.
 */
export interface CardTitleProps {
  /**
   * @defaultValue ''
   */
  titleTag?: string;
}

/**
 * Defines valid slots in CardTitle component.
 */
export interface CardTitleSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in CardTitle component.
 */
export interface CardTitleEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardTitle extends ClassComponent<CardTitleProps, CardTitleSlots, CardTitleEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardTitle: GlobalComponentConstructor<CardTitle>;
  }
}

export default CardTitle;
