/**
 *
 * titlelist represents people using post article
 *
 * - [Live Demo](https://primevue.org/avatar)
 *
 * @module titlelist
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in titlelist component.
 */
export interface TitleListProps {
  /**
   * List of data list
   */
  data: []
  /**
   * Text of button to used to load more action
   * @defaultValue See all posts
   */
  buttonText?: string | 'See all posts'
  /**
   * link to send to pages with all content
   */
  link?: string | undefined
}

/**
 * Defines valid slots in Avatar component.
 */
export interface TitleListSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface TitleListEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class TitleList extends ClassComponent<TitleListProps, TitleListSlots, TitleListEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    TitleList: GlobalComponentConstructor<TitleList>
  }
}

export default TitleList
