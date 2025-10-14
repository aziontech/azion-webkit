import PricingCard from '../../components/PricingCard/PricingCard.vue'

export default {
  title: 'Components/Rebranding/PricingCard',
  component: PricingCard,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Pro Plan',
    price: '$29',
    period: '/month',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced analytics'
    ],
    buttonLabel: 'Get Started'
  }
}
