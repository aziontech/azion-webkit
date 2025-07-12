/**
 *
 * SectionBulletsRight
 *
 *
 * @module `sectionbulletsright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface Button {
  label: string
  link: string
  outlined?: boolean // Optional, as not all buttons have this property
}

// Type for individual content block objects
interface ContentBlock {
  icon: string
  title: string
  description: string
}

/**
 * Defines valid properties in SectionBulletsRight component.
 */
export interface SectionBulletsRightProps {
  id?: string | undefined
  /**
   * Defines the id of the section
   * @defaultValue ''
   */
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  buttons: Button[]
  data: ContentBlock[]
}

/**
 * Defines valid slots in SectionBulletsRight component.
 */
export interface SectionBulletsRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionBulletsRight component.
 */
export interface SectionBulletsRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionBulletsRight extends ClassComponent<
  SectionBulletsRightProps,
  SectionBulletsRightSlots,
  SectionBulletsRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionBulletsRight: GlobalComponentConstructor<SectionBulletsRight>
  }
}

export default SectionBulletsRight
