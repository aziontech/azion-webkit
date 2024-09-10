/**
 *
 * Titlegroup
 *
 *
 * @module `Titlegroup`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Titlegroup component.
 */
export interface TitlegroupProps {
  subtitle: string;
  title: string;
}

/**
 * Defines valid slots in Titlegroup component.
 */
export interface TitlegroupSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Titlegroup component.
 */
export interface TitlegroupEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Titlegroup extends ClassComponent<TitlegroupProps, TitlegroupSlots, TitlegroupEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Titlegroup: GlobalComponentConstructor<Titlegroup>;
  }
}

export default Titlegroup;
