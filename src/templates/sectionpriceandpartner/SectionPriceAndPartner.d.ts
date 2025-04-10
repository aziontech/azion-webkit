/**
 *
 * SectionPriceAndPartner
 *
 *
 * @module `SectionPriceAndPartner`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionPriceAndPartner component.
 */
export interface SectionPriceAndPartnerProps {
  overline?: string
  title: string
  description: string
  lang: string
  isSticky?: boolean
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Defines valid slots in SectionPriceAndPartner component.
 */
export interface SectionPriceAndPartnerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionPriceAndPartner component.
 */
export interface SectionPriceAndPartnerEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionPriceAndPartner extends ClassComponent<
  SectionPriceAndPartnerProps,
  SectionPriceAndPartnerSlots,
  SectionPriceAndPartnerEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionPriceAndPartner: GlobalComponentConstructor<SectionPriceAndPartner>
  }
}

export default SectionPriceAndPartner