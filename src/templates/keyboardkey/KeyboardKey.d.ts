/**
 *
 * KeyboardKey represents people press some key and emit event
 *
 *
 * @module `keyboardkey`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in KeyboardKey component.
 */
export interface KeyboardKeyProps {
  /**
   * Defines key pressed
   */
  keyname: string
}

/**
 * Defines valid slots in KeyboardKey component.
 */
export interface KeyboardKeySlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in KeyboardKey component.
 */
export interface KeyboardKeyEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class KeyboardKey extends ClassComponent<
  KeyboardKeyProps,
  KeyboardKeySlots,
  KeyboardKeyEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    KeyboardKey: GlobalComponentConstructor<KeyboardKey>
  }
}

export default KeyboardKey
