// src/templates/sectionnumberedcards/SectionNumberedCards.d.ts

import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionNumberedCards component.
 */
export interface SectionNumberedCardsProps {
  overline?: string
  title: string
  description?: string
  cards?: Array<{
    title: string
    description: string
    button?: {
      label: string
      link: string
      outlined?: boolean
    }
  }>
}

/**
 * Defines valid slots in SectionNumberedCards component.
 */
export interface SectionNumberedCardsSlots {
  /**
   * Main content slot.
   */
  main(): VNode[]
}

/**
 * Defines valid emits in SectionNumberedCards component.
 */
// No emits are defined in the provided component, so this section is empty.

/**
 * @group Component
 */
declare class SectionNumberedCards extends ClassComponent<
  SectionNumberedCardsProps,
  SectionNumberedCardsSlots,
  {}
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionNumberedCards: GlobalComponentConstructor<SectionNumberedCards>
  }
}

export default SectionNumberedCards
