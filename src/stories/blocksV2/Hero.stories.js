import Hero from '../../blocks/Hero/Hero.vue'

export default {
  title: 'Blocks/Rebranding/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
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
    title: 'Build at the Edge',
    subtitle: 'Deploy your applications globally with edge computing',
    buttons: [
      {
        label: 'Get Started',
        href: '/signup',
        type: 'primary'
      },
      {
        label: 'Learn More',
        href: '/docs',
        type: 'secondary'
      }
    ]
  }
}

export const WithAnimatedBackground = {
  args: {
    title: 'Build at the Edge',
    subtitle: 'Deploy your applications globally with edge computing',
    animatedBackground: true,
    buttons: [
      {
        label: 'Get Started',
        href: '/signup',
        type: 'primary'
      },
      {
        label: 'Learn More',
        href: '/docs',
        type: 'secondary'
      }
    ]
  }
}
