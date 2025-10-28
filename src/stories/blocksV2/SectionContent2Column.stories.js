import SectionContentImage2Column from '../../blocks/SectionContentImage2Column/SectionContentImage2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionContentImage2Column',
  component: SectionContentImage2Column,
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
    cards: {
      control: 'object',
      description: 'Array of content cards with images to display'
    },
    id: {
      control: 'text',
      description: 'Section ID for navigation'
    },
    gridPattern: {
      control: 'select',
      options: ['square', 'dots'],
      description: 'Pattern type for the grid background'
    }
  }
}

export const Default = {
  args: {
    cards: [
      {
        overline: 'Edge Computing',
        description:
          'Deploy your applications at the edge with unmatched performance, security, and scalability. Join thousands of developers building the future of the web.',
        image: {
          src: 'https://placehold.co/400x300/1a1a1a/f3652b?text=Edge+Computing',
          alt: 'Edge Computing Platform'
        }
      },
      {
        overline: 'Global CDN',
        description:
          'Deliver content faster than ever with our global edge network. Reduce latency and improve user experience across all continents.',
        image: {
          src: 'https://placehold.co/400x300/1a1a1a/f3652b?text=Global+CDN',
          alt: 'Global CDN Network'
        }
      }
    ],
    id: 'section-content-image-2-column',
    gridPattern: 'dots'
  }
}
