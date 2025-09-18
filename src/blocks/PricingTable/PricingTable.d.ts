import { DefineComponent, VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from 'primevue/ts-helpers'

export interface PricingTableProps {}

export interface PricingTableSlots {
  /**
   * Default slot for pricing table content
   */
  default(): VNode[]
}

declare class PricingTable extends ClassComponent<PricingTableProps, PricingTableSlots, {}> {}

declare module 'vue' {
  export interface GlobalComponents {
    PricingTable: GlobalComponentConstructor<PricingTable>
  }
}

export default PricingTable
