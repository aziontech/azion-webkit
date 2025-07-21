/**
 *
 * SectionCardBackground
 *
 * @module `sectioncardbackground`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionCardBackgroundProps {
  id?: string
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  buttons: Array<{
    label: string
    link: string
    outlined: boolean | undefined
  }>
  cards: Array<{
    label: string
    title: string
    image: string
    alt: string
  }>
}

export interface SectionCardBackgroundSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCardBackground component.
 */
export interface SectionCardBackgroundEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCardBackground extends ClassComponent<
  SectionCardBackgroundProps,
  SectionCardBackgroundSlots,
  SectionCardBackgroundEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCardBackground: GlobalComponentConstructor<SectionCardBackground>
  }
}

export default SectionCardBackground
