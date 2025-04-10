/**
 *
 * SectionGridHighlight
 *
 *
 * @module `sectiongridhighlight`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface Card {
  image: string
  alt: string
  link: string
  description: string
}

// Type for the button object
interface ButtonProps {
  text?: string
  href?: string
  target?: string
  [key: string]: any // To allow any additional properties
}

/**
 * Defines valid properties in SectionGridHighlight component.
 */
export interface SectionGridHighlightProps {
  overline?: string
  title: string
  description?: string
  button?: ButtonProps
  cards: Card[]
}

/**
 * Defines valid slots in SectionGridHighlight component.
 */
export interface SectionGridHighlightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionGridHighlight component.
 */
export interface SectionGridHighlightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionGridHighlight extends ClassComponent<
  SectionGridHighlightProps,
  SectionGridHighlightSlots,
  SectionGridHighlightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionGridHighlight: GlobalComponentConstructor<SectionGridHighlight>
  }
}

export default SectionGridHighlight