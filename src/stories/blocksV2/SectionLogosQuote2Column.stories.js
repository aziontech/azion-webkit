import SectionLogosQuote2Column from '../../blocks/SectionLogosQuote2Column/SectionLogosQuote2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionLogosQuote2Column',
  component: SectionLogosQuote2Column,
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
  ]
}

export const Default = {
  name: '50x50',
  args: {
    title: 'Trusted by Industry Leaders',
    link: '/customers',
    linkLabel: 'View All Customers',
    clients: [
      [
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+1', alt: 'Client 1' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+2', alt: 'Client 2' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+3', alt: 'Client 3' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+4', alt: 'Client 4' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+5', alt: 'Client 5' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+6', alt: 'Client 6' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+7', alt: 'Client 7' },
        { logo: 'https://placehold.co/60x60/1a1a1a/ffffff?text=Client+8', alt: 'Client 8' }
      ]
    ],
    quote:
      'Azion has transformed how we deliver content globally. The edge platform is incredibly fast and reliable, making it easy to scale our applications without worrying about infrastructure.',
    author: 'John Smith',
    role: 'CTO at TechCorp',
    logo: 'https://placehold.co/200x60/1a1a1a/ffffff?text=Company+Logo',
    type: '50x50'
  }
}

export const SevenZeroByThirty = {
  name: '70x30',
  args: {
    title: 'Trusted by Industry Leaders',
    link: '/customers',
    linkLabel: 'View All Customers',
    clients: [{ image: 'https://placehold.co/300x400/1a1a1a/ffffff?text=Image', alt: 'Client 1' }],
    quote:
      'Azion has transformed how we deliver content globally. The edge platform is incredibly fast and reliable, making it easy to scale our applications without worrying about infrastructure.',
    author: 'John Smith',
    role: 'CTO at TechCorp',
    logo: 'https://placehold.co/200x60/1a1a1a/ffffff?text=Company+Logo',
    type: '70x30'
  }
}
