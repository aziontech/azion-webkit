/**
 *
 * SectionCardExpandable
 *
 *
 * @module `sectioncardexpandable`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionCardExpandableProps {
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  cards: Array<{
    title: string
    description: string
    img: {
      src: string
      alt: string
    }
    imgLight: {
      src: string
      alt: string
    }
    button: {
      label: string
      link: string
      outlined: boolean
      target: string
    }
  }>
}

export interface SectionCardExpandableSlots {
  default(): VNode[]
}

export interface SectionCardExpandableEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionCardExpandable extends ClassComponent<
  SectionCardExpandableProps,
  SectionCardExpandableSlots,
  SectionCardExpandableEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionCardExpandable: GlobalComponentConstructor<SectionCardExpandable>
  }
}

export default SectionCardExpandable
