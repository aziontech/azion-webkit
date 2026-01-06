/**
 *
 * community
 *
 *
 * @module community
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in newslettercard component.
 */
export interface CommunityProps {
  lang: string
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CommunitySlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CommunityEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Community extends ClassComponent<CommunityProps, CommunitySlots, CommunityEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Community: GlobalComponentConstructor<Community>
  }
}

export default Community
