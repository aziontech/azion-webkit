/**
 *
 * SectionBigTitles
 *
 *
 * @module `sectionbigtitles`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface DataItem {
  icon?: string
  title: string
  description?: string
}

// Type for the button object
interface ButtonProps {
  text?: string
  link: string
  target?: string
  [key: string]: any
}

/**
 * Defines valid properties in SectionBigTitles component.
 */
export interface SectionBigTitlesProps {
  overline?: string
  title: string
  description?: string
  button?: ButtonProps
  data: DataItem[]
}

/**
 * Defines valid slots in SectionBigTitles component.
 */
export interface SectionBigTitlesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionBigTitles component.
 */
export interface SectionBigTitlesEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionBigTitles extends ClassComponent<
  SectionBigTitlesProps,
  SectionBigTitlesSlots,
  SectionBigTitlesEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionBigTitles: GlobalComponentConstructor<SectionBigTitles>
  }
}

export default SectionBigTitles
