import { DefineComponent } from 'vue'
import { ClassComponent, GlobalComponentConstructor } from 'primevue/core'

export interface PricingCardProps {
  /**
   * Title of the pricing card
   */
  title: string
  /**
   * Subtitle text displayed below the title
   */
  subtitle?: string
  /**
   * Description text displayed below the subtitle
   */
  description?: string
  /**
   * Array of feature strings to display with checkmarks
   */
  features?: string[]
  /**
   * Price value (can be string or number)
   */
  price: string | number
  /**
   * Label displayed above the price
   * @default 'START AT'
   */
  priceLabel?: string
  /**
   * Period text displayed after the price
   * @default '/MO'
   */
  pricePeriod?: string
  /**
   * Text for the call-to-action button
   * @default 'START NOW'
   */
  buttonLabel?: string
  /**
   * Button variant style
   * @default 'secondary'
   */
  buttonVariant?: 'primary' | 'secondary'
  /**
   * Additional information text displayed below the button
   */
  additionalInfo?: string
  /**
   * Whether the card should be highlighted with primary color border
   * @default false
   */
  highlighted?: boolean
}

export interface PricingCardEmits {
  /**
   * Emitted when the CTA button is clicked
   * @param event - Button click event data containing title and price
   */
  'button-click': (event: { title: string; price: string | number }) => void
}

declare class PricingCard extends ClassComponent<PricingCardProps, {}, {}, {}, PricingCardEmits> {}

declare module 'vue' {
  export interface GlobalComponents {
    PricingCard: GlobalComponentConstructor<PricingCard>
  }
}

export default PricingCard
