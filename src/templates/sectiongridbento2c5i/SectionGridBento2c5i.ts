/**
 *
 * sectiongridbento
 *
 *
 * @module `sectiongridbento`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Cards = Array<{
  title: string
  description: string
  imageDark: string
  imageLight: string
  alt: string
}>

/**
 * Defines valid properties in sectiongridbento component.
 */
export interface SectionGridBentoProps {
  overline: string
  title: string
  description: string
  cards: Array<Cards>
}

/**
 * Defines valid slots in sectiongridbento component.
 */
export interface SectionGridBentoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in sectiongridbento component.
 */
export interface SectionGridBentoEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class sectiongridbento extends ClassComponent<
  SectionGridBentoProps,
  SectionGridBentoSlots,
  SectionGridBentoEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    sectiongridbento: GlobalComponentConstructor<sectiongridbento>
  }
}

export default sectiongridbento
