/**
 *
 * Quote represents a single testimonial/quote item
 *
 *
 * @module `quote`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../../templates/ts-helpers'

/**
 * Defines valid properties in Quote component.
 */
export interface QuoteProps {
  /**
   * Logo HTML string to display
   */
  logo: string
  /**
   * Testimonial text content
   */
  testimonial: string
  /**
   * Source attribution text
   */
  source: string
}

/**
 * Defines valid slots in Quote component.
 */
export interface QuoteSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Quote component.
 */
export interface QuoteEmits {}

/**
 * @group Component
 */
declare class Quote extends ClassComponent<QuoteProps, QuoteSlots, QuoteEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Quote: GlobalComponentConstructor<Quote>
  }
}

export default Quote
