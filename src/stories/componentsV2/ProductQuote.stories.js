import ProductQuote from '../../components/ProductQuote/ProductQuote.vue'

export default {
  title: 'Components/Rebranding/ProductQuote',
  component: ProductQuote,
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
  args: {
    quote:
      'Azion has transformed how we deliver content globally. The edge platform is incredibly fast and reliable, making it easy to scale our applications without worrying about infrastructure.',
    author: 'John Smith',
    role: 'CTO at TechCorp',
    logo: 'https://placehold.co/200x60/1a1a1a/f3652b?text=Company+Logo'
  }
}
