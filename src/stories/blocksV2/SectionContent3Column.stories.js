import SectionContent3Column from '../../blocks/SectionContent3Column/SectionContent3Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionContent3Column',
  component: SectionContent3Column,
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
          'SectionContent3Column is a three-column content section with background patterns and decorative corner elements. Perfect for feature showcases and service descriptions.'
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
      description: 'Array of content cards (typically 3)',
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
  name: 'Default Three Column',
  args: {
    cards: [
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      },
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      },
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      }
    ],
    id: 'section-content-3-column',
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
    cards: [
      {
        title: 'Performance',
        description: 'Deploy applications closer to users with our global edge network.'
      },
      {
        title: 'Security',
        description: 'Built-in security features including DDoS protection and WAF.'
      },
      {
        title: 'Scalability',
        description: 'Automatic scaling based on demand with no configuration required.'
      }
    ],
    backgroundPattern: {
      style: 'square',
      size: '24px'
    }
  }
}
