/**
 *
 * SectionHorizontalCardNavigation
 *
 *
 * @module `sectionhorizontalcardnavigation`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionHorizontalCardNavigationProps {
  position: string
  overline: string
  titleTag: string
  title: string
  description: string
  descriptionRawHtml: string
  buttons: Array<{
    link: string
    label: string
    outlined?: boolean
  }>
  leftSidebar: Array<{
    link: string
    label: string
  }>
  items: Array<{
    overline: string
    id: string
    cards: Array<{
      title: string
      description: string
      link: string
      action: {
        label: string
      }
    }>
  }>
}

export interface SectionHorizontalCardNavigationSlots {
  default(): VNode[]
}

export interface SectionHorizontalCardNavigationEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionHorizontalCardNavigation extends ClassComponent<
  SectionHorizontalCardNavigationProps,
  SectionHorizontalCardNavigationSlots,
  SectionHorizontalCardNavigationEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionHorizontalCardNavigation: GlobalComponentConstructor<SectionHorizontalCardNavigation>
  }
}

export default SectionHorizontalCardNavigation
