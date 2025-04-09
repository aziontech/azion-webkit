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
  title:
    'Potencialize sua edge application habilitando qualquer uma ou todas as nossas funcionalidades avançadas.',
  description: '',
  gridType: '2-columns-5-items',
  cards: [
    {
      overline: 'add-on',
      title: 'Edge Functions',
      description:
        'Que conecta seus usuários aos Edge Nodes de nossa rede global altamente distribuída.',
      buttons: [
        {
          label: 'ver detalhes',
          link: '/pt-br/',
          outlined: true
        }
      ],
      image: {
        imageDark:
          'https://www.azion.com/assets/pages/products/images/dark/edge-application/console-edge-function.svg',
        imageLight:
          'https://www.azion.com/assets/pages/products/images/light/edge-application/console-edge-function.svg',
        alt: 'Edge Application text image'
      }
    },
    {
      overline: 'add-on',
      title: 'Image Processor',
      description:
        'Otimize, converta e modifique suas imagens just-in-time para melhorar a experiência do usuário.',
      buttons: [
        {
          label: 'ver detalhes',
          link: '/pt-br/',
          outlined: true
        }
      ]
    },
    {
      overline: 'add-on',
      title: 'Edge Cache',
      description:
        'Ative uma camada adicional de cache que reduz o tráfego para sua origem, melhorando a performance e disponibilidade.',
      buttons: [
        {
          label: 'ver detalhes',
          link: '/pt-br/',
          outlined: true
        }
      ]
    }
  ]
}
