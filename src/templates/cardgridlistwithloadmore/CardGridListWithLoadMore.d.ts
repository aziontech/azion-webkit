/**
 *
 * cardgridlistwithloadmore
 *
 *
 * @module cardgridlistwithloadmore
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in newslettercard component.
 */
export interface CardGridListWithLoadMoreProps {
  data: [];
  /**
   * @defaultValue () => { return { class: "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" }}
   */
  pt?: object;
  /**
   * options: ['blog', 'cases']
   * @defaultValue 'blog'
   */
  cardType?: string;
  /**
   * @defaultValue "Load more"
   */
  buttonText?: string;
   /**
   * @defaultValue 12
   */
  loadMoreNumber?: number;
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardGridListWithLoadMoreSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[];
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardGridListWithLoadMoreEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void;
}

/**
 * @group Component
 */
declare class CardGridListWithLoadMore extends ClassComponent<CardGridListWithLoadMoreProps, CardGridListWithLoadMoreSlots, CardGridListWithLoadMoreEmits> { }

declare module 'vue' {
  export interface GlobalComponents {
    CardGridListWithLoadMore: GlobalComponentConstructor<CardGridListWithLoadMore>;
  }
}

export default CardGridListWithLoadMore;
