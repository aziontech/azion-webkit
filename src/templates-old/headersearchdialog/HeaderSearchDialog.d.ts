/**
 *
 * HeaderSearchDialog
 *
 *
 * @module `headersearchdialog`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in HeaderSearchDialog component.
 */
export interface HeaderSearchDialogProps {
  algoliaAppId: string
  algoliaApiKey: string
  algoliaIndex: []
  algoliaModel: []
  /**
   * @defaultValue: "Search Azion"
   */
  inputPlaceholder?: string
}

/**
 * Defines valid slots in HeaderSearchDialog component.
 */
export interface HeaderSearchDialogSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in HeaderSearchDialog component.
 */
export interface HeaderSearchDialogEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class HeaderSearchDialog extends ClassComponent<
  HeaderSearchDialogProps,
  HeaderSearchDialogSlots,
  HeaderSearchDialogEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    HeaderSearchDialog: GlobalComponentConstructor<HeaderSearchDialog>
  }
}

export default HeaderSearchDialog
