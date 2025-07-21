/**
 *
 * SectionMapOurNetwork
 *
 *
 * @module `sectionmapournetwork`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionMapOurNetwork component.
 */
export interface SectionMapOurNetworkProps {
  id?: string | undefined
  /**
   * Defines the id of the section
   * @defaultValue ''
   */
  overline: string
  title: string
  description: string
  tags: Array<string>
  // locations: Array<{
  //   title: string
  //   points: Array<{
  //     country: string
  //     cities: Array<{
  //       name: string
  //       number: string | number
  //     }>
  //   }>
  // }>
  cities: Object
}

/**
 * Defines valid slots in SectionMapOurNetwork component.
 */
export interface SectionMapOurNetworkSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionMapOurNetwork component.
 */
export interface SectionMapOurNetworkEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionMapOurNetwork extends ClassComponent<
  SectionMapOurNetworkProps,
  SectionMapOurNetworkSlots,
  SectionMapOurNetworkEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionMapOurNetwork: GlobalComponentConstructor<SectionMapOurNetwork>
  }
}

export default SectionMapOurNetwork
