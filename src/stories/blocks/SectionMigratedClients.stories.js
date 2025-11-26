import SectionMigratedClients from '../../blocks/SectionMigratedClients'
import { migratedClientsData } from '../../mock/migratedClients'

export default {
  title: 'Blocks/Rebranding/SectionMigratedClients',
  component: SectionMigratedClients,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  argTypes: {
    cards: {
      description:
        'Array of configuration objects for MigratedClientsCard. Only the first two items are rendered.',
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
  cards: [migratedClientsData.firstCard, migratedClientsData.secondCard]
}
