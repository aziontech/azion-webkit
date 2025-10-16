/**
 *
 * SectionStickyContent represents a section with sticky title/content on the left and scrollable content on the right
 *
 *
 * @module `sectionstickycontent`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../../templates/ts-helpers'

/**
 * Defines valid properties in SectionStickyContent component.
 */
export interface SectionStickyContentProps {
  /**
   * Title text displayed on the left side (sticky)
   */
  title?: string
  /**
   * Array of bullet point texts (can include HTML for bold text)
   */
  bullets?: string[]
  /**
   * Image source URL
   */
  image: string
  /**
   * Image alt text
   */
  alt?: string
  /**
   * Height of the image box
   * @default 'default'
   */
  height?: 'default' | 'large'
  /**
   * Layout variation
   * - 'titleBulletsImage': Title on left (sticky), bullets below title, image on right
   * - 'titleImage': Title on left (sticky), bullets on right above image, image on right
   * - 'imageOnly': No title or bullets, full width image
   * @default 'titleBulletsImage'
   */
  variant?: 'titleBulletsImage' | 'titleImage' | 'imageOnly'
}

/**
 * Defines valid slots in SectionStickyContent component.
 */
export interface SectionStickyContentSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionStickyContent component.
 */
export interface SectionStickyContentEmits {}

/**
 * @group Component
 */
declare class SectionStickyContent extends ClassComponent<
  SectionStickyContentProps,
  SectionStickyContentSlots,
  SectionStickyContentEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionStickyContent: GlobalComponentConstructor<SectionStickyContent>
  }
}

export default SectionStickyContent
