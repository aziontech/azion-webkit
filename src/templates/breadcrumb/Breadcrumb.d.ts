/**
 *
 * breadcrumb
 *
 * - [Live Demo](https://primevue.org/breadcrumb/)
 *
 * @module breadcrumb
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Breadcrumb component.
 */
export interface BreadcrumbProps {
  /**
   * https://primevue.org/breadcrumb/
   */
  data: []
}

/**
 * Defines valid slots in Avatar component.
 */
export interface BreadcrumbSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface BreadcrumbEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Breadcrumb extends ClassComponent<
  BreadcrumbProps,
  BreadcrumbSlots,
  BreadcrumbEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    Breadcrumb: GlobalComponentConstructor<Breadcrumb>
  }
}

export default Breadcrumb
