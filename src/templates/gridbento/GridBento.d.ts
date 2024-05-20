/**
 *
 * GridBento represents people using links in the page with css buttons look.
 *
 *
 * @module `gridbento`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in GridBento component.
 */
export interface GridBentoProps {
  /**
   * Defines type of grid bento
   * @defaultValue true2-column-6-items
   *  options: [
   *   '2-columns-3-items',
   *   '2-columns-4-items',
   *   '2-columns-5-items',
   *   '2-columns-6-items',
   *   '3-columns-7-items',
   *   '4-columns-5-items'
   * ]
   */
  gridType: string | undefined;
}

/**
 * Defines valid slots in GridBento component.
 */
export interface GridBentoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in GridBento component.
 */
export interface GridBentoEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class GridBento extends ClassComponent<GridBentoProps, GridBentoSlots, GridBentoEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    GridBento: GlobalComponentConstructor<GridBento>;
  }
}

export default GridBento;
