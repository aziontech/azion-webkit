/**
 *
 * formjobapplicationinhire
 *
 *
 * @module formjobapplicationinhire
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in titlelist component.
 */
export interface FormJobApplicationInHireProps {
  t: object
  jobId: string
}

/**
 * Defines valid slots in Avatar component.
 */
export interface FormJobApplicationInHireSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface FormJobApplicationInHireEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FormJobApplicationInHire extends ClassComponent<
  FormJobApplicationInHireProps,
  FormJobApplicationInHireSlots,
  FormJobApplicationInHireEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FormJobApplicationInHire: GlobalComponentConstructor<FormJobApplicationInHire>
  }
}

export default FormJobApplicationInHire
