/**
 *
 * ProductCard
 *
 * @module ProductCard
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in ProductCard component.
 */
export interface ProductCardProps {
  /** Card title text */
  title?: string
  /** Card description text */
  description?: string
  /** PrimeIcon name */
  icon?: string
  /** Optional href for main segment */
  link?: string
  /**
   * List of link objects { label, link, arrow? }
   */
  links: Array<{
    label: string
    link: string
    arrow?: boolean
  }>
  /**
   * When true, displays an overline labeled "Add-ons" above the links
   * @defaultValue false
   */
  addons?: boolean
  /**
   * Card background color style
   * @defaultValue 'outlined'
   */
  backgroundColor?: string
}

/**
 * Defines valid slots in ProductCard component.
 */
export interface ProductCardSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in ProductCard component.
 */
export interface ProductCardEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class ProductCard extends ClassComponent<
  ProductCardProps,
  ProductCardSlots,
  ProductCardEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    ProductCard: GlobalComponentConstructor<ProductCard>
  }
}

export default ProductCard
