/**
 *
 * SectionQuoteAvatar
 *
 *
 * @module `sectionquoteavatar`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

export interface SectionQuoteAvatarProps {
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

export interface SectionQuoteAvatarSlots {
  default(): VNode[]
}

export interface SectionQuoteAvatarEmits {
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionQuoteAvatar extends ClassComponent<
  SectionQuoteAvatarProps,
  SectionQuoteAvatarSlots,
  SectionQuoteAvatarEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionQuoteAvatar: GlobalComponentConstructor<SectionQuoteAvatar>
  }
}

export default SectionQuoteAvatar
