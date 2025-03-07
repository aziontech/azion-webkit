/**
 *
 * cardgridblock
 *
 *
 * @module `cardgridblock`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface CardGridBlockProps {
  data: []
  categories: []
  defaultTab: string
  /**
   * @defaultValue "Search articles..."
   */
  inputPlaceholder?: string
  /**
   * @defaultValue "Show more"
   */
  buttonText?: string
  /**
   * @defaultValue 12
   */
  loadMoreNumber?: number
  /**
   * @defaultValue () => { return { class: "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" }}
   */
  pt?: object
  algoliaAppId: string
  algoliaApiKey: string
  algoliaIndex: []
  algoliaModel: []
  /**
   * @defaultValue false
   */
  isSearchEnabled?: boolean
  /**
   * @defaultValue false
   */
  isLoadMoreEnabled?: boolean
  cardType: string
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface CardGridBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface CardGridBlockEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class CardGridBlock extends ClassComponent<
  CardGridBlockProps,
  CardGridBlockSlots,
  CardGridBlockEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    CardGridBlock: GlobalComponentConstructor<CardGridBlock>
  }
}

export default CardGridBlock
