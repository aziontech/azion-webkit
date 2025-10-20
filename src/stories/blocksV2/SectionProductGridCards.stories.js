import SectionProductGridCards from '../../blocks/SectionProductGridCards/SectionProductGridCards.vue'

export default {
  title: 'Blocks/Rebranding/SectionProductGridCards',
  component: SectionProductGridCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' }
      ]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

export const Default = {
  args: {
    title: 'Our Products',
    description: 'Explore our comprehensive suite of edge computing solutions designed to accelerate your applications and enhance user experience.',
    link: '/products',
    linkLabel: 'View All Products',
    cards: [
      {
        title: 'Edge Application',
        description: 'Build and deploy modern applications at the edge with serverless functions and real-time data processing.',
        href: '/products/edge-application',
        label: 'Learn More'
      },
      {
        title: 'Edge Firewall',
        description: 'Protect your applications with advanced security features including DDoS protection and WAF.',
        href: '/products/edge-firewall',
        label: 'Learn More'
      },
      {
        title: 'Edge Functions',
        description: 'Run serverless code at the edge to customize and enhance your application behavior.',
        href: '/products/edge-functions',
        label: 'Learn More'
      },
      {
        title: 'Data Stream',
        description: 'Collect, process, and analyze real-time data from your edge applications.',
        href: '/products/data-stream',
        label: 'Learn More'
      },
      {
        title: 'Edge Storage',
        description: 'Store and retrieve data at the edge with low latency and high availability.',
        href: '/products/edge-storage',
        label: 'Learn More'
      },
      {
        title: 'Edge DNS',
        description: 'Manage your DNS with high performance and reliability at the edge.',
        href: '/products/edge-dns',
        label: 'Learn More'
      }
    ]
  }
}

export const WithoutLink = {
  args: {
    title: 'Platform Features',
    description: 'Discover the powerful features that make our platform the best choice for edge computing.',
    cards: [
      {
        title: 'Global Coverage',
        description: 'Deploy your applications across our worldwide network of edge locations for optimal performance.',
        href: '/features/global-coverage',
        label: 'Explore'
      },
      {
        title: 'Real-time Analytics',
        description: 'Monitor your applications with detailed analytics and insights in real-time.',
        href: '/features/analytics',
        label: 'Explore'
      },
      {
        title: 'Developer Tools',
        description: 'Powerful CLI, APIs, and SDKs to streamline your development workflow.',
        href: '/features/developer-tools',
        label: 'Explore'
      }
    ]
  }
}

export const TwoColumns = {
  args: {
    title: 'Solutions',
    description: 'Tailored solutions for your specific use cases.',
    link: '/solutions',
    linkLabel: 'All Solutions',
    cards: [
      {
        title: 'E-commerce',
        description: 'Deliver fast and secure shopping experiences with edge computing technology.',
        href: '/solutions/ecommerce',
        label: 'View Solution'
      },
      {
        title: 'Media & Entertainment',
        description: 'Stream high-quality video content with minimal latency and maximum reliability.',
        href: '/solutions/media',
        label: 'View Solution'
      }
    ]
  }
}

export const WithExternalLinks = {
  args: {
    title: 'Resources',
    description: 'Learn more about edge computing and how to get the most out of our platform.',
    cards: [
      {
        title: 'Documentation',
        description: 'Comprehensive guides and API references to help you build with Azion.',
        href: 'https://docs.azion.com',
        label: 'Read Docs',
        target: '_blank'
      },
      {
        title: 'Blog',
        description: 'Stay updated with the latest news, tutorials, and best practices.',
        href: 'https://blog.azion.com',
        label: 'Visit Blog',
        target: '_blank'
      },
      {
        title: 'Community',
        description: 'Join our community of developers and share your knowledge.',
        href: 'https://community.azion.com',
        label: 'Join Now',
        target: '_blank'
      }
    ]
  }
}
