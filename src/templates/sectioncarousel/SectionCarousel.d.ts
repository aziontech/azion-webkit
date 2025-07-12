/**
 *
 * SectionCarousels
 *
 *
 * @module `sectioncarousel`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type CardsType = {
  tag: {
    icon: string
    label: string
  }
  title: string
  description: string
  link: string
  action: {
    label: string
  }
}

/**
 * Defines valid properties in SectionCarousels component.
 */
export interface SectionCarouselsProps {
  id?: string
  title: string
  overline: string
  description: string
  button: {}
  cards: Array<CardsType>
}

/**
 * Defines valid slots in SectionCarousels component.
 */
export interface SectionCarouselsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCarousels component.
 */
export interface SectionCarouselsEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCarousels extends ClassComponent<
  SectionCarouselsProps,
  SectionCarouselsSlots,
  SectionCarouselsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCarousels: GlobalComponentConstructor<SectionCarousels>
  }
}

export default SectionCarousels
