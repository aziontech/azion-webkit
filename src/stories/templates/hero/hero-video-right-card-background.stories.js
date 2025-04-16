import Container from '../../../templates/container'
import HeroVideoRightCardBackground from '../../../templates/herovideorightcardbackground'
import Rules from '../../rules'

const MOCK = {
  overline: 'About us',
  titleTag: 'h1',
  title: 'Our mission is to power the hyper-connected economy',
  description:
    'From the beginning, our goal has been to create technologies that unlock new possibilities.',
  video: {
    title: 'Azion Overview',
    src: 'https://www.youtube.com/embed/your_video_id',
    image: {
      alt: "Image of a globe illustrating Azion's connections",
      dark: {
        src: 'https://www.azion.com/assets/pages/about/globe-about.png'
      },
      light: {
        src: 'https://www.azion.com/assets/pages/about/globe-about-light.png'
      }
    }
  },
  cards: [
    {
      label: 'O que fazemos',
      title:
        'Com a nossa plataforma, você pode escrever e implementar aplicações serverless no edge',
      description:
        'Ajudamos você a melhorar a entrega de conteúdo, criar casos de uso inovadores de IoT, virtualizar sua infraestrutura de edge com Multi-Access Edge Computing (MEC) e integrar Zero Trust, reduzindo custos em mais de 70% em relação às soluções legadas enquanto aumenta o desempenho e muito mais.',
      image: 'https://www.azion.com/assets/pages/about/azion-01.jpg',
      alt: 'Uma equipe de profissionais da Azion, alinhados em uma sala de reuniões, discutindo estratégias de negócios e colaborando em um ambiente de trabalho moderno e dinâmico.',
      buttons: [
        {
          label: 'Veja nosso manifesto',
          link: 'https://www.youtube.com/watch?v=IMxOiJZWNY0',
          outlined: null
        }
      ]
    },
    {
      label: 'Azion Way of Life',
      title: 'Acreditamos que o sucesso vem com as pessoas certas e a mentalidade certa',
      description:
        'Nossa cultura revela-se pelas habilidades e condutas que valorizamos. Buscamos pessoas de alto desempenho que liderem pelo exemplo e que superem expectativas. Somos rápidos e motivados pelo desafio, sem importar o tamanho dele. Acreditamos que cada entrega efetuada é um novo início, não um final.',
      image: 'https://www.azion.com/assets/pages/about/azion-02.jpg',
      alt: 'Um grupo de funcionários da Azion colaborando em um ambiente de escritório luminoso e espaçoso, com decoração moderna e energia vibrante.',
      buttons: [
        {
          label: 'Saiba mais',
          link: 'https://www.azion.com/pt-br/carreiras/',
          outlined: true
        }
      ]
    }
  ]
}

const config = (args) => {
  return {
    components: { Container, HeroVideoRightCardBackground },
    setup() {
      return { args }
    },
    template: `
    <Container class="surface-ground">
      <HeroVideoRightCardBackground v-bind="args" />
    </Container>
    `
  }
}

const TemplateWithCards = (args) => config(args)
export const Default = TemplateWithCards.bind({})
Default.args = MOCK

export default {
  title: 'Blocks/Hero/hero-video-right-card-background',
  component: HeroVideoRightCardBackground,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.overline}
${Rules.hero.title}
${Rules.hero.description}
${Rules.hero.imageVideo}
${Rules.hero.cards}
        `
      }
    }
  },
  titleTag: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    default: 'h1',
    control: {
      type: 'select'
    }
  }
}
