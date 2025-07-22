/**
 *
 * HeroProductsHorizontal
 *
 *
 * @module `heroproductshorizontal`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroProductsHorizontal component.
 */
export interface LinkButtonProps {
  /**
   * Defines the text to display.
   */
  label: string
  /**
   * Defines the icon to display.
   */
  icon?: string | undefined
  /**
   * Defines icon position, options: [left, right]
   * @defaultValue left
   */
  iconPos?: 'left' | 'right' | undefined
  /**
   * Defines the href attribute of LinkButton
   */
  link?: string | undefined
  /**
   * Severity of LinkButton [info, secondary]
   * @defaultValue info
   */
  severity?: 'info' | 'secondary' | undefined
  /**
   * Shape of the element.
   * @defaultValue _self
   */
  target?: '_self' | '_blank' | undefined
  /**
   * Options [small], apply text-sm class
   */
  size?: string | undefined
  /**
   * When enabled, it add the borders
   * @defaultValue false
   */
  outlined?: boolean
  /**
   * When enabled, it add the borders
   * @defaultValue false
   */
  text?: boolean
  position?: 'left' | 'right'
  id?: string
}

/**
 * Defines valid slots in HeroProductsHorizontal component.
 */
export interface HeroProductsHorizontalSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroProductsHorizontal component.
 */
export interface HeroProductsHorizontalEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroProductsHorizontal extends ClassComponent<
  HeroProductsHorizontalProps,
  HeroProductsHorizontalSlots,
  HeroProductsHorizontalEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroProductsHorizontal: GlobalComponentConstructor<HeroProductsHorizontal>
  }
}

export default HeroProductsHorizontal
