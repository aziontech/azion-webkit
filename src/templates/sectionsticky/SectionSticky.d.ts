/**
 *
 * SectionStickys
 *
 *
 * @module `sectionsticky`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Sections = {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  position: string
  /**
   * options: ['left', 'right', 'center', 'full'],
   * @defaultValue left
   */
  buttons: Array<{
    severity?: string
    outlined?: boolean
    link: string
    label: string
  }>
  images: {
    light: string
    dark: string
    alt: string
  }
}

/**
 * Defines valid properties in SectionStickys component.
 */
export interface SectionStickysProps {
  id?: string
  title: string
  overline: string
  sections: Sections[]
}

/**
 * Defines valid slots in SectionStickys component.
 */
export interface SectionStickysSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionStickys component.
 */
export interface SectionStickysEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionStickys extends ClassComponent<
  SectionStickysProps,
  SectionStickysSlots,
  SectionStickysEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionStickys: GlobalComponentConstructor<SectionStickys>
  }
}

export default SectionStickys
