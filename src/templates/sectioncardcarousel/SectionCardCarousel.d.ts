/**
 *
 * SectionCardCarousel
 *
 *
 * @module `sectioncardcarousel`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type CardsType = Array<{
  title: string
  description: string
  link: string
  action: {
    label: string
  }
}>

type ResponsiveOptionsType = Array<{
  breakpoint: string
  numVisible: number
  numScroll: number
}>

/**
 * Defines valid properties in SectionCardCarousel component.
 */
export interface SectionCardCarouselProps {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  cards: CardsType
  responsiveOptions: ResponsiveOptionsType
}

/**
 * Defines valid slots in SectionCardCarousel component.
 */
export interface SectionCardCarouselSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCardCarousel component.
 */
export interface SectionCardCarouselEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCardCarousel extends ClassComponent<
  SectionCardCarouselProps,
  SectionCardCarouselSlots,
  SectionCardCarouselEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCardCarousel: GlobalComponentConstructor<SectionCardCarousel>
  }
}

export default SectionCardCarousel
