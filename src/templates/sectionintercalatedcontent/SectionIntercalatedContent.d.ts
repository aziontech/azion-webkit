/**
 *
 * SectionIntercalatedContent
 *
 *
 * @module `sectionintercalatedcontent`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Items = Array<{
  overline: string
  titleTag: string
  title: string
  descriptionRawHtml: string
  imageDark: string
  imageLight: string
  alt: string
}>

/**
 * Defines valid properties in SectionIntercalatedContent component.
 */
export interface SectionIntercalatedContentProps {
  overline: string
  titleTag: string
  title: string
  items: Items[]
}

/**
 * Defines valid slots in SectionIntercalatedContent component.
 */
export interface SectionIntercalatedContentSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionIntercalatedContent component.
 */
export interface SectionIntercalatedContentEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionIntercalatedContent extends ClassComponent<
  SectionIntercalatedContentProps,
  SectionIntercalatedContentSlots,
  SectionIntercalatedContentEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionIntercalatedContent: GlobalComponentConstructor<SectionIntercalatedContent>
  }
}

export default SectionIntercalatedContent
