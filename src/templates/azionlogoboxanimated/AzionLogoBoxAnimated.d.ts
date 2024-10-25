/**
 *
 * AzionLogoBoxAnimated
 *
 *
 * @module `azionlogoboxanimated`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AzionLogoBoxAnimated component.
 */
export interface AzionLogoBoxAnimatedProps {
  // href: string;
  // hrefTitle: string;
  // /**
  //  * @defaultValue '_self'
  //  */
  // target: {
  //   type: String,
  //   default: '_self'
  // }
}

/**
 * Defines valid slots in AzionLogoBoxAnimated component.
 */
export interface AzionLogoBoxAnimatedSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AzionLogoBoxAnimated component.
 */
export interface AzionLogoBoxAnimatedEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class AzionLogoBoxAnimated extends ClassComponent<AzionLogoBoxAnimatedProps, AzionLogoBoxAnimatedSlots, AzionLogoBoxAnimatedEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogoBoxAnimated: GlobalComponentConstructor<AzionLogoBoxAnimated>;
  }
}

export default AzionLogoBoxAnimated;
