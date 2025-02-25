/**
 *
 * SelectTheme represents people using links in the page with css buttons look.
 *
 *
 * @module `selecttheme`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SelectTheme component.
 */
export interface SelectThemeProps {}

/**
 * Defines valid slots in SelectTheme component.
 */
export interface SelectThemeSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SelectTheme component.
 */
export interface SelectThemeEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SelectTheme extends ClassComponent<
  SelectThemeProps,
  SelectThemeSlots,
  SelectThemeEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SelectTheme: GlobalComponentConstructor<SelectTheme>
  }
}

export default SelectTheme
