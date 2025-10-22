import Hero2Column from '../../blocks/Hero2Column/Hero2Column.vue'

export default {
  title: 'Blocks/Rebranding/Hero2Column',
  component: Hero2Column,
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
    overline: 'Edge Computing',
    title: 'Build Faster with Azion Edge Platform',
    subtitleMarkdown: 'Deploy your applications at the edge with **unmatched performance**, *security*, and scalability. Join thousands of developers building the future of the web with [our platform](https://azion.com).',
    image: 'https://placehold.co/600x600/1a1a1a/f3652b?text=Product+Image',
    buttons: [
      {
        label: 'start now',
        href: '/signup',
        type: 'primary'
      },
      {
        label: 'start now',
        href: '/docs',
        type: 'primary'
      }
    ]
  }
}
