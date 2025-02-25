/**
 *
 * AlgoliaInstantSearch represents people using Algolia Search.
 *
 *
 * @module `aisdialog`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AlgoliaDialog component.
 */
export interface AlgoliaDialogProps {
  /**
   * Defines if dialog it is opened
   * @defaultValue false
   */
  isDialogActive: boolean
  /**
   * Defines the Algolia AppID
   */
  algoliaAppId: string | undefined
  /**
   * Defines the Algolia ApiKey
   */
  algoliaApiKey: string | undefined
  /**
   * Defines the list of Algolia Index to be hitted
   */
  algoliaIndex: []
  /**
   * Defines the list of Algolia Model to Index to be hitted
   */
  algoliaModel: []
  /**
   * Defines the header Dialog title
   */
  inputPlaceholder: string | undefined
}

/**
 * Defines valid slots in AlgoliaDialog component.
 */
export interface AlgoliaDialogSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AlgoliaDialog component.
 */
export interface AlgoliaDialogEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AlgoliaDialog extends ClassComponent<
  AlgoliaDialogProps,
  AlgoliaDialogSlots,
  AlgoliaDialogEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AlgoliaDialog: GlobalComponentConstructor<AlgoliaDialog>
  }
}

export default AlgoliaDialog
