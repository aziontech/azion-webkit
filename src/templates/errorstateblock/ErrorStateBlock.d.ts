/**
 *
 * ErrorStateBlock represents the block to show erros some render or request
 *
 *
 * @module `errorstateblock`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../../ts-helpers';

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ErrorStateBlockProps {
  title: string;
  description: string | undefined;
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ErrorStateBlockSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ErrorStateBlockEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class ErrorStateBlock extends ClassComponent<ErrorStateBlockProps, ErrorStateBlockSlots, ErrorStateBlockEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    ErrorStateBlock: GlobalComponentConstructor<ErrorStateBlock>;
  }
}

export default ErrorStateBlock;
