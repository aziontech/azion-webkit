/**
 *
 * Header
 *
 *
 * @module `header`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Header component.
 */
export interface HeaderProps {
  menuSecondary: []
}

/**
 * Defines valid slots in Header component.
 */
export interface HeaderSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Header component.
 */
export interface HeaderEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Header extends ClassComponent<HeaderProps, HeaderSlots, HeaderEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Header: GlobalComponentConstructor<Header>
  }
}

export default Header
