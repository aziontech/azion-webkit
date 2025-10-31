/**
 *
 * SectionIframe
 *
 *
 * @module `SectionIframe`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in SectionIframe component.
 */
export interface SectionIframeProps {
  /** Optional ID for the section element */
  id?: string | undefined
  /** Iframe URL to render */
  iframeUrl: string
}

/**
 * Defines valid slots in SectionIframe component.
 */
export interface SectionIframeSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in SectionIframe component.
 */
export interface SectionIframeEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class SectionIframe extends ClassComponent<
  SectionIframeProps,
  SectionIframeSlots,
  SectionIframeEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    SectionIframe: GlobalComponentConstructor<SectionIframe>
  }
}

export default SectionIframe
