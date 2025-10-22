import SectionGetStarted from '../../blocks/SectionGetStarted/SectionGetStarted.vue'

export default {
  title: 'Blocks/Rebranding/SectionGetStarted',
  component: SectionGetStarted,
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
    title: 'Ready to get started?',
    subtitle: 'Build, Secure and Scale your Business. Start for Free and Pay as you grow.',
    buttons: [
      {
        label: 'Start Free Trial',
        href: '/signup',
        type: 'primary'
      },
      {
        label: 'Talk to Sales',
        href: '/contact',
        type: 'secondary'
      }
    ]
  }
}
