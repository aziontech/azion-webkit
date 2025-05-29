/**
 *
 * HeroHome represents people using links in the page with css buttons look.
 *
 *
 * @module `herohome`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

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
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  bannerNews?: BannerNews
  buttons?: Button[]
  logos: Logo
}

export interface HeroHomeSlots {
  default(): VNode[]
}

export interface HeroHomeEmits {
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
