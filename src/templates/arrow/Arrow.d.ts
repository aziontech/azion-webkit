/**
 *
 * Arrow represents a visual component
 *
 *
 * @module `arrow`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Arrow component.
 */
export interface ArrowProps {
  /**
   * Defines the direction of arrow
   */
  direction?: string
  /**
   * Define the default css values:
   * options: ['solid', 'dotted', 'dashed', 'ridge']
   */
  borderStyle?: string
  /**
   * Define the width of arrow
   */
  width?: string
}

/**
 * Defines valid slots in Arrow component.
 */
export interface ArrowSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Arrow component.
 */
export interface ArrowEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Arrow extends ClassComponent<ArrowProps, ArrowSlots, ArrowEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Arrow: GlobalComponentConstructor<Arrow>
  }
}

export default Arrow
