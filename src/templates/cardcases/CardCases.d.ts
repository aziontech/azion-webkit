/**
 *
 * cardcases
 *
 * @module cardcases
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in cardbase component.
 */
export interface CardCasesProps {
  image?: string
  imgAlt?: string
  tagList: string
  description: string
  link: URL
}

/**
 * Defines valid slots in Avatar component.
 */
export interface CardCasesSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Avatar component.
 */
export interface CardCasesEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class CardCases extends ClassComponent<CardCasesProps, CardCasesSlots, CardCasesEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    CardCases: GlobalComponentConstructor<CardCases>
  }
}

export default CardCases
