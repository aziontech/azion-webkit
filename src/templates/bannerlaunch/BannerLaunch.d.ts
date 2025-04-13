/**
 *
 * BannerLaunch
 *
 *
 * @module `bannerlaunch`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface BannerLaunchProps {
  title: string
  description: string
  imageDark: string
  imageLight: string
}

export interface BannerLaunchSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in BannerLaunch component.
 */
export interface BannerLaunchEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class BannerLaunch extends ClassComponent<
  BannerLaunchProps,
  BannerLaunchSlots,
  BannerLaunchEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    BannerLaunch: GlobalComponentConstructor<BannerLaunch>
  }
}

export default BannerLaunch
