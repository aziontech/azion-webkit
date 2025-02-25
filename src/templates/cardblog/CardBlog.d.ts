/**
 *
 * cardblog
 *
 * @module cardblog
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in cardbase component.
 */
export interface CardBlogProps {
  imgSrc?: string
  imgAlt?: string
  title: string
  description: string
  authors?: {}
  date: {}
  estimateReadTime?: string
  link: URL
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardBlogSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardBlogEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class CardBlog extends ClassComponent<CardBlogProps, CardBlogSlots, CardBlogEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    CardBlog: GlobalComponentConstructor<CardBlog>
  }
}

export default CardBlog
