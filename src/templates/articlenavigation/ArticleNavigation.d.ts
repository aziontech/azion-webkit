/**
 *
 * AisIndexHit represents hit in the algilia index, the small peace of result
 *
 *
 * @module `aisindexhit`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in AisIndexHit component.
 */
export interface AisIndexHitProps {
  /**
   * Defines the text to display.
   */
  label: string
  /**
   * Defines which index to hit
   */
  indexName?: string | undefined
}

/**
 * Defines valid slots in AisIndexHit component.
 */
export interface AisIndexHitSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in AisIndexHit component.
 */
export interface AisIndexHitEmits {
  /**
   * Triggered when an error occurs while loading an image file.
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class AisIndexHit extends ClassComponent<
  AisIndexHitProps,
  AisIndexHitSlots,
  AisIndexHitEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    AisIndexHit: GlobalComponentConstructor<AisIndexHit>
  }
}

export default AisIndexHit
