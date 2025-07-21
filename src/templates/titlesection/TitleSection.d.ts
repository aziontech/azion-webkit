/**
 *
 * TitleSection
 *
 *
 * @module `titlesection`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface TitleSectionProps {
  isContentCentralized: boolean
  tag: string
  title: string
}

export interface TitleSectionSlots {
  default(): VNode[]
}

export interface TitleSectionEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class TitleSection extends ClassComponent<
  TitleSectionProps,
  TitleSectionSlots,
  TitleSectionEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    TitleSection: GlobalComponentConstructor<TitleSection>
  }
}

export default TitleSection
