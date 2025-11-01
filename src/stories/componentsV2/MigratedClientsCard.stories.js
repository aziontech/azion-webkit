import MigratedClientsCard from '../../components/MigratedClientsCard/MigratedClientsCard.vue'
import { migratedClientsData } from '../../mock/migratedClients'

export default {
  title: 'Components/Rebranding/MigratedClientsCard',
  component: MigratedClientsCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 p-6"><story /></div>'
    })
  ]
}

export const Default = {
  args: migratedClientsData.firstCard
}
