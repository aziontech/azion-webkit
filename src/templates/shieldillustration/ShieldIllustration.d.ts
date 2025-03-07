/**
 *
 * shieldillustration
 * https://codepen.io/cesaroeduardo/pen/dyBjzJz
 *
 *
 * @module shieldillustration
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in shieldillustration component.
 */
export interface ShieldIllustrationProps {}

/**
 * Defines valid slots in Avatar component.
 */
export interface ShieldIllustrationSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface ShieldIllustrationEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class ShieldIllustration extends ClassComponent<
  ShieldIllustrationProps,
  ShieldIllustrationSlots,
  ShieldIllustrationEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    ShieldIllustration: GlobalComponentConstructor<ShieldIllustration>
  }
}

export default ShieldIllustration
