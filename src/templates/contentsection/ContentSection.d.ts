/**
 *
 * ContentSection
 *
 *
 * @module `contentsection`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface ContentSectionProps {
  overline?: string | undefined
  title?: string | undefined
  /**
   * options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6',],
   * @defaultValue h2
   */
  titleTag?: string
  description?: string
  descriptionRawHtml?: string
  /**
   * options: ['left', 'right', 'center'],
   * @defaultValue left
   */
  position?: string
  /**
   * @defaultValue false
   */
  isContentCentralized?: boolean
  /**
   * @defaultValue false
   */
  textCenter?: boolean
  /**
   * @defaultValue false
   */
  reverse?: boolean
  /**
   * @defaultValue false
   */
  isSticky?: boolean
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface ContentSectionSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface ContentSectionEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class ContentSection extends ClassComponent<
  ContentSectionProps,
  ContentSectionSlots,
  ContentSectionEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    ContentSection: GlobalComponentConstructor<ContentSection>
  }
}

export default ContentSection
