/**
 *
 * cardgridlist
 *
 *
 * @module cardgridlist
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in newslettercard component.
 */
export interface CardGridListProps {
  data: []
  /**
   * @defaultValue () => { return { class: "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" }}
   */
  pt?: object
  /**
   * options: ['blog', 'cases']
   * @defaultValue 'blog'
   */
  cardType?: string
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardGridListSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardGridListEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class CardGridList extends ClassComponent<
  CardGridListProps,
  CardGridListSlots,
  CardGridListEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    CardGridList: GlobalComponentConstructor<CardGridList>
  }
}

export default CardGridList
