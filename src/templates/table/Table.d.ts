/**
 *
 * Table
 *
 *
 * @module `table`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Table component.
 */
export interface TableProps {
  /**
   * Title of the table
   */
  title?: string
  /**
   * HTML string containing a table element
   */
  htmlTable: string
}

/**
 * Defines valid slots in Table component.
 */
export interface TableSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Table component.
 */
export interface TableEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Table extends ClassComponent<TableProps, TableSlots, TableEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Table: GlobalComponentConstructor<Table>
  }
}

export default Table
