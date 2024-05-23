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
 * Defines valid properties in CardBgImage component.
 */
export interface CardBgImageProps {
  image: string,
  alt: string,
  customGradient: string,
}

/**
 * Defines valid slots in CardBgImage component.
 */
export interface CardBgImageSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  content(): VNode[];
}

/**
 * Defines valid emits in CardBgImage component.
 */
export interface CardBgImageEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardBgImage extends ClassComponent<CardBgImageProps, CardBgImageSlots, CardBgImageEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardBgImage: GlobalComponentConstructor<CardBgImage>;
  }
}

export default CardBgImage;
