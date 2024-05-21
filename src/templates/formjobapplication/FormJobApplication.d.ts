/**
 *
 * formjobapplication
 *
 *
 * @module formjobapplication
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in titlelist component.
 */
export interface FormJobApplicationProps {
  t: object;
  jobid: object;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface FormJobApplicationSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface FormJobApplicationEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class FormJobApplication extends ClassComponent<FormJobApplicationProps, FormJobApplicationSlots, FormJobApplicationEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    FormJobApplication: GlobalComponentConstructor<FormJobApplication>;
  }
}

export default FormJobApplication;
