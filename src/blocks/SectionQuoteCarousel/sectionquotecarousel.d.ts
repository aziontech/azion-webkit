/**
 *
 * SectionQuoteCarousel represents a carousel section for displaying multiple quotes/testimonials
 *
 *
 * @module `sectionquotecarousel`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../../templates/ts-helpers'

type QuoteItem = {
  logo: string
  testimonial: string
  source: string
}

/**
 * Defines valid properties in SectionQuoteCarousel component.
 */
export interface SectionQuoteCarouselProps {
  /**
   * Array of quote items to display in the carousel
   */
  items: QuoteItem[]
}

/**
 * Defines valid slots in SectionQuoteCarousel component.
 */
export interface SectionQuoteCarouselSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionQuoteCarousel component.
 */
export interface SectionQuoteCarouselEmits {}

/**
 * @group Component
 */
declare class SectionQuoteCarousel extends ClassComponent<
  SectionQuoteCarouselProps,
  SectionQuoteCarouselSlots,
  SectionQuoteCarouselEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionQuoteCarousel: GlobalComponentConstructor<SectionQuoteCarousel>
  }
}

export default SectionQuoteCarousel
