import Container from '../../../templates/container'
import SectionHorizontalCardNavigation from '../../../templates/sectionhorizontalcardnavigation'

const config = (args) => ({
  components: { Container,SectionHorizontalCardNavigation },
  setup() {
    return { args }
  },
  template: `
    <Container>
      <SectionHorizontalCardNavigation v-bind="args" />
    </Container>
  `
})

export default {
  title: 'Blocks/Sections/section-horizontal-card-navigation',
  component: SectionHorizontalCardNavigation,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Layout position for content section'
    },
    overline: {
      control: 'text',
      description: 'Small text above the title'
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML tag for the title element'
    },
    title: {
      control: 'text',
      description: 'Main title of the section'
    },
    description: {
      control: 'text',
      description: 'Description text for the section'
    },
    descriptionRawHtml: {
      control: 'text',
      description: 'HTML description (overrides description if provided)'
    },
    buttons: {
      control: 'object',
      description: 'Array of action buttons with link, label, and optional outlined property'
    },
    leftSidebar: {
      control: 'object',
      description: 'Array of navigation menu items for the left sidebar'
    },
    items: {
      control: 'object',
      description: 'Array of content sections, each with titleTag, title, id, description, and cards'
    }
  }
}

// Default story - Complete developer platform example
export const Default = {
  render: config,
  args: {
    position: 'right',
    overline: 'Developer Resources',
    titleTag: 'h1',
    title: 'Explore Azion Platform',
    description: 'Comprehensive documentation and tools to help you build, deploy, and scale your applications at the edge.',
    buttons: [
      {
        link: 'https://console.azion.com',
        label: 'Access Console'
      },
      {
        link: 'https://www.azion.com/contact/',
        label: 'Contact Sales',
        outlined: true
      }
    ],
    leftSidebar: [
      {
        label: 'Getting Started',
        link: '#getting-started'
      },
      {
        label: 'Products',
        link: '#products'
      },
      {
        label: 'Solutions',
        link: '#solutions'
      },
      {
        label: 'Developer Tools',
        link: '#developer-tools'
      },
      {
        label: 'Support',
        link: '#support'
      }
    ],
    items: [
      {
        titleTag: 'h2',
        title: 'Start Here',
        id: 'getting-started',
        description: 'Get up and running with Azion in minutes',
        cards: [
          {
            title: 'Quick Start Guide',
            description: 'Get up and running with Azion in minutes',
            link: 'https://www.azion.com/docs/quickstart/',
            action: { label: '' }
          },
          {
            title: 'Documentation',
            description: 'Complete guides and API reference',
            link: 'https://www.azion.com/docs/',
            action: { label: '' }
          },
          {
            title: 'First Steps Tutorial',
            description: 'Learn the basics with hands-on examples',
            link: 'https://www.azion.com/tutorials/first-steps/',
            action: { label: '' }
          },
          {
            title: 'SDK & CLI',
            description: 'Development tools and command line interface',
            link: 'https://www.azion.com/docs/cli/',
            action: { label: '' }
          }
        ]
      },
      {
        titleTag: 'h2',
        title: 'Core Platform',
        id: 'products',
        description: 'Core platform services for building and deploying applications at the edge',
        cards: [
          {
            title: 'Edge Application',
            description: 'Build and deploy applications at the edge',
            link: 'https://www.azion.com/products/edge-application/',
            action: { label: '' }
          },
          {
            title: 'Edge Functions',
            description: 'Run serverless functions at the edge',
            link: 'https://www.azion.com/products/edge-functions/',
            action: { label: '' }
          },
          {
            title: 'Edge Firewall',
            description: 'Advanced security and protection',
            link: 'https://www.azion.com/products/edge-firewall/',
            action: { label: '' }
          },
          {
            title: 'Data Stream',
            description: 'Real-time data analytics and monitoring',
            link: 'https://www.azion.com/products/data-stream/',
            action: { label: '' }
          }
        ]
      }
    ]
  }
}

// Left position layout
export const LeftPosition = {
  render: config,
  args: {
    position: 'left',
    overline: 'Resources',
    titleTag: 'h1',
    title: 'Development Resources',
    description: 'Tools and documentation for developers.',
    buttons: [
      {
        link: '#',
        label: 'View All',
        outlined: true
      }
    ],
    leftSidebar: [
      {
        label: 'API',
        link: '#api'
      },
      {
        label: 'SDKs',
        link: '#sdks'
      }
    ],
    items: [
      {
        titleTag: 'h2',
        title: 'Developer Tools',
        id: 'api',
        description: 'APIs and SDKs for building applications',
        cards: [
          {
            title: 'REST API',
            description: 'Complete REST API reference',
            link: '#',
            action: { label: '' }
          },
          {
            title: 'JavaScript SDK',
            description: 'JavaScript SDK for web applications',
            link: '#',
            action: { label: '' }
          }
        ]
      }
    ]
  }
}

// With HTML description
export const WithHtmlDescription = {
  render: config,
  args: {
    position: 'right',
    overline: 'Enhanced Content',
    titleTag: 'h1',
    title: 'Rich Content Example',
    descriptionRawHtml: '<p>This example shows <strong>HTML formatting</strong> in descriptions with <em>emphasis</em> and <a href="#">links</a>.</p>',
    buttons: [
      {
        link: '#',
        label: 'Learn More'
      }
    ],
    leftSidebar: [
      {
        label: 'Overview',
        link: '#overview'
      }
    ],
    items: [
      {
        titleTag: 'h2',
        title: 'Overview',
        id: 'overview',
        description: 'Content sections can include rich formatting and multiple interaction patterns.',
        cards: [
          {
            title: 'Rich Text Support',
            description: 'Supports HTML content in descriptions',
            link: '#',
            action: { label: '' }
          },
          {
            title: 'Interactive Elements',
            description: 'Clickable cards with navigation',
            link: '#',
            action: { label: '' }
          }
        ]
      }
    ]
  }
}

