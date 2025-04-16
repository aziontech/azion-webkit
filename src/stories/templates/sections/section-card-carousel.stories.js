import Container from '../../../templates/container'
import SectionCardCarousel from '../../../templates/sectioncardcarousel'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-carousel',
  component: SectionCardCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.cards}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionCardCarousel
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionCardCarousel v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  responsiveOptions: [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ],
  overline: 'Choose a challenge',
  titleTag: 'h2',
  title: 'Open job roles',
  description: 'Improve your skills while building the future of computing and delivering mission-critical services to global customers.',
  cards: [
    {
      title: 'Engineering',
      description:
        'Improve your skills while building the future of computing and delivering mission-critical services to global customers.',
      link: '/en/careers/jobs/?area=Engineering',
      action: {
        label: 'See jobs'
      }
    },
    {
      title: 'Revenue',
      description: 'Create amazing stories with global customers.',
      link: '/en/careers/jobs/?area=Revenue',
      action: {
        label: 'See jobs'
      }
    },
    {
      title: 'Products',
      description:
        'Build products to power the hyper-connected economy while improving methodologies and strategies.',
      link: '/en/careers/jobs/?area=Products',
      action: {
        label: 'See jobs'
      }
    },
    {
      title: 'Operations',
      description: 'Drive our business initiatives to successful outcomes on a global scale.',
      link: '/en/careers/jobs/?area=Operations',
      action: {
        label: 'See jobs'
      }
    },
    {
      title: 'Security',
      description: 'Help us secure our applications, infrastructure, networks, devices, and data.',
      link: '/en/careers/jobs/?area=Security',
      action: {
        label: 'See jobs'
      }
    },
    {
      title: 'DevEx',
      description: 'Ensure a great developer experience with our products',
      link: '/en/careers/jobs/?area=Developer+Experience',
      action: {
        label: 'See jobs'
      }
    }
  ]
}
