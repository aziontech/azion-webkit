/**
 *
 * HeroDocs represents the hero section for documentation pages.
 *
 *
 * @module `herodocs`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeroDocs component.
 */
export interface HeroDocsProps {
  bannerNews?: object
  title?: string
  description?: string
  logos: {
    title: string
    images: Array<{
      imageSrc: string
    }>
  }
  buttons?: Array<{
    label: string
    link: string
    outlined?: boolean
  }>
}

/**
 * Defines valid slots in HeroDocs component.
 */
export interface HeroDocsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeroDocs component.
 */
export interface HeroDocsEmits {}

/**
 * @group Component
 */
declare class HeroDocs extends ClassComponent<HeroDocsProps, HeroDocsSlots, HeroDocsEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeroDocs: GlobalComponentConstructor<HeroDocs>
  }
}

export default HeroDocs 