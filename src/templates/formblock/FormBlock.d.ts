/**
 *
 * formblock
 *
 *
 * @module formblock
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in titlelist component.
 */
export interface FormBlockProps {
  title: string
  description?: string
}

/**
 * Defines valid slots in Avatar component.
 */
export interface FormBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface FormBlockEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FormBlock extends ClassComponent<FormBlockProps, FormBlockSlots, FormBlockEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    FormBlock: GlobalComponentConstructor<FormBlock>
  }
}

export default FormBlock
