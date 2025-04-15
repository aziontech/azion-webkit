/**
 *
 * BannerLaunchBackground
 *
 *
 * @module `bannerlaunchbackground`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface BannerLaunchBackgroundProps {
  title: string
  description: string
  imageDark: string
  imageLight: string
}

export interface BannerLaunchBackgroundSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in BannerLaunchBackground component.
 */
export interface BannerLaunchBackgroundEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class BannerLaunchBackground extends ClassComponent<
  BannerLaunchBackgroundProps,
  BannerLaunchBackgroundSlots,
  BannerLaunchBackgroundEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    BannerLaunchBackground: GlobalComponentConstructor<BannerLaunchBackground>
  }
}

export default BannerLaunchBackground
