/**
 *
 * SectionImageRight
 *
 *
 * @module `sectionimageright`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionImageRight component.
 */
export interface SectionImageRightProps {
  titleTag: string
  overline: string
  title: string
  description: string
  image: string
  imageDark: string
  position?: 'left' | 'right'
}

/**
 * Defines valid slots in SectionImageRight component.
 */
export interface SectionImageRightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionImageRight component.
 */
export interface SectionImageRightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionImageRight extends ClassComponent<
  SectionImageRightProps,
  SectionImageRightSlots,
  SectionImageRightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionImageRight: GlobalComponentConstructor<SectionImageRight>
  }
}

export default SectionImageRight
