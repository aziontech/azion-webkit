import Hero2Column from '../../blocks/Hero2Column/Hero2Column.vue'

export default {
  title: 'Blocks/Rebranding/Hero2Column',
  component: Hero2Column,
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
          'Hero2Column is a two-column hero section with background patterns, markdown support, and flexible button configurations. Perfect for landing pages and product showcases.'
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
      description: 'Optional HTML id attribute for the section element',
      table: {
        type: { summary: 'string' }
      }
    },
    overline: {
      control: 'text',
      description: 'Small text displayed above the title',
      table: {
        type: { summary: 'string' }
      }
    },
    title: {
      control: 'text',
      description: 'Main hero title',
      table: {
        type: { summary: 'string' }
      }
    },
    descriptionRawMarkdown: {
      control: 'text',
      description: 'Description text in markdown format',
      table: {
        type: { summary: 'string' }
      }
    },
    buttons: {
      control: 'object',
      description: 'Array of button configurations (max 3 displayed)',
      table: {
        type: { summary: 'Hero2ColumnButtonProps[]' }
      }
    },
    image: {
      control: 'text',
      description: 'Hero image URL',
      table: {
        type: { summary: 'string' }
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
  name: 'Default Hero',
  args: {
    id: 'hero-default',
    overline: 'Edge Computing',
    title: 'Build faster with Azion',
    descriptionRawMarkdown:
      'The edge platform that **accelerates** your applications and reduces latency by up to *90%*. Deploy globally in minutes.',
    buttons: [
      {
        label: 'Get Started',
        type: 'primary',
        href: 'https://console.azion.com/signup',
        icon: 'pi pi-chevron-right',
        theme: 'light'
      },
      {
        label: 'Learn More',
        type: 'secondary',
        href: 'https://www.azion.com/docs'
      }
    ],
    image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Hero+Image',
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
    id: 'hero-square',
    title: 'Enterprise Solutions',
    descriptionRawMarkdown:
      'Scale your infrastructure with confidence. Built for **enterprise** needs with global edge network.',
    buttons: [
      {
        label: 'Contact Sales',
        type: 'primary',
        href: 'https://www.azion.com/contact',
        icon: 'pi pi-chevron-right'
      }
    ],
    image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Enterprise',
    backgroundPattern: {
      style: 'square',
      size: '24px'
    }
  }
}

export const Minimal = {
  name: 'Minimal Hero',
  args: {
    id: 'hero-minimal',
    title: 'Welcome to Azion',
    descriptionRawMarkdown: 'Experience the power of **edge computing**.',
    bottomSpacing: 'mb-12',
    backgroundPattern: {
      style: 'dots',
      size: '48px'
    }
  }
}

export const ThreeButtons = {
  name: 'Three Buttons',
  args: {
    id: 'hero-three-buttons',
    title: 'Multiple Actions',
    descriptionRawMarkdown:
      'Choose your path. **Start building** today or explore our documentation.',
    buttons: [
      {
        label: 'Get Started',
        type: 'primary',
        href: '/signup',
        icon: 'pi pi-chevron-right'
      },
      {
        label: 'View Docs',
        type: 'secondary',
        href: '/docs'
      },
      {
        label: 'Learn More',
        type: 'link',
        href: '/about'
      }
    ],
    image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Actions',
    backgroundPattern: {
      style: 'dots',
      size: '48px'
    }
  }
}
