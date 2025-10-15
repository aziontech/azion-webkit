import MigratedClientsCard from '../../components/MigratedClientsCard/MigratedClientsCard.vue'

export default {
  title: 'Components/Rebranding/MigratedClientsCard',
  component: MigratedClientsCard,
  tags: ['autodocs']
}

export const Default = {
  args: {
    text: 'Trusted by leading companies',
    logos: [
      { src: '/logo1.svg', alt: 'Company 1' },
      { src: '/logo2.svg', alt: 'Company 2' },
      { src: '/logo3.svg', alt: 'Company 3' }
    ]
  }
}
