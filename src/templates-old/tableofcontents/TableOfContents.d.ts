/**
 *
 * tableofcontents
 *
 *
 * @module tableofcontents
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in tableofcontents component.
 */
export interface TableOfContentsProps {
  content: any
}

/**
 * Defines valid slots in Avatar component.
 */
export interface TableOfContentsSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface TableOfContentsEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class TableOfContents extends ClassComponent<
  TableOfContentsProps,
  TableOfContentsSlots,
  TableOfContentsEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    TableOfContents: GlobalComponentConstructor<TableOfContents>
  }
}

export default TableOfContents
