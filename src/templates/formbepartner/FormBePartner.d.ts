/**
 *
 * formbepartner
 *
 *
 * @module formbepartner
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in titlelist component.
 */
export interface FormBePartnerProps {
  t: object
  hubspot: object
  requester: string
  requesterName: string
  responseMessages?: object
}

/**
 * Defines valid slots in Avatar component.
 */
export interface FormBePartnerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface FormBePartnerEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class FormBePartner extends ClassComponent<
  FormBePartnerProps,
  FormBePartnerSlots,
  FormBePartnerEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    FormBePartner: GlobalComponentConstructor<FormBePartner>
  }
}

export default FormBePartner
