/**
 *
 * formcontactus
 *
 *
 * @module formcontactus
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in titlelist component.
 */
export interface FormContactUsProps {
  t: object
  lang?: string
  hubspot: object
  requester: string
  requesterName: string
  responseMessages?: object
}

/**
 * Defines valid slots in Avatar component.
 */
export interface FormContactUsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface FormContactUsEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FormContactUs extends ClassComponent<
  FormContactUsProps,
  FormContactUsSlots,
  FormContactUsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FormContactUs: GlobalComponentConstructor<FormContactUs>
  }
}

export default FormContactUs
