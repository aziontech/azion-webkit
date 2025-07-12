/**
 *
 * SectionCarouselRelease
 *
 *
 * @module `sectioncarouselrelease`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface Image {
  description: string
  light: string
  dark: string
  alt: string
}

// Type for the action within the card
interface Action {
  label: string
}

// Type for the card object
interface Card {
  ariaLabel: string
  link: string
  target: string
  icon: string
  hover: string
  action: Action
}

// Type for the tag object
interface Tag {
  icon: string
  label: string
}

// Type for individual item objects
interface AnalystItem {
  title: string
  image: Image
  card: Card
  tag: Tag
}

/**
 * Defines valid properties in SectionCarouselRelease component.
 */
export interface SectionCarouselReleaseProps {
  id?: string
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  items: AnalystItem[]
}

/**
 * Defines valid slots in SectionCarouselRelease component.
 */
export interface SectionCarouselReleaseSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCarouselRelease component.
 */
export interface SectionCarouselReleaseEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCarouselRelease extends ClassComponent<
  SectionCarouselReleaseProps,
  SectionCarouselReleaseSlots,
  SectionCarouselReleaseEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCarouselRelease: GlobalComponentConstructor<SectionCarouselRelease>
  }
}

export default SectionCarouselRelease
