import { DefineComponent } from 'vue'

export interface PricingToggleProps {
  modelValue?: string
  options?: {
    monthly: string
    annual: string
  }
}

declare const PricingToggle: DefineComponent<PricingToggleProps>

export default PricingToggle
