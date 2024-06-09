/**
 *
 * PriceAndPartner
 *
 *
 * @module `priceandpartner`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in PriceAndPartner component.
 */
export interface PriceAndPartnerProps {
  lang: string;
}

/**
 * Defines valid slots in PriceAndPartner component.
 */
export interface PriceAndPartnerSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in PriceAndPartner component.
 */
export interface PriceAndPartnerEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class PriceAndPartner extends ClassComponent<PriceAndPartnerProps, PriceAndPartnerSlots, PriceAndPartnerEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    PriceAndPartner: GlobalComponentConstructor<PriceAndPartner>;
  }
}

export default PriceAndPartner;
