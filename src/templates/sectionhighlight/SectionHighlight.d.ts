/**
 *
 * SectionHighlight
 *
 *
 * @module `sectionhighlight`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type BigNumbers = {
  justify: 'center' | 'start'
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}

/**
 * Defines valid properties in SectionHighlight component.
 */
export interface SectionHighlightProps {
  data: BigNumbers
  title: string
  overline: string
}

/**
 * Defines valid slots in SectionHighlight component.
 */
export interface SectionHighlightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionHighlight component.
 */
export interface SectionHighlightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionHighlight extends ClassComponent<
  SectionHighlightProps,
  SectionHighlightSlots,
  SectionHighlightEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionHighlight: GlobalComponentConstructor<SectionHighlight>
  }
}

export default SectionHighlight
