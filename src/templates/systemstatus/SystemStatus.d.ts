/**
 *
 * SystemStatus
 *
 *
 * @module `systemstatus`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in SystemStatus component.
 */
export interface SystemStatusProps {}

/**
 * Defines valid slots in SystemStatus component.
 */
export interface SystemStatusSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in SystemStatus component.
 */
export interface SystemStatusEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class SystemStatus extends ClassComponent<SystemStatusProps, SystemStatusSlots, SystemStatusEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    SystemStatus: GlobalComponentConstructor<SystemStatus>;
  }
}

export default SystemStatus;
