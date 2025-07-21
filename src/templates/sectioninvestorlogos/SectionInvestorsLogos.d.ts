/**
 *
 * SectionInvestorLogos
 *
 *
 * @module `sectioninvestorlogos`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionInvestorLogos component.
 */
export interface SectionInvestorLogosProps {
  id?: string | undefined
  /**
   * Defines the id of the section
   * @defaultValue ''
   */
  logos: string[]
  title: string
  overline: string
}

/**
 * Defines valid slots in SectionInvestorLogos component.
 */
export interface SectionInvestorLogosSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionInvestorLogos component.
 */
export interface SectionInvestorLogosEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionInvestorLogos extends ClassComponent<
  SectionInvestorLogosProps,
  SectionInvestorLogosSlots,
  SectionInvestorLogosEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionInvestorLogos: GlobalComponentConstructor<SectionInvestorLogos>
  }
}

export default SectionInvestorLogos
