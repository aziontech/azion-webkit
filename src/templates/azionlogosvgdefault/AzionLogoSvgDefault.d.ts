/**
 *
 * AzionLogoSvgDefault
 *
 *
 * @module `azionlogosvgdefault`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AzionLogoSvgDefault component.
 */
export interface AzionLogoSvgDefaultProps {
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
 * Defines valid slots in AzionLogoSvgDefault component.
 */
export interface AzionLogoSvgDefaultSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AzionLogoSvgDefault component.
 */
export interface AzionLogoSvgDefaultEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AzionLogoSvgDefault extends ClassComponent<
  AzionLogoSvgDefaultProps,
  AzionLogoSvgDefaultSlots,
  AzionLogoSvgDefaultEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogoSvgDefault: GlobalComponentConstructor<AzionLogoSvgDefault>
  }
}

export default AzionLogoSvgDefault
