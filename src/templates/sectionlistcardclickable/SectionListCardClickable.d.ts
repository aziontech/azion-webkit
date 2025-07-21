/**
 *
 * SectionListCardClickable
 *
 *
 * @module `sectionlistcardclickable`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionListCardClickableProps {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  cards: Array<{
    title: string
    description: string
    link: string
    action: {
      label: string
    }
  }>
}

export interface SectionListCardClickableSlots {
  default(): VNode[]
}

export interface SectionListCardClickableEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionListCardClickable extends ClassComponent<
  SectionListCardClickableProps,
  SectionListCardClickableSlots,
  SectionListCardClickableEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionListCardClickable: GlobalComponentConstructor<SectionListCardClickable>
  }
}

export default SectionListCardClickable
