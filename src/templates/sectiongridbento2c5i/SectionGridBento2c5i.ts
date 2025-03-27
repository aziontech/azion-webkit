/**
 *
 * sectiongridbento2c5i
 *
 *
 * @module `sectiongridbento2c5i`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Cards = Array<{
  title: string
  description: string
  image: {
    imageDark: string
    imageLight: string
    alt: string
  }
}>

/**
 * Defines valid properties in sectiongridbento2c5i component.
 */
export interface SectionGridBento2c5iProps {
  overline: string
  title: string
  description: string
  cards: Array<Cards>
}

/**
 * Defines valid slots in sectiongridbento2c5i component.
 */
export interface SectionGridBento2c5iSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in sectiongridbento2c5i component.
 */
export interface SectionGridBento2c5iEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionGridBento2c5i extends ClassComponent<
  SectionGridBento2c5iProps,
  SectionGridBento2c5iSlots,
  SectionGridBento2c5iEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    sectiongridbento2c5i: GlobalComponentConstructor<SectionGridBento2c5i>
  }
}

export default SectionGridBento2c5i
