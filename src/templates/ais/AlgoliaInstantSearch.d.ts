/**
 *
 * AlgoliaInstantSearch represents people using Algolia Search.
 *
 *
 * @module `ais`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in AlgoliaInstantSearch component.
 */
export interface AlgoliaInstantSearchProps {
   /**
   * Defines if dialog it is opened
   * @defaultValue false
   */
   isDialogActive: boolean;
   /**
    * Defines the Algolia AppID
    */
   algoliaAppId: string | undefined;
   /**
    * Defines the Algolia ApiKey
    */
   algoliaApiKey: string | undefined;
   /**
    * Defines the list of Algolia Index to be hitted
    */
   algoliaIndex: [];
   /**
    * Defines the list of Algolia Model to Index to be hitted
    */
   algoliaModel: [];
   /**
    * Defines the header Dialog title
    */
   inputPlaceholder: string | undefined;
}

/**
 * Defines valid slots in AlgoliaInstantSearch component.
 */
export interface AlgoliaInstantSearchSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AlgoliaInstantSearch component.
 */
export interface AlgoliaInstantSearchEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class AlgoliaInstantSearch extends ClassComponent<AlgoliaInstantSearchProps, AlgoliaInstantSearchSlots, AlgoliaInstantSearchEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    AlgoliaInstantSearch: GlobalComponentConstructor<AlgoliaInstantSearch>;
  }
}

export default AlgoliaInstantSearch;
