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
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Application',
        description: 'Build and deploy modern applications at the edge with serverless functions and real-time data processing for optimal performance.',
        link: '/products/edge-application',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Firewall',
        description: 'Protect your applications with advanced security features including DDoS protection, WAF, and real-time threat detection.',
        link: '/products/edge-firewall',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Functions',
        description: 'Run serverless code at the edge to customize and enhance your application behavior with low latency execution.',
        link: '/products/edge-functions',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Storage',
        description: 'Store and retrieve data at the edge with low latency, high availability, and automatic replication across regions.',
        link: '/products/edge-storage',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Data Stream',
        description: 'Collect, process, and analyze real-time data from your edge applications with powerful streaming capabilities.',
        link: '/products/data-stream',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
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
        tag: 'Feature',
        tagIcon: 'pi pi-star',
        title: 'Real-time Performance',
        description: 'Experience ultra-low latency with our globally distributed edge network that brings content closer to your users.'
      },
      {
        tag: 'Feature',
        tagIcon: 'pi pi-star',
        title: 'Enterprise Security',
        description: 'Built-in security features protect your applications from threats while maintaining optimal performance.'
      },
      {
        tag: 'Feature',
        tagIcon: 'pi pi-star',
        title: 'Developer Experience',
        description: 'Powerful tools and APIs designed to streamline your development workflow and boost productivity.'
      },
      {
        tag: 'Feature',
        tagIcon: 'pi pi-star',
        title: 'Advanced Analytics',
        description: 'Comprehensive insights into your application performance with real-time monitoring and detailed reports.'
      }
    ]
  }
}

export const WithDifferentTags = {
  args: {
    title: 'Solutions',
    cards: [
      {
        tag: 'E-commerce',
        tagIcon: 'pi pi-shopping-cart',
        title: 'Fast Checkout',
        description: 'Optimize your checkout process with edge computing for lightning-fast transactions and reduced cart abandonment.'
      },
      {
        tag: 'Media',
        tagIcon: 'pi pi-play',
        title: 'Video Streaming',
        description: 'Deliver high-quality video content with minimal buffering and adaptive bitrate streaming at the edge.'
      },
      {
        tag: 'Gaming',
        tagIcon: 'pi pi-discord',
        title: 'Low Latency',
        description: 'Provide seamless gaming experiences with ultra-low latency and real-time multiplayer capabilities.'
      }
    ]
  }
}
