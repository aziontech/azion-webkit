import Container from '../../../templates/container'
import SectinoIntercalatedContent from '../../../templates/sectionintercalatedcontent'

export default {
  title: 'Blocks/Sections/section-intercalated-content',
  tags: ['autodocs']
}

const MOCK = {
  overline: 'Edge Application',
  title: 'Como Funciona',
  items: [
    {
      title: 'A Azion usa uma arquitetura de proxy reverso, que conecta seus usuários aos Edge Nodes de nossa rede global altamente distribuída.',
      description: '',
      imageDark: 'https://www.azion.com/assets/pages/products/images/dark/edge-application/asset-1.svg',
      imageLight: 'https://www.azion.com/assets/pages/products/images/light/edge-application/asset-11.svg',
      alt: 'Edge Application text image'
    },
    {
      title: 'Configure seu cache. O conteúdo nos Edge Nodes da Azion pode ser entregue diretamente aos seus usuários por meio do nosso edge node mais próximo.',
      description: '',
      imageDark: 'https://www.azion.com/assets/pages/products/images/dark/edge-application/asset-2.svg',
      imageLight: 'https://www.azion.com/assets/pages/products/images/light/edge-application/asset-21.svg',
      alt: 'Edge Application text image',
      position: 'right'
    },
    {
      title: 'Habilite os módulos de rede, computação e segurança da sua edge application para garantir a máxima performance, escalabilidade e segurança.',
      description: '',
      imageDark: 'https://www.azion.com/assets/pages/products/images/dark/edge-application/asset-3.svg',
      imageLight: 'https://www.azion.com/assets/pages/products/images/light/edge-application/asset-31.svg',
      alt: 'Edge Application text image'
    }
  ]
}

const template = `
<Container class="surface-ground">
  <SectinoIntercalatedContent v-bind="args" />
</Container>
`

const Template = (args) => ({
  components: {
    Container,
    SectinoIntercalatedContent
  },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK
