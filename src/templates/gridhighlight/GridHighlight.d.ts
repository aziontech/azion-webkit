/**
 *
 * GridHighlight represents a grid layout with clickable cards.
 *
 *
 * @module `gridhighlight`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in GridHighlight component.
 */
export interface GridHighlightProps {
  /**
   * Array of card objects to be displayed in the grid.
   */
  cards: Array<{
    image: string
    alt: string
    link: string
    description: string
  }>
}

/**
 * Defines valid slots in GridHighlight component.
 */
export interface GridHighlightSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in GridHighlight component.
 */
export interface GridHighlightEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class GridHighlight extends ClassComponent<GridHighlightProps, GridHighlightSlots, GridHighlightEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    GridHighlight: GlobalComponentConstructor<GridHighlight>
  }
}

export default GridHighlight