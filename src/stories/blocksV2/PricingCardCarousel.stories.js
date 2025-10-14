import PricingCardCarousel from '../../blocks/PricingCardCarousel/PricingCardCarousel.vue'

export default {
  title: 'Blocks/Rebranding/PricingCardCarousel',
  component: PricingCardCarousel,
  tags: ['autodocs']
}

export const Default = {
  args: {
    cards: [
      {
        title: 'Free',
        price: '$0',
        features: ['1 Project', '10GB Storage', 'Community Support']
      },
      {
        title: 'Pro',
        price: '$29',
        features: ['Unlimited Projects', '100GB Storage', 'Priority Support']
      },
      {
        title: 'Enterprise',
        price: 'Custom',
        features: ['Custom Solutions', 'Unlimited Storage', 'Dedicated Support']
      }
    ]
  }
}
