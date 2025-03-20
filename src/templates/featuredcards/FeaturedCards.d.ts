/**
 *
 * FeaturedCards represents the block to show erros some render or request
 *
 *
 * @module `featuredcards`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in FeaturedCards component.
 */
export interface FeaturedCardsProps {
  cards: Array<{
    image: {
      alt: string
      src: string
    }
    tag: string
    description: string
    button: {
      label: string
    }
    logo: {
      src: string
      alt: string
    }
    link: string
  }>
}

/**
 * Defines valid slots in FeaturedCards component.
 */
export interface FeaturedCardsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in FeaturedCards component.
 */
export interface FeaturedCardsEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FeaturedCards extends ClassComponent<
  FeaturedCardsProps,
  FeaturedCardsSlots,
  FeaturedCardsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FeaturedCards: GlobalComponentConstructor<FeaturedCards>
  }
}

export default FeaturedCards