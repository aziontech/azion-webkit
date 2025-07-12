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

interface Card {
  image: {
    alt: string
    src: string
  }
  tag: string
  description: string
  button: {
    label: string
  }
  logo: {
    src: string
    alt: string
  }
  link: string
}
/**
 * Defines valid properties in HeroFeaturedBottom component.
 */
export interface HeroFeaturedBottomProps {
  id?: string
  overline?: string
  title?: string
  description?: string
  buttons: Button[]
  cards: Card[]
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
