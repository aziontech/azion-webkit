/**
 *
 * HeroHome represents people using links in the page with css buttons look.
 *
 *
 * @module `herohome`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroHome component.
 */

interface Button {
  label: string
  href: string
  target?: string
}

interface Logo {
  title: string
  images: string[]
}

interface CTA {
  label: string
  link: string
}

interface BannerNews {
  description: string
  cta: CTA
}

export interface HeroHomeProps {
  title: string
  description: string
  bannerNews?: BannerNews
  buttons?: Button[]
  logos: Logo
}

/**
 * Defines valid slots in HeroHome component.
 */
export interface HeroHomeSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroHome component.
 */
export interface HeroHomeEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroHome extends ClassComponent<HeroHomeProps, HeroHomeSlots, HeroHomeEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroHome: GlobalComponentConstructor<HeroHome>
  }
}

export default HeroHome
