/**
 *
 * QuoteCarousel
 *
 *
 * @module `quotecarousel`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
// import { CardReleaseProps } from '../cardrelease/CardRelease'

/**
 * Defines valid properties in QuoteCarousel component.
 */
export interface QuoteCarouselProps {
  data: Array<[]>; // <CardReleaseProps>;
  numVisible: Number;
  numScroll: Number;
}

/**
 * Defines valid slots in QuoteCarousel component.
 */
export interface QuoteCarouselSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in QuoteCarousel component.
 */
export interface QuoteCarouselEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class QuoteCarousel extends ClassComponent<QuoteCarouselProps, QuoteCarouselSlots, QuoteCarouselEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    QuoteCarousel: GlobalComponentConstructor<QuoteCarousel>;
  }
}

export default QuoteCarousel;
