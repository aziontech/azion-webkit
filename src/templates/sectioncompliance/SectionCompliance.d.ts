/**
 *
 * SectionCompliances
 *
 *
 * @module `sectioncompliance`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface Card {
  overline?: string
  title: string
  description?: string
}

// Type for the button object
interface ButtonProps {
  text?: string
  href?: string
  target?: string
  [key: string]: any // To allow any additional properties
}

/**
 * Defines valid properties in SectionCompliances component.
 */
export interface SectionCompliancesProps {
  overline?: string
  titleTag: string
  title: string
  description?: string
  descriptionRawHtml?: string
  button?: ButtonProps
  cards: Card[]
}

/**
 * Defines valid slots in SectionCompliances component.
 */
export interface SectionCompliancesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionCompliances component.
 */
export interface SectionCompliancesEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCompliances extends ClassComponent<
  SectionCompliancesProps,
  SectionCompliancesSlots,
  SectionCompliancesEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCompliances: GlobalComponentConstructor<SectionCompliances>
  }
}

export default SectionCompliances
