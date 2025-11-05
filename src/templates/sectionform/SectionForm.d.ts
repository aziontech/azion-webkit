/**
 *
 * SectionForm
 *
 *
 * @module `sectionform`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Form configuration object for HubSpot form
 */
interface FormConfig {
  /**
   * HubSpot form ID
   */
  id: string
  /**
   * Form title displayed above the form fields
   */
  title: string
  /**
   * Optional custom form action URL
   */
  action?: string
  /**
   * Success message displayed after form submission (if redirect is not provided)
   */
  successMessage?: string
  /**
   * Optional URL to redirect after form submission
   */
  redirect?: string
}

/**
 * Defines valid properties in SectionForm component.
 */
export interface SectionFormProps {
  /**
   * Section ID attribute
   * @defaultValue ''
   */
  id?: string
  /**
   * Form configuration object
   */
  form: FormConfig
  /**
   * Vertical spacing/margin for the section
   * @defaultValue 'none'
   */
  margin?: 'none' | 'small' | 'default' | 'large'
}

/**
 * Defines valid slots in SectionForm component.
 */
export interface SectionFormSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionForm component.
 */
export interface SectionFormEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionForm extends ClassComponent<
  SectionFormProps,
  SectionFormSlots,
  SectionFormEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionForm: GlobalComponentConstructor<SectionForm>
  }
}

export default SectionForm
