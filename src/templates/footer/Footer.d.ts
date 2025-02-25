/**
 *
 * Footer represents the block to show erros some render or request
 *
 *
 * @module `footersimple`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface FooterProps {
  lang: string
  listData: []
  copyright: string
  cta: {}
  socialButtons?: []
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface FooterSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface FooterEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Footer extends ClassComponent<FooterProps, FooterSlots, FooterEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Footer: GlobalComponentConstructor<Footer>
  }
}

export default Footer
