/**
 *
 * QuoteAvatar
 *
 *
 * @module `quoteavatar`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in QuoteAvatar component.
 */
export interface QuoteAvatarProps {
  border: boolean
  disableDegrade: boolean
  text: string
  author: string
  image: string
  button: {
    label: string
    link: string
    target: string
  }
}

/**
 * Defines valid slots in QuoteAvatar component.
 */
export interface QuoteAvatarSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in QuoteAvatar component.
 */
export interface QuoteAvatarEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class QuoteAvatar extends ClassComponent<
  QuoteAvatarProps,
  QuoteAvatarSlots,
  QuoteAvatarEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    QuoteAvatar: GlobalComponentConstructor<QuoteAvatar>
  }
}

export default QuoteAvatar
