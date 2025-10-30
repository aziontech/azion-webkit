/**
 *
 * heroiframeright
 *
 *
 * @module `heroiframeright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroIframeRight component.
 */
export interface HeroIframeRightProps {
  id?: string | undefined
  overline?: string
  /** HTML heading tag for the title */
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Main title text */
  title: string
  /** Plain text description (optional) */
  description?: string
  /** Raw HTML description (optional) */
  descriptionRawHtml?: string
  /** Optional list items rendered in the content slot */
  list?: Array<{
    title: string
    description: string
    icon: string
  }>
  /** Content/main position */
  position?: 'left' | 'right'
  /** Section margin preset */
  margin?: 'none' | 'small' | 'default' | 'large'
  /** Iframe URL to render on the right */
  iframeUrl: string
}

/**
 * Defines valid slots in HeroIframeRight component.
 */
export interface HeroIframeRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroIframeRight component.
 */
export interface HeroIframeRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroIframeRight extends ClassComponent<
  HeroIframeRightProps,
  HeroIframeRightSlots,
  HeroIframeRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroIframeRight: GlobalComponentConstructor<HeroIframeRight>
  }
}

export default HeroIframeRight
