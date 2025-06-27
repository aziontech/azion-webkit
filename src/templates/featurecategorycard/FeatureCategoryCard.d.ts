/**
 *
 * FeatureCategoryCard
 *
 * @module FeatureCategoryCard
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in FeatureCategoryCard component.
 */
export interface FeatureCategoryCardProps {
  /**
   * Card title text
   */
  title?: string
  /**
   * Card description text
   */
  description?: string
  /**
   * List of link objects { label, link }
   */
  links: []
  /**
   * Card background color style
   * @defaultValue 'outlined'
   */
  backgroundColor?: string
}

/**
 * Defines valid slots in FeatureCategoryCard component.
 */
export interface FeatureCategoryCardSlots {
  /** Icon to be displayed */
  icon(): VNode[]
  /** Custom title */
  title(): VNode[]
  /** Custom description */
  description(): VNode[]
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in FeatureCategoryCard component.
 */
export interface FeatureCategoryCardEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FeatureCategoryCard extends ClassComponent<
  FeatureCategoryCardProps,
  FeatureCategoryCardSlots,
  FeatureCategoryCardEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FeatureCategoryCard: GlobalComponentConstructor<FeatureCategoryCard>
  }
}

export default FeatureCategoryCard
