/**
 *
 * netinfo
 *
 *
 * @module netinfo
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in netinfo component.
 */
export interface NetinfoProps {}

/**
 * Defines valid slots in Avatar component.
 */
export interface NetinfoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface NetinfoEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Netinfo extends ClassComponent<NetinfoProps, NetinfoSlots, NetinfoEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Netinfo: GlobalComponentConstructor<Netinfo>;
  }
}

export default Netinfo;
