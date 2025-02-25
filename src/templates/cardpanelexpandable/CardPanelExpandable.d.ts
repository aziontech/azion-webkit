/**
 *
 * CardPanelExpandable
 *
 *
 * @module `CardPanelExpandable`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface CardPanelExpandableProps {
  /**
   * @defaultValue 0
   */
  activeIndex?: Number
  cards: Array<any>
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface CardPanelExpandableSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface CardPanelExpandableEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class CardPanelExpandable extends ClassComponent<
  CardPanelExpandableProps,
  CardPanelExpandableSlots,
  CardPanelExpandableEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    CardPanelExpandable: GlobalComponentConstructor<CardPanelExpandable>
  }
}

export default CardPanelExpandable
