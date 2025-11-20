import SectionContent2Column from '../../blocks/SectionContent2Column/SectionContent2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionContent2Column',
  component: SectionContent2Column,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    },
    docs: {
      description: {
        component:
          'SectionContent2Column is a two-column content section with alternating text and image cards, featuring background patterns and decorative elements.'
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    id: {
      control: 'text',
      description: 'Optional HTML id attribute'
    },
    cards: {
      control: 'object',
      description: 'Array of content cards (typically 2)',
      table: {
        type: { summary: 'ContentCard[]' }
      }
    },
    bottomSpacing: {
      control: 'select',
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      description: 'Bottom margin spacing class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mb-24' }
      }
    },
    backgroundPattern: {
      control: 'object',
      description: 'Background pattern configuration',
      table: {
        type: { summary: '{ style: string, size: string }' },
        defaultValue: { summary: "{ style: 'dots', size: '48px' }" }
      }
    }
  }
}

export const Default = {
  name: 'Default Two Column',
  args: {
    id: 'section-content-2col-default',
    cards: [
      {
        overline: 'Performance',
        description:
          'Deploy applications closer to users with our **global edge network** for improved performance and reduced latency.',
        image: {
          src: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Performance',
          alt: 'Performance illustration'
        }
      },
      {
        overline: 'Security',
        description:
          'Built-in security features including **DDoS protection**, Web Application Firewall, and SSL certificates.',
        image: {
          src: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Security',
          alt: 'Security illustration'
        }
      }
    ],
    bottomSpacing: 'mb-24',
    backgroundPattern: {
      style: 'dots',
      size: '48px'
    }
  }
}

export const WithSquarePattern = {
  name: 'With Square Pattern',
  args: {
    id: 'section-content-2col-square',
    cards: [
      {
        overline: 'Edge Computing',
        description: 'Experience the power of edge computing with our distributed infrastructure.',
        image: {
          src: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Edge',
          alt: 'Edge computing illustration'
        }
      },
      {
        overline: 'Scalability',
        description: 'Automatic scaling based on demand with no configuration required.',
        image: {
          src: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Scale',
          alt: 'Scalability illustration'
        }
      }
    ],
    backgroundPattern: {
      style: 'square',
      size: '24px'
    }
  }
}
