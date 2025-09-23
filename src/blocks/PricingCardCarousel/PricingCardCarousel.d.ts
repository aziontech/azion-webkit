import { DefineComponent } from 'vue'

export interface PricingCardData {
  popular?: boolean
  title: string
  subtitle?: string
  features: Array<{
    icon: string
    label: string
  }>
  monthlyPrice: string
  annualPrice?: string
  currentPeriod?: 'monthly' | 'annual'
  savings?: string
  buttonLabel: string
}

export interface PricingCardCarouselProps {
  cards: PricingCardData[]
}

declare const PricingCardCarousel: DefineComponent<
  PricingCardCarouselProps,
  {},
  {},
  {},
  {},
  {},
  {},
  {
    'card-click': (payload: { card: PricingCardData; index: number }) => void
  }
>

export default PricingCardCarousel
