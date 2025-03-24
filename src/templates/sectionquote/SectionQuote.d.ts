/**
 *
 * SectionQuote
 *
 *
 * @module `sectionquote`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionQuote component.
 */
export interface SectionQuoteProps {
  text: string
  imageLight: string
  imageDark: string
  label?: string
  /**
   * @defautValue 'row'
   */
  direction?: string
  /**
   * @defautValue false
   */
  alt?: string
}

/**
 * Defines valid slots in SectionQuote component.
 */
export interface SectionQuoteSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionQuote component.
 */
export interface SectionQuoteEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionQuote extends ClassComponent<SectionQuoteProps, SectionQuoteSlots, SectionQuoteEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionQuote: GlobalComponentConstructor<SectionQuote>
  }
}

export default SectionQuote
