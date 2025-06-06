/**
 *
 * SectionVideoRight
 *
 *
 * @module `sectionvideoright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionVideoRight component.
 */
export interface SectionVideoRightProps {
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
    cards?: Array<{
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
 * Defines valid slots in SectionVideoRight component.
 */
export interface SectionVideoRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionVideoRight component.
 */
export interface SectionVideoRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionVideoRight extends ClassComponent<
  SectionVideoRightProps,
  SectionVideoRightSlots,
  SectionVideoRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionVideoRight: GlobalComponentConstructor<SectionVideoRight>
  }
}

export default SectionVideoRight
