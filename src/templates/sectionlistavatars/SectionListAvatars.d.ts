/**
 *
 * SectionListAvatars
 *
 *
 * @module `sectionlistavatars`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

type Avatars = Array<{
  image: string
  name: string
  role: string
  url: string
}>

export interface SectionListAvatarsProps {
  id?: string | undefined
  /**
   * Defines the id of the section
   * @defaultValue ''
   */
  titleTag: string
  image: string
  title: string
  overline: string
  avatars: Avatars
}
export interface SectionListAvatarsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionListAvatars component.
 */
export interface SectionListAvatarsEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionListAvatars extends ClassComponent<
  SectionListAvatarsProps,
  SectionListAvatarsSlots,
  SectionListAvatarsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionListAvatars: GlobalComponentConstructor<SectionListAvatars>
  }
}

export default SectionListAvatars
