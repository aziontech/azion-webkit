import Container from '../../../templates/container'
import SectionOverview from '../../../templates/sectionoverview'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-overview',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.buttons}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionOverview
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionOverview v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Overview',
  title: 'Proactively safeguard applications and APIs from automated bot attacks',
  description:
    'As more businesses progressively operate online, the risk from bots has escalated, making bot management a crucial component of cybersecurity. By adopting a robust strategy, businesses can detect, categorize, and neutralize malicious bots while allowing beneficial ones to operate. This approach enhances user experience, maintains site integrity, and secures sensitive business and customer data.',
  buttons: [
    // {
    //   label: 'Try it for freet',
    //   link: 'https://console.azion.com/signup'
    // },
    {
      label: 'View Customer Success Stories',
      link: 'https://www.azion.com/en/success-cases/',
      outlined: 'true'
    }
  ],
  data: [
    {
      title: 'Reduce financial risks',
      items: [
        {
          icon: 'pi pi-check',
          description: 'Protecting your website and applications against a variety of attacks.'
        },
        {
          icon: 'pi pi-check',
          description:
            'Avoiding credential abuse, card balance verification, and other forms of online fraud.'
        },
        {
          icon: 'pi pi-check',
          description:
            "Avoiding legal fees and permanent damage to your company's image due to invasions and data breaches."
        }
      ]
    },
    {
      title: 'Boost your reliability and resilience',
      items: [
        {
          icon: 'pi pi-check',
          description:
            'Reducing the impact of bots on applications and the entire infrastructure.'
        },
        {
          icon: 'pi pi-check',
          description: 'Providing extensive bot protection through collective intelligence.'
        },
        {
          icon: 'pi pi-check',
          description:
            'Analyzing every request and acting preventively according to predefined, customizable rules.'
        }
      ]
    },
    {
      title: 'Increase application and API observability',
      items: [
        {
          icon: 'pi pi-check',
          description:
            'Analyzing the amount and characteristics of bots trying to access your website, APIs, and applications.'
        },
        {
          icon: 'pi pi-check',
          description:
            'Using the observability tools provided by Azion to monitor malicious activity.'
        },
        {
          icon: 'pi pi-check',
          description:
            'Combine with other integrations from the Marketplace to enhance the efficiency of Bot Management.'
        }
      ]
    }
  ]
}
