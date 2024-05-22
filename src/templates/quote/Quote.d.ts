/**
 *
 * Quote
 *
 *
 * @module `quote`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in Quote component.
 */
export interface QuoteProps {
  text: string;
  imageLight: string;
  imageDark: string;
  label?: string;
  /**
   * @defautValue 'row'
   */
  direction?: string;
  /**
   * @defautValue false
   */
  display?: boolean;
  alt?: string;
}

/**
 * Defines valid slots in Quote component.
 */
export interface QuoteSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Quote component.
 */
export interface QuoteEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Quote extends ClassComponent<QuoteProps, QuoteSlots, QuoteEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Quote: GlobalComponentConstructor<Quote>;
  }
}

export default Quote;
