  import { DefineComponent, VNode } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from 'primevue/ts-helpers'

export interface PricingFeature {
  /**
   * Name of the feature
   */
  name: string
  /**
   * Array of values for each plan (can be string, boolean, or number)
   */
  values: (string | boolean | number)[]
}

export interface PricingSection {
  /**
   * Category label (e.g., "AZION WEB PLATFORM")
   */
  category: string
  /**
   * Section title
   */
  title: string
  /**
   * Section description
   */
  description: string
  /**
   * Array of features in this section
   */
  features: PricingFeature[]
}

export interface PricingTableContentProps {
  /**
   * Array of pricing sections to display
   */
  sections?: PricingSection[]
}

export interface PricingTableContentSlots {
  /**
   * Custom content for section header
   */
  sectionHeader(scope: { section: PricingSection, index: number }): VNode[]
  /**
   * Custom content for feature row
   */
  featureRow(scope: { feature: PricingFeature, section: PricingSection, featureIndex: number, sectionIndex: number }): VNode[]
  /**
   * Custom content for feature value cell
   */
  featureValue(scope: { value: string | boolean | number, feature: PricingFeature, planIndex: number }): VNode[]
}

declare class PricingTableContent extends ClassComponent<PricingTableContentProps, PricingTableContentSlots, {}> {}

declare module 'vue' {
  export interface GlobalComponents {
    PricingTableContent: GlobalComponentConstructor<PricingTableContent>
  }
}

export default PricingTableContent
