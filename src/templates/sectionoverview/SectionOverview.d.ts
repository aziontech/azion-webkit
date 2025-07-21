/**
 *
 * SectionOverview
 *
 *
 * @module `sectionoverview`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

interface Button {
  label: string
  link: string
  outlined?: boolean // Optional, as not all buttons have this property
}

// Type for individual content block objects
interface ContentBlock {
  icon: string
  title: string
  description: string
}

/**
 * Defines valid properties in SectionOverview component.
 */
export interface SectionOverviewProps {
  id?: string
  overline: string
  title: string
  description: string
  buttons: Button[]
  data: ContentBlock[]
}

/**
 * Defines valid slots in SectionOverview component.
 */
export interface SectionOverviewSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionOverview component.
 */
export interface SectionOverviewEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionOverview extends ClassComponent<
  SectionOverviewProps,
  SectionOverviewSlots,
  SectionOverviewEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionOverview: GlobalComponentConstructor<SectionOverview>
  }
}

export default SectionOverview
