/**
 *
 * Quote
 *
 *
 * @module `quote`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface QuoteProps {
  border: boolean
  disableDegrade: boolean
  text: string
  author: string
  imageLight: string
  imageDark: string
  button: {
    label: string
    link: string
    target: string
  }
  alt?: string
}

export interface QuoteSlots {
  default(): VNode[]
}

export interface QuoteEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Quote extends ClassComponent<QuoteProps, QuoteSlots, QuoteEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Quote: GlobalComponentConstructor<Quote>
  }
}

export default Quote
