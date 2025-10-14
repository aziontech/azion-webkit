import AccordionGallery from './AccordionGallery.vue'

export default {
  title: 'Components/AccordionGallery',
  component: AccordionGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of items with title, points, and backgroundImage'
    },
    autoPlay: {
      control: 'boolean',
      description: 'Enable auto-play functionality'
    },
    autoPlayInterval: {
      control: 'number',
      description: 'Auto-play interval in milliseconds'
    },
    showProgress: {
      control: 'boolean',
      description: 'Show progress bar on active item'
    }
  }
}

const mockItems = [
  {
    title: 'Build applications in a modern infrastructure',
    points: [
      'Deploy directly from Github or start with a template',
      'Integrated CI/CD',
      'Use the best Dev Tools (API, CLI, MCP)'
    ],
    backgroundImage: 'https://placehold.co/1200x800/1a1a1a/666?text=Background+1'
  },
  {
    title: 'Develop and test at the edge',
    points: [
      'Real-time preview environments',
      'Edge computing capabilities',
      'Instant global deployment'
    ],
    backgroundImage: 'https://placehold.co/1200x800/1a1a1a/666?text=Background+2'
  },
  {
    title: 'Monitor and optimize performance',
    points: [
      'Real-time analytics dashboard',
      'Performance metrics and insights',
      'Automated optimization suggestions'
    ],
    backgroundImage: 'https://placehold.co/1200x800/1a1a1a/666?text=Background+3'
  },
  {
    title: 'Scale globally with confidence',
    points: [
      'Automatic scaling based on demand',
      'Global CDN distribution',
      'Enterprise-grade security'
    ],
    backgroundImage: 'https://placehold.co/1200x800/1a1a1a/666?text=Background+4'
  }
]

export const Default = {
  args: {
    items: mockItems,
    autoPlay: true,
    autoPlayInterval: 5000,
    showProgress: true
  }
}
