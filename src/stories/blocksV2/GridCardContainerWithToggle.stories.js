import GridCardContainerWithToggle from '../../blocks/GridCardContainerWithToggle/GridCardContainerWithToggle.vue'

export default {
  title: 'Blocks/Rebranding/SectionGridCardContainerWithToggle',
  component: GridCardContainerWithToggle,
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
      template: '<div class="bg-neutral-950 py-12"><story /></div>'
    })
  ],
  argTypes: {
    mainLabel: {
      control: { type: 'text' },
      description: 'Label for the main toggle option'
    },
    alternativeLabel: {
      control: { type: 'text' },
      description: 'Label for the alternative toggle option'
    },
    toggleDescription: {
      control: { type: 'text' },
      description: 'Description text displayed below the toggle'
    },
    defaultView: {
      control: { type: 'select' },
      options: ['main', 'alternative'],
      description: 'Default selected view when component loads'
    }
  }
}

export const Default = {
  args: {
    mainLabel: 'Cloud',
    alternativeLabel: 'On-Premises',
    toggleDescription: 'Compare deployment options',
    defaultView: 'main',
    mainSections: [
      {
        id: 'cloud-features',
        title: 'Cloud Features',
        cards: [
          {
            title: 'Edge Functions',
            description: 'Run serverless functions at the edge with ultra-low latency',
            href: '#',
            target: '_self'
          },
          {
            title: 'Edge Application',
            description: 'Deploy applications globally with automatic scaling',
            href: '#',
            target: '_self'
          },
          {
            title: 'Edge Firewall',
            description: 'Protect your applications with advanced security',
            href: '#',
            target: '_self'
          },
          {
            title: 'Edge Caching',
            description: 'Accelerate content delivery worldwide',
            href: '#',
            target: '_self'
          },
          {
            title: 'Edge Analytics',
            description: 'Monitor performance in real-time',
            href: '#',
            target: '_self'
          },
          {
            title: 'Edge Storage',
            description: 'Store and serve content at the edge',
            href: '#',
            target: '_self'
          }
        ]
      },
      {
        id: 'cloud-benefits',
        title: 'Cloud Benefits',
        cards: [
          {
            title: 'Global Scale',
            description: 'Deploy to 100+ edge locations worldwide',
            href: '#',
            target: '_self'
          },
          {
            title: 'Pay as You Go',
            description: 'Only pay for what you use',
            href: '#',
            target: '_self'
          }
        ]
      }
    ],
    alternativeSections: [
      {
        id: 'onprem-features',
        title: 'On-Premises Features',
        cards: [
          {
            title: 'Private Infrastructure',
            description: 'Full control over your infrastructure',
            href: '#',
            target: '_self'
          },
          {
            title: 'Data Sovereignty',
            description: 'Keep your data within your own data centers',
            href: '#',
            target: '_self'
          },
          {
            title: 'Custom Configuration',
            description: 'Tailor the platform to your specific needs',
            href: '#',
            target: '_self'
          },
          {
            title: 'Dedicated Resources',
            description: 'Guaranteed performance and capacity',
            href: '#',
            target: '_self'
          }
        ]
      },
      {
        id: 'onprem-benefits',
        title: 'On-Premises Benefits',
        cards: [
          {
            title: 'Full Control',
            description: 'Complete control over your environment',
            href: '#',
            target: '_self'
          },
          {
            title: 'Compliance',
            description: 'Meet strict regulatory requirements',
            href: '#',
            target: '_self'
          }
        ]
      }
    ]
  }
}

export const WithExternalLinks = {
  args: {
    mainLabel: 'Products',
    alternativeLabel: 'Solutions',
    toggleDescription: 'Explore our offerings',
    defaultView: 'main',
    mainSections: [
      {
        id: 'products',
        title: 'Products',
        cards: [
          {
            title: 'Edge Functions',
            description: 'Serverless compute at the edge',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          },
          {
            title: 'Edge Application',
            description: 'Global application delivery',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          },
          {
            title: 'Edge Firewall',
            description: 'Advanced security protection',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          }
        ]
      }
    ],
    alternativeSections: [
      {
        id: 'solutions',
        title: 'Solutions',
        cards: [
          {
            title: 'E-commerce',
            description: 'Accelerate online stores',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          },
          {
            title: 'Media Streaming',
            description: 'Deliver video content globally',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          },
          {
            title: 'API Gateway',
            description: 'Manage and secure APIs',
            href: 'https://www.azion.com',
            target: '_blank',
            label: 'Learn more'
          }
        ]
      }
    ]
  }
}

export const SingleSection = {
  args: {
    mainLabel: 'Option A',
    alternativeLabel: 'Option B',
    defaultView: 'alternative',
    mainSections: [
      {
        id: 'option-a',
        title: 'Option A Features',
        cards: [
          {
            title: 'Feature 1',
            description: 'Description for feature 1'
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2'
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3'
          }
        ]
      }
    ],
    alternativeSections: [
      {
        id: 'option-b',
        title: 'Option B Features',
        cards: [
          {
            title: 'Feature X',
            description: 'Description for feature X'
          },
          {
            title: 'Feature Y',
            description: 'Description for feature Y'
          },
          {
            title: 'Feature Z',
            description: 'Description for feature Z'
          }
        ]
      }
    ]
  }
}

