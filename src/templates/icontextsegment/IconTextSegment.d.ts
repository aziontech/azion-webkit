/**
 *
 * IconTextSegment
 *
 *
 * @module `icontextsegment`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in IconTextSegment component.
 */
export interface IconTextSegmentProps {
  href?: string
  title: string
  description?: string
  icon?: string
  tag?: string
  /**
   * @defaultValue 'info'
   */
  tagSeverity?: string
}

/**
 * Defines valid slots in IconTextSegment component.
 */
export interface IconTextSegmentSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
  /** Custom icon slot */
  icon(): VNode[]
}

/**
 * Defines valid emits in IconTextSegment component.
 */
export interface IconTextSegmentEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class IconTextSegment extends ClassComponent<
  IconTextSegmentProps,
  IconTextSegmentSlots,
  IconTextSegmentEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    IconTextSegment: GlobalComponentConstructor<IconTextSegment>
  }
}

export default IconTextSegment
