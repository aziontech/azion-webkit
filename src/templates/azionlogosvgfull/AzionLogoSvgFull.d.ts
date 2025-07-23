/**
 *
 * AzionLogoSvgFull
 *
 *
 * @module `azionlogosvgfull`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AzionLogoSvgFull component.
 */
export interface AzionLogoSvgFullProps {
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
 * Defines valid slots in AzionLogoSvgFull component.
 */
export interface AzionLogoSvgFullSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AzionLogoSvgFull component.
 */
export interface AzionLogoSvgFullEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AzionLogoSvgFull extends ClassComponent<
  AzionLogoSvgFullProps,
  AzionLogoSvgFullSlots,
  AzionLogoSvgFullEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogoSvgFull: GlobalComponentConstructor<AzionLogoSvgFull>
  }
}

export default AzionLogoSvgFull
