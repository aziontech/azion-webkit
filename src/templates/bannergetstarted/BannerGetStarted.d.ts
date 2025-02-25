/**
 *
 * BannerGetStarted represents the big numbers template
 *
 *
 * @module `bannergetstarted`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Buttons = {
  link: string
  label: string
  outlined: boolean
}

type Items = {
  icon: string
  text: string
}

type BannerGetStartedItems = {
  overline: string
  title: string
  buttons: Buttons[]
  items: Items[]
}

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface BannerGetStartedProps {
  items: BannerGetStartedItems[]
  /**
   * Defines the text to display is centralized.
   * @defaultValue true
   */
  centralized: boolean
  /**
   * Defines the text to display with border.
   * @defaultValue true
   */
  border: boolean
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface BannerGetStartedSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface BannerGetStartedEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class BannerGetStarted extends ClassComponent<
  BannerGetStartedProps,
  BannerGetStartedSlots,
  BannerGetStartedEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    BannerGetStarted: GlobalComponentConstructor<BannerGetStarted>
  }
}

export default BannerGetStarted
