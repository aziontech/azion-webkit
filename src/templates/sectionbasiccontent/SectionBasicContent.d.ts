/**
 *
 * SectionBasicContent
 *
 * @module `sectionbasiccontent`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionBasicContent component.
 */
export interface SectionBasicContentProps {
  id?: string | undefined
  overline: string
  title: string
  titleTag: string
  wysisyg: boolean
  descrption: string
  buttons: Array<{
    label: string
    link: string
    outlined: boolean
  }>
}

/**
 * Defines valid slots in SectionBasicContent component.
 */
export interface SectionBasicContentSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionBasicContent component.
 */
export interface SectionBasicContentEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionBasicContent extends ClassComponent<
  SectionBasicContentProps,
  SectionBasicContentSlots,
  SectionBasicContentEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionBasicContent: GlobalComponentConstructor<SectionBasicContent>
  }
}

export default SectionBasicContent
