/**
 *
 * HHeaderAisDialog
 *
 *
 * @module `headeraisdialog`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in HHeaderAisDialog component.
 */
export interface HHeaderAisDialogProps {
  algoliaAppId: string;
  algoliaApiKey: string;
  algoliaIndex: [];
  algoliaModel: [];
  /**
   * @defaultValue "Search Azion"
   */
  inputPlaceholder?: string;
}

/**
 * Defines valid slots in HHeaderAisDialog component.
 */
export interface HHeaderAisDialogSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in HHeaderAisDialog component.
 */
export interface HHeaderAisDialogEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class HHeaderAisDialog extends ClassComponent<HHeaderAisDialogProps, HHeaderAisDialogSlots, HHeaderAisDialogEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    HHeaderAisDialog: GlobalComponentConstructor<HHeaderAisDialog>;
  }
}

export default HHeaderAisDialog;
