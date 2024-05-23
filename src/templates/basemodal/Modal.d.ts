/**
 *
 * Footer represents the block to show erros some render or request
 *
 *
 * @module `footersimple`
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Modal component.
 */
export interface ModalProps {
  customStyle: string,
  showHeader: boolean,
}

/**
 * Defines valid slots in Modal component.
 */
export interface ModalSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  header(): VNode[];
  content(): VNode[];
  footer(): VNode[];
}

/**
 * Defines valid emits in Modal component.
 */
export interface ModalEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class Modal extends ClassComponent<ModalProps, ModalSlots, ModalEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    Modal: GlobalComponentConstructor<Modal>;
  }
}

export default Modal;
