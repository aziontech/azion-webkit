import { DefineComponent, VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from 'primevue/ts-helpers'

export interface PricingPlan {
  /**
   * Name of the pricing plan
   */
  name: string
  /**
   * Button label text
   */
  buttonLabel: string
  /**
   * Button type (primary, secondary, link)
   */
  buttonType?: 'primary' | 'secondary' | 'link'
  /**
   * Whether this plan should be highlighted
   */
  highlighted?: boolean
}

export interface PricingTableHeaderProps {
  /**
   * Array of pricing plans to display
   */
  plans?: PricingPlan[]
  /**
   * Label for the features column
   * @default 'Features'
   */
  featuresLabel?: string
}

export interface PricingTableHeaderSlots {
  /**
   * Custom content for features column
   */
  features(): VNode[]
  /**
   * Custom content for plan columns
   */
  plan(scope: { plan: PricingPlan, index: number }): VNode[]
}

export interface PricingTableHeaderEmits {
  /**
   * Emitted when a plan button is clicked
   * @param plan - The selected plan object
   * @param index - The index of the selected plan
   */
  'plan-selected': [plan: PricingPlan, index: number]
}

declare class PricingTableHeader extends ClassComponent<PricingTableHeaderProps, PricingTableHeaderSlots, PricingTableHeaderEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    PricingTableHeader: GlobalComponentConstructor<PricingTableHeader>
  }
}

export default PricingTableHeader
