/**
 *
 * StatHighlightBannerl
 *
 *
 * @module `stathighlightbanner`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in StatHighlightBannerl component.
 */
export interface StatHighlightBannerlProps {
  icon?: string
  title: string
  description?: string
}

/**
 * Defines valid slots in StatHighlightBannerl component.
 */
export interface StatHighlightBannerlSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in StatHighlightBannerl component.
 */
export interface StatHighlightBannerlEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class StatHighlightBannerl extends ClassComponent<
  StatHighlightBannerlProps,
  StatHighlightBannerlSlots,
  StatHighlightBannerlEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    StatHighlightBannerl: GlobalComponentConstructor<StatHighlightBannerl>
  }
}

export default StatHighlightBannerl
