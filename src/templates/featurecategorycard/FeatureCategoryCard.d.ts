/**
 * FeatureCategoryCard
 *
 * @module FeatureCategoryCard
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface FeatureCategoryCardProps {
  title?: string
  description?: string
  icon?: string
  links: Array<{
    label: string
    link: string
  }>
}

export interface FeatureCategoryCardSlots {
  default(): VNode[]
}

export interface FeatureCategoryCardEmits {
  error(event: Event): void
}

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
