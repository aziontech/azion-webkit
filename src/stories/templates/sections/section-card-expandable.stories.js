import Container from '../../../templates/container'
import SectionCardExpandable from '../../../templates/sectioncardexpandable'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-expandable',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.cards}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: { Container, SectionCardExpandable },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionCardExpandable v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Professional Services',
  title: 'Helping you achieve your business goals with Azion.',
  description:
    "Azion Professional Services offerings utilize a unique methodology rooted in Azion's internal best practices to help you complete projects faster and more reliably. We take into account the constantly evolving expectations and dynamic team structures encountered along the way.",
  cards: [
    {
      title: 'Assessment',
      description:
        'We carry out a detailed analysis to understand your needs and design customized edge solutions.',
      img: {
        src: 'https://www.azion.com/assets/pages/professional-service/assessment.png',
        alt: ''
      },
      imgLight: {
        src: 'https://www.azion.com/assets/pages/professional-service/light/assessment.png',
        alt: ''
      },
      button: {
        link: 'https://www.azion.com/en/contact-sales/',
        label: 'Talk to sales',
        outlined: false,
        target: '_blank'
      }
    },
    {
      title: 'Planning',
      description:
        'Our team of experts identifies and designs the right solutions for your technical or business needs.',
      img: {
        src: 'https://www.azion.com/assets/pages/professional-service/planning.png',
        alt: ''
      },
      imgLight: {
        src: 'https://www.azion.com/assets/pages/professional-service/light/planning.png',
        alt: ''
      },
      button: {
        link: 'https://www.azion.com/en/resource-hub/',
        label: 'Read our guides',
        outlined: true,
        target: '_blank'
      }
    },
    {
      title: 'Integration',
      description:
        'Configuration in Azion Console and preparation of origin infrastructure for content delivery, with integrated validation and testing.',
      img: {
        src: 'https://www.azion.com/assets/pages/professional-service/integration.png',
        alt: ''
      },
      imgLight: {
        src: 'https://www.azion.com/assets/pages/professional-service/light/integration.png',
        alt: ''
      },
      button: {
        link: 'https://www.azion.com/en/contact-sales/',
        label: 'Learn more',
        outlined: true,
        target: '_blank'
      }
    },
    {
      title: 'Support',
      icon: 'pi pi-replay',
      description:
        'Do you need technical support? Access documentation, guides, whitepapers, bug reports, the Azion Community on Discord, and other channels as Service Plans',
      img: {
        src: 'https://www.azion.com/assets/pages/professional-service/support.png',
        alt: ''
      },
      imgLight: {
        src: 'https://www.azion.com/assets/pages/professional-service/light/support.png',
        alt: ''
      },
      button: {
        link: 'https://console.azion.com/login',
        label: 'Sign in',
        outlined: true,
        target: '_blank'
      }
    },
    {
      title: 'Innovation',
      icon: 'pi pi-replay',
      description: 'Check out our e-book, white papers, and more to turbocharge your innovation',
      img: {
        src: 'https://www.azion.com/assets/pages/professional-service/innovation.png',
        alt: ''
      },
      imgLight: {
        src: 'https://www.azion.com/assets/pages/professional-service/light/innovation.png',
        alt: ''
      },
      button: {
        link: '/en/resource-hub/',
        label: 'View success cases',
        outlined: true,
        target: '_blank'
      }
    }
  ]
}
