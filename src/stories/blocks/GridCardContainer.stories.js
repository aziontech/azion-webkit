import GridCardContainer from '../../blocks/GridCardContainer/GridCardContainer.vue'

export default {
  title: 'Blocks/GridCardContainer',
  component: GridCardContainer,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title text displayed above the grid'
    },
    cards: {
      control: { type: 'object' },
      description: 'Array of card objects to display in the grid'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A grid container that displays multiple cards in a responsive layout with a title above.'
      }
    }
  }
}

const Template = (args) => ({
  components: { GridCardContainer },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-6">
      <div class="max-w-6xl mx-auto">
        <GridCardContainer v-bind="args" />
      </div>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Featured Solutions',
  cards: [
    {
      title: 'Edge Computing',
      description: 'Deploy applications closer to your users with our global edge network.',
      href: '#',
      cta: 'Learn more'
    },
    {
      title: 'Web Security',
      description: 'Protect your applications with advanced security features and DDoS protection.',
      href: '#',
      cta: 'Get started'
    },
    {
      title: 'Content Delivery',
      description: 'Accelerate content delivery with our high-performance CDN infrastructure.',
      href: '#',
      cta: 'Explore'
    },
    {
      title: 'API Management',
      description: 'Manage and secure your APIs with comprehensive monitoring and analytics.',
      href: '#',
      cta: 'Discover'
    },
    {
      title: 'Serverless Functions',
      description: 'Run code without managing servers with our edge computing platform.',
      href: '#',
      cta: 'Try now'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor your applications with real-time insights and performance metrics.',
      href: '#',
      cta: 'View demo'
    }
  ]
}

export const WithExternalLinks = Template.bind({})
WithExternalLinks.args = {
  title: 'External Resources',
  cards: [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references for developers.',
      href: 'https://docs.azion.com',
      target: '_blank',
      cta: 'Read docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get support from our community.',
      href: 'https://community.azion.com',
      target: '_blank',
      cta: 'Join forum'
    },
    {
      title: 'GitHub Repository',
      description: 'Explore our open source projects and contribute to the codebase.',
      href: 'https://github.com/aziontech',
      target: '_blank',
      cta: 'View code'
    },
    {
      title: 'Blog',
      description: 'Latest insights, tutorials, and updates from our engineering team.',
      href: 'https://blog.azion.com',
      target: '_blank',
      cta: 'Read blog'
    },
    {
      title: 'Status Page',
      description: 'Real-time status updates for all Azion services and infrastructure.',
      href: 'https://status.azion.com',
      target: '_blank',
      cta: 'Check status'
    },
    {
      title: 'Support Center',
      description: 'Get help with your account, billing, and technical issues.',
      href: 'https://support.azion.com',
      target: '_blank',
      cta: 'Get help'
    }
  ]
}
