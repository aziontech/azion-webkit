/**
 *
 * Overline
 *
 *
 * @module `overline`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in Overline component.
 */
export interface OverlineProps {
  label: string;
}

/**
 * Defines valid slots in Overline component.
 */
export interface OverlineSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Overline component.
 */
export interface OverlineEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Overline extends ClassComponent<OverlineProps, OverlineSlots, OverlineEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Overline: GlobalComponentConstructor<Overline>;
  }
}

export default Overline;
