/**
 *
 * seectionbasecards
 *
 *
 * @module `seectionbasecards`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Cards = Array<{
  title: string
  description: string
}>

/**
 * Defines valid properties in seectionbasecards component.
 */
export interface SectionBaseCardsProps {
  overline: string
  title: string
  description: string
  cards: Array<Cards>
}

/**
 * Defines valid slots in seectionbasecards component.
 */
export interface SectionBaseCardsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in seectionbasecards component.
 */
export interface SectionBaseCardsEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionBaseCards extends ClassComponent<
  SectionBaseCardsProps,
  SectionBaseCardsSlots,
  SectionBaseCardsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    secetionbasecards: GlobalComponentConstructor<SectionBaseCards>
  }
}

export default SectionBaseCards
