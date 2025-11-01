import SystemStatus from '../../components/SystemStatus/SystemStatus.vue'

export default {
  title: 'Components/Rebranding/SystemStatus',
  component: SystemStatus,
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
  args: {
    status: 'operational',
    message: 'All systems operational'
  }
}
