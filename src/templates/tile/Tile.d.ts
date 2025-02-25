/**
 *
 * Tile
 *
 *
 * @module `tile`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in Tile component.
 */
export interface TileProps {}

/**
 * Defines valid slots in Tile component.
 */
export interface TileSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in Tile component.
 */
export interface TileEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class Tile extends ClassComponent<TileProps, TileSlots, TileEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    Tile: GlobalComponentConstructor<Tile>
  }
}

export default Tile
