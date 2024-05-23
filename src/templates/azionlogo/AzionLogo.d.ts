/**
 *
 * AzionLogo
 *
 *
 * @module `azionlogo`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AzionLogo component.
 */
export interface AzionLogoProps {
  href: string;
  hrefTitle: string;
  /**
   * @defaultValue '_self'
   */
  target: {
    type: String,
    default: '_self'
  }
}

/**
 * Defines valid slots in AzionLogo component.
 */
export interface AzionLogoSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AzionLogo component.
 */
export interface AzionLogoEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class AzionLogo extends ClassComponent<AzionLogoProps, AzionLogoSlots, AzionLogoEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    AzionLogo: GlobalComponentConstructor<AzionLogo>;
  }
}

export default AzionLogo;
