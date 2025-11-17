import SectionNetwork from '../../blocks/SectionNetwork/SectionNetwork.vue'

export default {
  title: 'Blocks/Rebranding/SectionNetwork',
  component: SectionNetwork,
  tags: ['autodocs'],
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
  ],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Section title displayed at the top'
    },
    descriptionRawMarkdown: {
      control: { type: 'text' },
      description: 'Section description in raw markdown format (supports markdown syntax)'
    },
    overlines: {
      control: { type: 'object' },
      description: 'Array of uppercase overline tags shown on the right of the header'
    },
    items: {
      control: { type: 'object' },
      description: 'Array of network statistics cards displayed below the map'
    }
  }
}

export const Default = {
  args: {
    title: 'Fastest distributed network in the planet',
    descriptionRawMarkdown:
      '**+120 points of presence** across the globe so your data and application are where your users are',
    overlines: ['100+ points of presence', '100tb/s'],
    items: [
      { titleup: 'Better TCO', title: '70%' },
      { titleup: 'Faster Applications', title: '10x' },
      { titleup: 'Availability, backed by an SLA', title: '100%' },
      { titleup: 'User Satisfaction', title: '95%' }
    ]
  }
}
