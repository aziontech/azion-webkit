/**
 *
 *
 * @module `articlenavigation`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in ArticleNavigation component.
 */
export interface ArticleNavigationProps {
  /**
   * Defines the text to display.
   */
  cards: {
    prev: {
      text: string
      link: string
    }
    next: {
      text: string
      link: string
    }
  }
  /**
   * Defines which index to hit
   */
  overline?: {
    prev: string,
    next: string
  }
}

/**
 * Defines valid slots in ArticleNavigation component.
 */
export interface ArticleNavigationSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in ArticleNavigation component.
 */
export interface ArticleNavigationEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class ArticleNavigation extends ClassComponent<
  ArticleNavigationProps,
  ArticleNavigationSlots,
  ArticleNavigationEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    ArticleNavigation: GlobalComponentConstructor<ArticleNavigation>
  }
}

export default ArticleNavigation
