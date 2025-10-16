import MigratedClientsCard from '../../components/MigratedClientsCard/MigratedClientsCard.vue'
import { migratedClientsData } from '../../mock/migratedClients'

export default {
  title: 'Components/Rebranding/MigratedClientsCard',
  component: MigratedClientsCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' }
      ]
    }
  }
}

export const Default = {
  args: migratedClientsData.firstCard
}
