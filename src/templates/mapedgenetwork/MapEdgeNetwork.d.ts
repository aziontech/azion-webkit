/**
 *
 * MapEdgeNetwork
 *
 *
 * @module `mapedgenetwork`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in MapEdgeNetwork component.
 */
export interface MapEdgeNetworkProps {
  cities: Object
}

/**
 * Defines valid slots in MapEdgeNetwork component.
 */
export interface MapEdgeNetworkSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in MapEdgeNetwork component.
 */
export interface MapEdgeNetworkEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class MapEdgeNetwork extends ClassComponent<
  MapEdgeNetworkProps,
  MapEdgeNetworkSlots,
  MapEdgeNetworkEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    MapEdgeNetwork: GlobalComponentConstructor<MapEdgeNetwork>
  }
}

export default MapEdgeNetwork
