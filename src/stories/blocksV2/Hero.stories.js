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
    overline: 'functions',
    title: 'Build Smarter, Faster, and Closer to Your Users',
    subtitle: 'Empower your applications with Azion Functions: serverless computing at the edge for unmatched performance, scalability, and innovation.',
    buttons: [
      {
        label: '> Start Now',
        href: '/signup',
        type: 'primary'
      },
      {
        label: '> Learn More',
        href: '/docs',
        type: 'secondary'
      }
    ]
  }
}

export const WithAnimatedBackground = {
  args: {
    overline: 'edge computing',
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

export const WithoutOverline = {
  args: {
    title: 'Simple Hero Without Overline',
    subtitle: 'This example shows the hero without the overline text',
    buttons: [
      {
        label: 'Get Started',
        href: '/signup',
        type: 'primary'
      }
    ]
  }
}
