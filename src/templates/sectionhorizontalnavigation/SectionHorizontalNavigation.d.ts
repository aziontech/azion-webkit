/**
 *
 * SectionHorizontalNavitaion
 *
 *
 * @module `sectionhorizontalnavigation`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionHorizontalNavitaion component.
 */
export interface SectionHorizontalNavitaionProps {
  overline: string
  title: string
  description: string
  buttons: Array<{
    link: string
    label: string
  }>
  leftSidebar: Array<{
    link: string
    label: string
  }>
  cardContent: Array<{
    overline: string
    id: string
    cards: Array<{
      title: string
      text: string
      image: string
      alt: string
      links: Array<{
        link: string
        label: string
      }>
    }>
  }>
}

/**
 * Defines valid slots in SectionHorizontalNavitaion component.
 */
export interface SectionHorizontalNavitaionSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionHorizontalNavitaion component.
 */
export interface SectionHorizontalNavitaionEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionHorizontalNavitaion extends ClassComponent<
  SectionHorizontalNavitaionProps,
  SectionHorizontalNavitaionSlots,
  SectionHorizontalNavitaionEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionHorizontalNavitaion: GlobalComponentConstructor<SectionHorizontalNavitaion>
  }
}

export default SectionHorizontalNavitaion
