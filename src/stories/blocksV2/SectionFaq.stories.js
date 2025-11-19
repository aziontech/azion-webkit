import SectionFaq from '../../blocks/SectionFaq/SectionFaq.vue'

export default {
  title: 'Blocks/Rebranding/SectionFaq',
  component: SectionFaq,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    },
    docs: {
      description: {
        component:
          'SectionFaq is a responsive FAQ component with smooth expand/collapse animations. Features a two-column layout with markdown support for answers.'
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    id: {
      control: 'text',
      description: 'Optional HTML id attribute for the section element',
      table: {
        type: { summary: 'string' }
      }
    },
    bottomSpacing: {
      control: 'select',
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      description: 'Bottom margin spacing class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mb-24' }
      }
    },
    title: {
      control: 'text',
      description: 'Main title displayed in the left column',
      table: {
        type: { summary: 'string' }
      }
    },
    faqs: {
      control: 'object',
      description: 'Array of FAQ items with question, answer, and optional isOpen state',
      table: {
        type: { summary: 'FaqProps[]' }
      }
    }
  }
}

export const Default = {
  name: 'Default FAQ',
  args: {
    id: 'section-faq-default',
    title: 'Frequently Asked Questions',
    bottomSpacing: 'mb-24',
    faqs: [
      {
        id: 1,
        question: 'What is edge computing?',
        answer:
          'Edge computing is a **distributed computing** paradigm that brings computation and data storage closer to the location where it is needed, improving response times and saving bandwidth.'
      },
      {
        id: 2,
        question: 'How does edge computing improve performance?',
        answer:
          'By reducing latency and bandwidth usage, edge computing can improve application performance by up to *90%*. This is achieved by processing data closer to the end user.'
      },
      {
        id: 3,
        question: 'What technologies are supported?',
        answer:
          'We support a wide range of technologies including:\n\n- **JavaScript** and TypeScript\n- **Python** and Go\n- **Docker** containers\n- **Serverless** functions\n- And many more!'
      },
      {
        id: 4,
        question: 'How do I get started?',
        answer:
          'Getting started is easy! Simply [sign up](https://console.azion.com) for a free account and follow our quick start guide. No credit card required.'
      },
      {
        id: 5,
        question: 'What is the pricing model?',
        answer:
          'We offer **flexible pricing** plans starting from a free tier for developers to enterprise solutions for large organizations. All plans include our core features.'
      },
      {
        id: 6,
        question: 'Is there a free trial?',
        answer:
          'Yes! We offer a free tier that includes all core features. You can upgrade to paid plans as your needs grow. Enterprise customers can also request a custom trial period.'
      }
    ]
  }
}

export const WithPreOpened = {
  name: 'With Pre-opened FAQ',
  args: {
    id: 'section-faq-preopened',
    title: 'Product FAQ',
    bottomSpacing: 'mb-24',
    faqs: [
      {
        id: 1,
        question: 'What is the pricing?',
        answer:
          'We offer **flexible pricing** plans starting from free tier to enterprise solutions. Check our [pricing page](https://www.azion.com/pricing) for detailed information.',
        isOpen: true
      },
      {
        id: 2,
        question: 'How do I get started?',
        answer:
          'Simply [sign up](https://console.azion.com) and follow our quick start guide. You can deploy your first application in minutes.'
      },
      {
        id: 3,
        question: 'What support options are available?',
        answer:
          'We offer multiple support tiers:\n\n- **Community**: Free community support via forums\n- **Standard**: Email support with 24-48 hour response\n- **Premium**: Priority support with SLA guarantees\n- **Enterprise**: Dedicated support team'
      }
    ]
  }
}
