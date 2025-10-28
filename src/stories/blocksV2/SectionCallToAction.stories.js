import SectionCallToAction from '../../blocks/SectionCallToAction/SectionCallToAction.vue'

export default {
  title: 'Blocks/Rebranding/SectionCallToAction',
  component: SectionCallToAction,
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
    id: 'get-started-cta',
    cta: {
      overline: 'Get Started Today',
      title: 'Ready to accelerate your applications?',
      descriptionRawMarkdown: 'Join **thousands of developers** building *faster*, more reliable applications with our **edge computing platform**. Start your free trial and experience the power of edge computing.',
      linkLabel: 'Start Free Trial',
      link: 'https://console.azion.com/signup'
    },
    content: {
      overline: 'Why Choose Azion?',
      descriptionRawMarkdown: 'Our **global edge network** delivers content with **ultra-low latency** and provides advanced security features. Build modern applications that scale automatically and perform exceptionally worldwide.',
      title: 'Edge Computing Made Simple'
    }
  }
}

