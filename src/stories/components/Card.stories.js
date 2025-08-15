import Card from '../../components/card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'A modern card component with overline, title, description and optional link.'
      }
    }
  },
  argTypes: {
    overline: {
      control: 'text',
      description: 'Overline text displayed above the title'
    },
    title: {
      control: 'text',
      description: 'Main title of the card'
    },
    description: {
      control: 'text',
      description: 'Description text of the card'
    },
    link: {
      control: 'text',
      description: 'Link URL for the card action'
    },
    linkText: {
      control: 'text',
      description: 'Text displayed for the link'
    }
  }
}

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: '<Card v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  overline: 'Secure',
  title: 'Edge Application',
  description: 'Edge Application empowers developers with a serverless, low-latency platform to deliver seamless digital experiences—anywhere, anytime.',
  link: 'https://www.azion.com/',
  linkText: 'Learn more'
}

export const WithoutLink = Template.bind({})
WithoutLink.args = {
  overline: 'Performance',
  title: 'Edge Computing',
  description: 'Build high-performance applications at the edge of the network with enhanced security and compliance.'
}

export const MinimalCard = Template.bind({})
MinimalCard.args = {
  title: 'Simple Card',
  description: 'A minimal card with just title and description.'
}

export const LongContent = Template.bind({})
LongContent.args = {
  overline: 'Enterprise',
  title: 'Advanced Edge Solutions for Enterprise Applications',
  description: 'Comprehensive edge computing platform designed for enterprise-grade applications that require maximum performance, security, and scalability. Our solution provides advanced features including real-time analytics, automated scaling, and comprehensive monitoring tools.',
  link: 'https://www.azion.com/enterprise',
  linkText: 'Explore Enterprise Solutions'
}
