/**
 *
 * FeaturedPost represents the block to show erros some render or request
 *
 *
 * @module `featuredpost`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface FeaturedPostProps {
  title: string
  description: string | undefined
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface FeaturedPostSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface FeaturedPostEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FeaturedPost extends ClassComponent<
  FeaturedPostProps,
  FeaturedPostSlots,
  FeaturedPostEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FeaturedPost: GlobalComponentConstructor<FeaturedPost>
  }
}

export default FeaturedPost
