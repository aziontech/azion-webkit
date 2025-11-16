import SectionCardCarousel from '../../blocks/SectionCardCarousel/SectionCardCarousel.vue'

export default {
  title: 'Blocks/Rebranding/SectionCardCarousel',
  component: SectionCardCarousel,
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
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Section title displayed above the carousel'
    },
    cards: {
      control: { type: 'object' },
      description: 'Array of card objects to display in the carousel'
    },
    id: {
      control: { type: 'text' },
      description: 'Optional ID attribute for the section element'
    },
    bottomSpacing: {
      control: { type: 'select' },
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      description: 'Bottom margin spacing for the section'
    }
  }
}

export const Default = {
  args: {
    title: 'Explore Our Solutions',
    cards: [
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Application',
        descriptionRawMarkdown:
          'Build and deploy **modern applications** at the edge with *serverless functions* and real-time data processing for optimal performance.',
        link: '/products/edge-application',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Firewall',
        descriptionRawMarkdown:
          'Protect your applications with **advanced security features** including DDoS protection, WAF, and real-time threat detection.',
        link: '/products/edge-firewall',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Functions',
        descriptionRawMarkdown:
          'Run *serverless code* at the edge to customize and enhance your application behavior with **low latency execution**.',
        link: '/products/edge-functions',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge Storage',
        descriptionRawMarkdown:
          'Store and retrieve data at the edge with **low latency**, high availability, and automatic replication across regions.',
        link: '/products/edge-storage',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Data Stream',
        descriptionRawMarkdown:
          'Collect, process, and analyze **real-time data** from your edge applications with *powerful streaming capabilities*.',
        link: '/products/data-stream',
        linkLabel: 'Learn more'
      },
      {
        tag: 'Product',
        tagIcon: 'pi pi-box',
        title: 'Edge DNS',
        descriptionRawMarkdown:
          'Manage your DNS with **high performance** and reliability at the edge, ensuring *fast resolution times* globally.',
        link: '/products/edge-dns',
        linkLabel: 'Learn more'
      }
    ]
  }
}
