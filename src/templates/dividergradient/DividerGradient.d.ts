/**
 *
 * DividerGradient
 *
 *
 * @module `dividergradient`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface DividerGradientProps {}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface DividerGradientSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface DividerGradientEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class DividerGradient extends ClassComponent<
  DividerGradientProps,
  DividerGradientSlots,
  DividerGradientEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    DividerGradient: GlobalComponentConstructor<DividerGradient>
  }
}

export default DividerGradient
