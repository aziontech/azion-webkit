import SectionImageContent2Column from '../../blocks/SectionImageContent2Column/SectionImageContent2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionImageContent2Column',
  component: SectionImageContent2Column,
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
          'SectionImageContent2Column is a two-column section combining text content with images, featuring background patterns, flexible layouts, and markdown support.'
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
    title: {
      control: 'text',
      description: 'Section title text'
    },
    descriptionRawMarkdown: {
      control: 'text',
      description: 'Description text in markdown format'
    },
    image: {
      control: 'text',
      description: 'Image URL (required)'
    },
    alt: {
      control: 'text',
      description: 'Image alt text'
    },
    layout: {
      control: 'select',
      options: ['50/50', '30/70'],
      description: 'Layout distribution',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50/50' }
      }
    },
    inverted: {
      control: 'boolean',
      description: 'Reverse order (image first)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
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
        defaultValue: { summary: "{ style: 'dots', size: '24px' }" }
      }
    }
  }
}

export const Default = {
  name: 'Default 50/50 Layout',
  args: {
    title: 'Edge Computing Platform',
    descriptionRawMarkdown:
      'Deploy applications **closer to users** with our global edge network. Reduce latency by up to *90%* and improve user experience globally.',
    image: 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Edge+Platform',
    alt: 'Edge computing platform',
    layout: '50/50',
    inverted: false,
    bottomSpacing: 'mb-24',
    backgroundPattern: {
      style: 'dots',
      size: '24px'
    }
  }
}

export const ThirtySeventy = {
  name: '30/70 Layout',
  args: {
    title: 'Global Infrastructure',
    descriptionRawMarkdown:
      'Our network spans **200+ locations** worldwide, bringing your applications closer to users everywhere.',
    image: 'https://via.placeholder.com/1200x800/1a1a1a/ffffff?text=Global+Network',
    alt: 'Global network map',
    layout: '30/70',
    inverted: false,
    backgroundPattern: {
      style: 'dots',
      size: '24px'
    }
  }
}

export const Inverted = {
  name: 'Inverted Order',
  args: {
    title: 'Enterprise Security',
    descriptionRawMarkdown:
      'Built-in security features for **enterprise needs**. DDoS protection, WAF, and SSL certificates included.',
    image: 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Security',
    alt: 'Security features',
    layout: '50/50',
    inverted: true,
    backgroundPattern: {
      style: 'square',
      size: '48px'
    }
  }
}
