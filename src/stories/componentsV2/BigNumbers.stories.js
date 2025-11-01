import BigNumbers from '../../components/bignumbers/BigNumbers.vue'

export default {
  title: 'Components/Rebranding/BigNumbers',
  component: BigNumbers,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of stat objects with title, description, and icon',
      table: {
        type: { summary: 'Array<{title: string, description: string, icon: string}>' },
        required: true
      }
    },
    justify: {
      control: { type: 'select' },
      options: ['center', 'start'],
      description: 'Content justification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' }
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

export const Default = {
  args: {
    items: [
      {
        title: '99.9%',
        description: 'Uptime Guarantee',
        icon: 'pi pi-check-circle'
      },
      {
        title: '150+',
        description: 'Edge Locations Worldwide',
        icon: 'pi pi-globe'
      },
      {
        title: '< 20ms',
        description: 'Average Latency',
        icon: 'pi pi-bolt'
      }
    ],
    justify: 'center'
  }
}
