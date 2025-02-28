/**
 *
 * SectionListProducts
 *
 *
 * @module `sectionlistproducts`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type List = {
  icon: string
  title: string
  description: string
}

/**
 * Defines valid properties in SectionListProducts component.
 */
export interface SectionListProductsProps {
  titleTag: string
  title: string
  overline: string
  list: List
}

/**
 * Defines valid slots in SectionListProducts component.
 */
export interface SectionListProductsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionListProducts component.
 */
export interface SectionListProductsEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionListProducts extends ClassComponent<
  SectionListProductsProps,
  SectionListProductsSlots,
  SectionListProductsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionListProducts: GlobalComponentConstructor<SectionListProducts>
  }
}

export default SectionListProducts
