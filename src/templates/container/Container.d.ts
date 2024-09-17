/**
 *
 * container
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module container
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in container component.
 */
export interface ContainerProps {
  // title: string;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface ContainerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface ContainerEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Container extends ClassComponent<ContainerProps, ContainerSlots, ContainerEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Container: GlobalComponentConstructor<Container>;
  }
}

export default Container;
