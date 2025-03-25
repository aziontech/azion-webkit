
import Container from '../../../templates/container'
import SectionGridBento2c5i from '../../../templates/sectiongridbento2c5i'
// import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-grid-bento-2c5i',
  tags: ['autodocs']
}

const config = (args) => {
  return {
    components: {
      Container,
      SectionGridBento2c5i
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <SectionGridBento2c5i v-bind="args" />
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'capacidades adicionais',
  title: 'Potencialize sua edge application habilitando qualquer uma ou todas as nossas funcionalidades avançadas.',
  description: "",
  cards: [
    {
      title: 'Construir um modelo de segurança Zero Trust no edge',
      description: 'Proteja sua aplicação contra ataques sofisticados, como BGP Hijacking e DDoS.',
    },
    {
      title: "Entregar aplicações edge serverless",
      description: "Forneça uma experiência personalizada para todos os clientes."
    },
    {
      title: "Criar sites no edge",
      description: "Processe diretamente em nossos Edge Nodes sem acessar qualquer infraestrutura de origem."
    },
    {
      title: "Acelerar a entrega",
      description: "Entregue conteúdo de streaming de vídeo de alta resolução para sua aplicação armazenando-o mais perto de seus usuários"
    }
  ]
}
