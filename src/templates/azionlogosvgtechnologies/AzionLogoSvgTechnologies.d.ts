/**
 *
 * AzionLogoSvgTechnologies
 *
 *
 * @module `azionlogosvgtechnologies`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AzionLogoSvgTechnologies component.
 */
export interface AzionLogoSvgTechnologiesProps {
  href: string
  hrefTitle: string
  /**
   * @defaultValue '_self'
   */
  target: {
    type: String
    default: '_self'
  }
}

/**
 * Defines valid slots in AzionLogoSvgTechnologies component.
 */
export interface AzionLogoSvgTechnologiesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AzionLogoSvgTechnologies component.
 */
export interface AzionLogoSvgTechnologiesEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AzionLogoSvgTechnologies extends ClassComponent<
  AzionLogoSvgTechnologiesProps,
  AzionLogoSvgTechnologiesSlots,
  AzionLogoSvgTechnologiesEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogoSvgTechnologies: GlobalComponentConstructor<AzionLogoSvgTechnologies>
  }
}

export default AzionLogoSvgTechnologies
