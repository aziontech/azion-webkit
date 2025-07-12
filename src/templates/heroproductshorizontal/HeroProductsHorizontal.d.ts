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
export interface HeroProductsHorizontalProps {
  id?: string
  justify?: string
  overline?: string
  description?: string
  descriptionRawHtml?: string
  buttons?: Array<{
    label: string
    link: string
    outlined?: boolean
  }>
  hgroup: {
    title: string
    subtitle: string
  }
  images: {
    light: string
    dark: string
    alt: string
  }
  list: object
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
