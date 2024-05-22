/**
 *
 * FooterSimple represents the block to show erros some render or request
 *
 *
 * @module `footersimple`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface FooterSimpleProps {
  text: string;
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface FooterSimpleSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface FooterSimpleEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class FooterSimple extends ClassComponent<FooterSimpleProps, FooterSimpleSlots, FooterSimpleEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    FooterSimple: GlobalComponentConstructor<FooterSimple>;
  }
}

export default FooterSimple;
