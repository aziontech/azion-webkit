import SectionCardCarousel from '../../blocks/SectionCardCarousel/SectionCardCarousel.vue'

export default {
  title: 'Blocks/Rebranding/SectionCardCarousel',
  component: SectionCardCarousel,
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
    title: 'Explore Our Solutions',
    cards: [
      {
        icon: 'pi pi-bolt',
        title: 'Edge Application',
        description: 'Build and deploy modern applications at the edge with serverless functions and real-time data processing for optimal performance.',
        link: '/products/edge-application',
        linkLabel: 'Learn more'
      },
      {
        icon: 'pi pi-shield',
        title: 'Edge Firewall',
        description: 'Protect your applications with advanced security features including DDoS protection, WAF, and real-time threat detection.',
        link: '/products/edge-firewall',
        linkLabel: 'Learn more'
      },
      {
        icon: 'pi pi-code',
        title: 'Edge Functions',
        description: 'Run serverless code at the edge to customize and enhance your application behavior with low latency execution.',
        link: '/products/edge-functions',
        linkLabel: 'Learn more'
      },
      {
        icon: 'pi pi-database',
        title: 'Edge Storage',
        description: 'Store and retrieve data at the edge with low latency, high availability, and automatic replication across regions.',
        link: '/products/edge-storage',
        linkLabel: 'Learn more'
      },
      {
        icon: 'pi pi-chart-line',
        title: 'Data Stream',
        description: 'Collect, process, and analyze real-time data from your edge applications with powerful streaming capabilities.',
        link: '/products/data-stream',
        linkLabel: 'Learn more'
      },
      {
        icon: 'pi pi-globe',
        title: 'Edge DNS',
        description: 'Manage your DNS with high performance and reliability at the edge, ensuring fast resolution times globally.',
        link: '/products/edge-dns',
        linkLabel: 'Learn more'
      }
    ]
  }
}

export const WithoutLinks = {
  args: {
    title: 'Key Features',
    cards: [
      {
        icon: 'pi pi-clock',
        title: 'Real-time Performance',
        description: 'Experience ultra-low latency with our globally distributed edge network that brings content closer to your users.'
      },
      {
        icon: 'pi pi-lock',
        title: 'Enterprise Security',
        description: 'Built-in security features protect your applications from threats while maintaining optimal performance.'
      },
      {
        icon: 'pi pi-users',
        title: 'Developer Experience',
        description: 'Powerful tools and APIs designed to streamline your development workflow and boost productivity.'
      },
      {
        icon: 'pi pi-chart-bar',
        title: 'Advanced Analytics',
        description: 'Comprehensive insights into your application performance with real-time monitoring and detailed reports.'
      }
    ]
  }
}

export const MinimalCards = {
  args: {
    title: 'Why Choose Us',
    cards: [
      {
        icon: 'pi pi-check-circle',
        title: 'Reliability',
        description: '99.99% uptime SLA with automatic failover and redundancy across multiple regions.'
      },
      {
        icon: 'pi pi-star',
        title: 'Performance',
        description: 'Lightning-fast content delivery with intelligent caching and optimization.'
      },
      {
        icon: 'pi pi-heart',
        title: 'Support',
        description: '24/7 expert support team ready to help you succeed with dedicated assistance.'
      }
    ]
  }
}
