import Container from '../../../templates/container'
import SectionCardBackground from '../../../templates/sectioncardbackground'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-card-background',
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
    components: {
      Container,
      SectionCardBackground
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionCardBackground v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'OVERLINE',
  titleTag: 'h2',
  title: "Let's build together",
  description:
    'Azion has always focused on the core values of innovation, reliability, and the ability to make transparent, forward-looking decisions, and execute them with precision and agility. We believe that our success depends on the success of our customers.',
  buttons: [
    {
      label: 'See jobs',
      link: 'https://console.azion.com/signup'
    },
    {
      label: 'About Us',
      link: 'https://console.azion.com/signup',
      outlined: 'true'
    }
  ],
  cards: [
    {
      label: 'Quality',
      title:
        'Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.',
      description:
        'Ajudamos você a melhorar a entrega de conteúdo, criar casos de uso inovadores de IoT, virtualizar sua infraestrutura de edge com Multi-Access Edge Computing (MEC) e integrar Zero Trust.',
      image: 'https://www.azion.com/assets/pages/careers/quality.png',
      alt: 'A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy.',
      buttons: [
        {
          label: 'Veja nosso manifesto',
          link: 'https://www.youtube.com/watch?v=IMxOiJZWNY0',
          outlined: true
        }
      ]
    },
    {
      label: 'Quality',
      title:
        'Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.',
      description:
        'Ajudamos você a melhorar a entrega de conteúdo, criar casos de uso inovadores de IoT, virtualizar sua infraestrutura de edge com Multi-Access Edge Computing (MEC) e integrar Zero Trust, reduzindo custos em mais de 70% em relação às soluções legadas enquanto aumenta o desempenho e muito mais.',
      image: 'https://www.azion.com/assets/pages/careers/quality.png',
      alt: 'A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy.',
      buttons: [
        {
          label: 'Veja nosso manifesto',
          link: 'https://www.youtube.com/watch?v=IMxOiJZWNY0',
          outlined: true
        }
      ]
    },
    {
      label: 'Quality',
      title:
        'Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.',
      description:
        'Ajudamos você a melhorar a entrega de conteúdo, criar casos de uso inovadores de IoT, virtualizar sua infraestrutura de edge com Multi-Access Edge Computing (MEC) e integrar Zero Trust, reduzindo custos em mais de 70% em relação às soluções legadas enquanto aumenta o desempenho e muito mais.',
      image: 'https://www.azion.com/assets/pages/careers/quality.png',
      alt: 'A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy.',
      buttons: [
        {
          label: 'Veja nosso manifesto',
          link: 'https://www.youtube.com/watch?v=IMxOiJZWNY0',
          outlined: true
        }
      ]
    },
    {
      label: 'Quality',
      title:
        'Meeting high expectations is the norm. Exceeding them is what sets us apart and drives our success.',
      description:
        'Ajudamos você a melhorar a entrega de conteúdo, criar casos de uso inovadores de IoT, virtualizar sua infraestrutura de edge com Multi-Access Edge Computing (MEC) e integrar Zero Trust, reduzindo custos em mais de 70% em relação às soluções legadas enquanto aumenta o desempenho e muito mais.',
      image: 'https://www.azion.com/assets/pages/careers/quality.png',
      alt: 'A group of Azion employees collaborating in a bright and spacious office environment, with modern decor and vibrant energy.',
      buttons: [
        {
          label: 'Veja nosso manifesto',
          link: 'https://www.youtube.com/watch?v=IMxOiJZWNY0',
          outlined: true
        }
      ]
    }
  ]
}
