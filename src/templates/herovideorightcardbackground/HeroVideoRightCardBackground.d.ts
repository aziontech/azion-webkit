/**
 *
 * HeroVideoRightCardBackground
 *
 *
 * @module `herovideorightcardbackground`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroVideoRightCardBackground component.
 */
export interface HeroVideoRightCardBackgroundProps {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  video: {
    title: string
    src: string
    image: {
      light: {
        src: string
        alt: string
      }
      dark: {
        src: string
        alt: string
      }
    }
    cards: Array<{
      overline: string
      title: string
      description: string
      buttons: Array<{
        label: string
        link: string
        outlined: boolean
      }>
    }>
  }
}

/**
 * Defines valid slots in HeroVideoRightCardBackground component.
 */
export interface HeroVideoRightCardBackgroundSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroVideoRightCardBackground component.
 */
export interface HeroVideoRightCardBackgroundEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroVideoRightCardBackground extends ClassComponent<
  HeroVideoRightCardBackgroundProps,
  HeroVideoRightCardBackgroundSlots,
  HeroVideoRightCardBackgroundEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroVideoRightCardBackground: GlobalComponentConstructor<HeroVideoRightCardBackground>
  }
}

export default HeroVideoRightCardBackground
