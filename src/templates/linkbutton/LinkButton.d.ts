/**
 *
 * LinkButton represents people using links in the page with css buttons look.
 *
 *
 * @module `linkbutton`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in LinkButton component.
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
}

/**
 * Defines valid slots in LinkButton component.
 */
export interface LinkButtonSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in LinkButton component.
 */
export interface LinkButtonEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class LinkButton extends ClassComponent<
  LinkButtonProps,
  LinkButtonSlots,
  LinkButtonEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    LinkButton: GlobalComponentConstructor<LinkButton>
  }
}

export default LinkButton
