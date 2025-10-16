import SectionMigratedClients from '../../blocks/SectionMigratedClients'
import { migratedClientsData } from '../../mock/migratedClients'

export default {
  title: 'Blocks/Rebranding/SectionMigratedClients',
  component: SectionMigratedClients,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' }
      ]
    }
  },
  argTypes: {
    firstCard: {
      description: 'Configuration object for the first MigratedClientsCard',
      control: 'object'
    },
    secondCard: {
      description: 'Configuration object for the second MigratedClientsCard',
      control: 'object'
    }
  }
}

const Template = (args) => ({
  components: { SectionMigratedClients },
  setup() {
    return { args }
  },
  template: '<SectionMigratedClients v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  firstCard: migratedClientsData.firstCard,
  secondCard: migratedClientsData.secondCard
}
