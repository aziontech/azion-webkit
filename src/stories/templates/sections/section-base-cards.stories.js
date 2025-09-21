import Container from '../../../templates/container'
import SectionBaseCards from '../../../templates/sectionbasecards'
// import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-base-cards',
  tags: ['autodocs']
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionBaseCards
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionBaseCards v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'capacidades adicionais',
  title:
    'Potencialize sua edge application habilitando qualquer uma ou todas as nossas funcionalidades avançadas.',
  description: '',
  cards: [
    {
      title: 'Construir um modelo de segurança Zero Trust no edge',
      description: 'Proteja sua aplicação contra ataques sofisticados, como BGP Hijacking e DDoS.',
      link: 'https://azion.com.br',
      linkText: 'Saiba mais'
    },
    {
      title: 'Entregar aplicações edge serverless',
      description: 'Forneça uma experiência personalizada para todos os clientes.'
    },
    {
      title: 'Criar sites no edge',
      description:
        'Processe diretamente em nossos Edge Nodes sem acessar qualquer infraestrutura de origem.'
    },
    {
      title: 'Acelerar a entrega',
      description:
        'Entregue conteúdo de streaming de vídeo de alta resolução para sua aplicação armazenando-o mais perto de seus usuários'
    }
  ]
}
