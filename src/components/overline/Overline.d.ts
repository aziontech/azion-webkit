/**
 *
 * Overline
 *
 *
 * @module `overline`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Overline component.
 */
export interface OverlineProps {
  // No props - component uses slot content only
}

/**
 * Defines valid slots in Overline component.
 */
export interface OverlineSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Overline component.
 */
export interface OverlineEmits {
  // No emits - component is purely presentational
}

export interface OverlineColor {
  primary: 'text-neutral-200'
  orange: 'text-orange'
}

export interface OverlineProps {
  /**
   * Text color of the overline
   */
  color: OverlineColor
}
/**
 * @group Component
 */
declare class Overline extends ClassComponent<OverlineProps, OverlineSlots, OverlineEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Overline: GlobalComponentConstructor<Overline>
  }
}

export default Overline
