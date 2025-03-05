/**
 *
 * ListDescriptionUnordered
 *
 *
 * @module `listdescriptionunordered`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in ListDescriptionUnordered component.
 */
export interface ListDescriptionUnorderedProps {
  /**
   * @defaultValue () => []
   */
  data: Array<{
    title: string
    items: Array<{
      icon: string
      description: string
    }>
  }>
  /**
   * @defaultValue 'default'
   */
  severity?: string
}

/**
 * Defines valid slots in ListDescriptionUnordered component.
 */
export interface ListDescriptionUnorderedSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in ListDescriptionUnordered component.
 */
export interface ListDescriptionUnorderedEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class ListDescriptionUnordered extends ClassComponent<
  ListDescriptionUnorderedProps,
  ListDescriptionUnorderedSlots,
  ListDescriptionUnorderedEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    ListDescriptionUnordered: GlobalComponentConstructor<ListDescriptionUnordered>
  }
}

export default ListDescriptionUnordered
