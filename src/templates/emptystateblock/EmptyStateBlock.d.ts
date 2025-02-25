/**
 *
 * EmptyStateBlock represents the block to show erros some render or request
 *
 *
 * @module `emptystateblock`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface EmptyStateBlockProps {
  title: string
  description: string | undefined
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface EmptyStateBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface EmptyStateBlockEmits {
  /**
   * Triggered when an empty occurs while loading an image file.
   */
  empty(event: Event): void
}

/**
 * @group Component
 */
declare class EmptyStateBlock extends ClassComponent<
  EmptyStateBlockProps,
  EmptyStateBlockSlots,
  EmptyStateBlockEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    EmptyStateBlock: GlobalComponentConstructor<EmptyStateBlock>
  }
}

export default EmptyStateBlock
