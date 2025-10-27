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

export const WithoutLinks = {
  args: {
    id: 'info-only-cta',
    cta: {
      overline: 'Learn More',
      title: 'Discover the Power of Edge',
      descriptionRawMarkdown: 'Edge computing brings computation and data storage closer to the sources of data. This is expected to improve response times and save bandwidth.'
    },
    content: {
      overline: 'Key Benefits',
      descriptionRawMarkdown: '**Reduced Latency** - Process data closer to users\n\n**Better Performance** - Faster response times\n\n**Cost Efficiency** - Optimized bandwidth usage',
      title: 'Transform Your Infrastructure'
    }
  }
}

export const SalesOriented = {
  args: {
    id: 'sales-cta',
    cta: {
      overline: 'Enterprise Solutions',
      title: 'Scale with Confidence',
      descriptionRawMarkdown: 'Enterprise-grade **security**, **reliability**, and **performance**. Get dedicated support and custom solutions tailored to your business needs.',
      linkLabel: 'Talk to Sales',
      link: 'https://azion.com/contact'
    },
    content: {
      overline: 'Trusted by Industry Leaders',
      descriptionRawMarkdown: 'Join companies like **Netflix**, **Spotify**, and **Adobe** who trust Azion to deliver their content globally. Our platform handles billions of requests daily with **99.99% uptime**.',
      title: 'Enterprise Ready'
    }
  }
}

export const DeveloperFocused = {
  args: {
    id: 'developer-cta',
    cta: {
      overline: 'For Developers',
      title: 'Build at the Edge',
      descriptionRawMarkdown: 'Deploy **serverless functions**, manage **APIs**, and optimize **content delivery** with our developer-friendly platform. Full **REST API** and **CLI** support.',
      linkLabel: 'View Documentation',
      link: 'https://docs.azion.com'
    },
    content: {
      overline: 'Developer Experience',
      descriptionRawMarkdown: '```javascript\n// Deploy in seconds\nazion deploy\n```\n\n**Modern Stack** - React, Vue, Next.js support\n\n**Real-time Analytics** - Monitor performance instantly',
      title: 'Code at Light Speed'
    }
  }
}
