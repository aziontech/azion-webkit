import PricingTable from '../../blocks/PricingTable/PricingTable.vue'

export default {
  title: 'Blocks/Rebranding/PricingTable',
  component: PricingTable,
  tags: ['autodocs']
}

export const Default = {
  args: {
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Basic features', 'Community support']
      },
      {
        name: 'Pro',
        price: '$29',
        features: ['All features', 'Priority support', 'Advanced analytics']
      }
    ]
  }
}
