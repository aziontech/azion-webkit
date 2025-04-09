/**
 *
 * EdgeNetworkTabView
 *
 *
 * @module `edgenetworktabview`
 */
import { VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers'

/**
 * Defines valid properties in EdgeNetworkTabView component.
 */
export interface EdgeNetworkTabViewProps {
  locations: Array<{
    title: string
    points: Array<{
      country: string
      cities: Array<{
        name: string
        number: string | number
      }>
    }>
  }>
}

/**
 * Defines valid slots in EdgeNetworkTabView component.
 */
export interface EdgeNetworkTabViewSlots {
  /**
   * Content can easily be customized with the default slot instead of using the built-in modes.
   */
  default(): VNode[]
}

/**
 * Defines valid emits in EdgeNetworkTabView component.
 */
export interface EdgeNetworkTabViewEmits {
  /**
   * Triggered when an error occurs
   */
  error(event: Event): void
}

/**
 * @group Component
 */
declare class EdgeNetworkTabView extends ClassComponent<
  EdgeNetworkTabViewProps,
  EdgeNetworkTabViewSlots,
  EdgeNetworkTabViewEmits
> {}

declare module 'vue' {
  export interface GlobalComponents {
    EdgeNetworkTabView: GlobalComponentConstructor<EdgeNetworkTabView>
  }
}

export default EdgeNetworkTabView
