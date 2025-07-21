import Container from '../../../templates/container'
import SectionHorizontalCardNavigation from '../../../templates/sectionhorizontalcardnavigation'

const config = (args) => ({
  components: { Container, SectionHorizontalCardNavigation },
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
    leftSidebar: {
      control: 'object',
      description: 'Array of navigation menu items for the left sidebar'
    },
    items: {
      control: 'object',
      description:
        'Array of content sections, each with titleTag, title, id, description, and cards'
    }
  }
}

// Default story - Complete developer platform example
export const Default = {
  render: config,
  args: {
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

export const WithHtmlDescription = {
  render: config,
  args: {
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
        descriptionRawHtml:
          '<p>Content sections can include rich formatting and multiple interaction patterns. <a href="https://www.azion.com/">Access Link</a>.</p>',
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
