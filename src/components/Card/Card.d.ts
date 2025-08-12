import { ClassComponent, GlobalComponentConstructor } from '../../templates/ts-helpers'
import { VNode } from 'vue'

/**
 * Defines valid properties in Card component.
 */
export interface CardProps {
  /**
   * Overline text displayed above the title.
   */
  overline?: string
  /**
   * Main title of the card.
   */
  title: string
  /**
   * Description text of the card.
   */
  description?: string
  /**
   * Link URL for the card action.
   */
  link?: string
  /**
   * Text displayed for the link.
   */
  linkText?: string
}

/**
 * Defines valid slots in Card component.
 */
export interface CardSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Card component.
 */
export interface CardEmits {}

/**
 * @group Component
 */
declare class Card extends ClassComponent<CardProps, CardSlots, CardEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Card: GlobalComponentConstructor<Card>
  }
}

export default Card
