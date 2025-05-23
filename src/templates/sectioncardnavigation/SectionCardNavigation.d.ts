/**
 *
 * SectionCardNavigation
 *
 *
 * @module `sectioncardnavigation`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionCardNavigation component.
 */
export interface SectionCardNavigationProps {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  cards: Array<{
    title: string
    description: string
    links: {
      label: string
      link: string
    }
  }>
}

/**
 * Defines valid slots in SectionCardNavigation component.
 */
export interface SectionCardNavigationSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCardNavigation component.
 */
export interface SectionCardNavigationEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCardNavigation extends ClassComponent<
  SectionCardNavigationProps,
  SectionCardNavigationSlots,
  SectionCardNavigationEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCardNavigation: GlobalComponentConstructor<SectionCardNavigation>
  }
}

export default SectionCardNavigation
