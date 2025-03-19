/**
 *
 * HeroFeaturedBottom represents people using links in the page with css buttons look.
 *
 *
 * @module `herofeaturedbottom`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

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
/**
 * Defines valid properties in HeroFeaturedBottom component.
 */
export interface HeroFeaturedBottomProps {
  overline?: string
  title?: string
  description?: string
  buttons: Button[]
  images: Images
}

/**
 * Defines valid slots in HeroFeaturedBottom component.
 */
export interface HeroFeaturedBottomSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroFeaturedBottom component.
 */
export interface HeroFeaturedBottomEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroFeaturedBottom extends ClassComponent<
  HeroFeaturedBottomProps,
  HeroFeaturedBottomSlots,
  HeroFeaturedBottomEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroFeaturedBottom: GlobalComponentConstructor<HeroFeaturedBottom>
  }
}

export default HeroFeaturedBottom
