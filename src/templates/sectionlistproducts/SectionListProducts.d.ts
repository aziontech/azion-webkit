/**
 *
 * SectionListProducts
 *
 *
 * @module `sectionlistproducts`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionListProductsProps {
  id?: string
  overline: string
  titleTag: string
  title: string
  list: Array<{
    icon: string
    title: string
    description: string
    link?: string
    links?: Array<{
      label: string
      link: string
    }>
  }>
  grid: boolean
}

export interface SectionListProductsSlots {
  default(): VNode[]
}

export interface SectionListProductsEmits {
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
