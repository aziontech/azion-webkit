/**
 *
 * HeroVideoRight
 *
 *
 * @module `herovideoright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroVideoRight component.
 */
export interface HeroVideoRightProps {
  id?: string
  overline: string
  titleTag: string
  title: string
  description: string
  descriptioRawHtml: string
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
      title: string
      description: string
      cta: {
        action: {
          label: string
        }
      }
    }>
  }
}

/**
 * Defines valid slots in HeroVideoRight component.
 */
export interface HeroVideoRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroVideoRight component.
 */
export interface HeroVideoRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeroVideoRight extends ClassComponent<
  HeroVideoRightProps,
  HeroVideoRightSlots,
  HeroVideoRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroVideoRight: GlobalComponentConstructor<HeroVideoRight>
  }
}

export default HeroVideoRight
