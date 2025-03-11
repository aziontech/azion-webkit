/**
 *
 * HeroBoxedImageRight represents people using links in the page with css buttons look.
 *
 *
 * @module `heroboxedimageright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroBoxedImageRight component.
 */

interface Button {
  label: string
  href: string
  target?: string
}

interface Images {
  light: string
  dark: string
  alt: string
}

interface Logo {
  title: string
  images: string[]
}

export interface HeroBoxedImageRightProps {
  title: string
  images: Images
  logos: Logo
  buttons?: Button[]
}

/**
 * Defines valid slots in HeroBoxedImageRight component.
 */
export interface HeroBoxedImageRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroBoxedImageRight component.
 */
export interface HeroBoxedImageRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroBoxedImageRight extends ClassComponent<
  HeroBoxedImageRightProps,
  HeroBoxedImageRightSlots,
  HeroBoxedImageRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroBoxedImageRight: GlobalComponentConstructor<HeroBoxedImageRight>
  }
}

export default HeroBoxedImageRight
