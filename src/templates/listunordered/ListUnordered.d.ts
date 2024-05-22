/**
 *
 * ListUnordered
 *
 *
 * @module `listunordered`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ListUnordered component.
 */
export interface ListUnorderedProps {
  /**
   * @defaultValue () => []
   */
  data: [];
  /**
   * @defaultValue 'vertical'
   */
  direction?: string;
}

/**
 * Defines valid slots in ListUnordered component.
 */
export interface ListUnorderedSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in ListUnordered component.
 */
export interface ListUnorderedEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ListUnordered extends ClassComponent<ListUnorderedProps, ListUnorderedSlots, ListUnorderedEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ListUnordered: GlobalComponentConstructor<ListUnordered>;
  }
}

export default ListUnordered;
