/**
 *
 * AzionLogoSvgMoveToTheEdge
 *
 *
 * @module `azionlogosvgmovetothedge`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AzionLogoSvgMoveToTheEdge component.
 */
export interface AzionLogoSvgMoveToTheEdgeProps {
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
 * Defines valid slots in AzionLogoSvgMoveToTheEdge component.
 */
export interface AzionLogoSvgMoveToTheEdgeSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AzionLogoSvgMoveToTheEdge component.
 */
export interface AzionLogoSvgMoveToTheEdgeEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AzionLogoSvgMoveToTheEdge extends ClassComponent<
  AzionLogoSvgMoveToTheEdgeProps,
  AzionLogoSvgMoveToTheEdgeSlots,
  AzionLogoSvgMoveToTheEdgeEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogoSvgMoveToTheEdge: GlobalComponentConstructor<AzionLogoSvgMoveToTheEdge>
  }
}

export default AzionLogoSvgMoveToTheEdge
