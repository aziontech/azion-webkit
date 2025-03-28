/**
 *
 * SectionBulletsRightWithLogos
 *
 *
 * @module `sectionbulletsrightwithlogos`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionBulletsRightWithLogos component.
 */
export interface SectionBulletsRightWithLogosProps {
  title: string
  severity: string
  button: {
    label: string
    link: string
  }
  logos: Array<{
    imageSrc: string
    title?: string
    link?: string
  }>
  list: Array<{
    icon: string
    title: string
    description: string
  }>
}

/**
 * Defines valid slots in SectionBulletsRightWithLogos component.
 */
export interface SectionBulletsRightWithLogosSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionBulletsRightWithLogos component.
 */
export interface SectionBulletsRightWithLogosEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionBulletsRightWithLogos extends ClassComponent<
  SectionBulletsRightWithLogosProps,
  SectionBulletsRightWithLogosSlots,
  SectionBulletsRightWithLogosEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionBulletsRightWithLogos: GlobalComponentConstructor<SectionBulletsRightWithLogos>
  }
}

export default SectionBulletsRightWithLogos
