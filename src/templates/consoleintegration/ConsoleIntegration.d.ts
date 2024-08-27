/**
 *
 * consoleintegration
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module consoleintegration
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in consoleintegration component.
 */
export interface ConsoleIntegrationProps {
  // title: string;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface ConsoleIntegrationSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface ConsoleIntegrationEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ConsoleIntegration extends ClassComponent<ConsoleIntegrationProps, ConsoleIntegrationSlots, ConsoleIntegrationEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ConsoleIntegration: GlobalComponentConstructor<ConsoleIntegration>;
  }
}

export default ConsoleIntegration;
