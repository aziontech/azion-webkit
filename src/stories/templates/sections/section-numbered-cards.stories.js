import Container from '../../../templates/container'
import SectionNumberedCards from '../../../templates/sectionnumberedcards'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-numbered-cards',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionNumberedCards
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionNumberedCards v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Pricing Model',
  title: 'All products and features, no upfront commitment required—cancel anytime.',
  description:
    'Our pay-as-you-go pricing model gives you the freedom to customize your choice for more efficiency paying only for what you use: Data transferred, requests, compute time, etc.',
  cards: [
    {
      title: 'Start for free',
      description:
        'Get free, hands-on experience with the Azion Edge Computing Platform with $300 in credits valid for 12 months. No upfront commitment—cancel anytime.',
      button: {
        label: 'Create a free account',
        link: 'https://console.azion.com/signup'
      }
    },
    {
      title: 'Pay as you grow',
      description:
        'Pay only for the resources you use, and pay less as you grow with our on-demand, tiered pricing model. Ideal for any business stage, with no account maintenance fees.',
      button: {
        label: 'Check prices',
        link: '/en/documentation/products/pricing/',
        outlined: true
      }
    },
    {
      title: 'Commit and save',
      description:
        'Save more by committing to a 1, 2, or 3-year plan, and selecting the most cost-effective payment terms for your needs. Ideal for cost-effective, sustained growth.',
      button: {
        label: 'Check prices',
        link: '/en/documentation/products/pricing/',
        outlined: true
      }
    },
    {
      title: 'Add a Service Plan',
      description:
        "Select a Service Plan that aligns with your service and compliance requirements for successfully running your workloads with Azion. From Developer to Mission-Critical, we've got your back.",
      button: {
        label: 'Compare plans',
        link: '/en/professional-services/',
        outlined: true
      }
    }
  ]
}
