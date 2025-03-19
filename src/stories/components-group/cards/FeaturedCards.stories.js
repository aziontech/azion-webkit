import FeaturedCards from '../../../templates/featuredcards'

export default {
  title: 'Components Group/Cards/Featured Cards',
  component: FeaturedCards,
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Imagem de fundo do card.',
      type: 'object'
    },
    tag: {
      description: 'Texto da tag a direita superior do card.',
      type: 'string'
    },
    logo: {
      description: 'Logo a esquerda superior do card.',
      type: 'object'
    },
    description: {
      description: 'Texto descritivo do card.',
      type: 'string'
    },
    button: {
      description: 'Botão do card.',
      type: 'object'
    }
  }
}

const cardTemplate = ` <FeaturedCards v-bind="args" />`

const Template = (args) => ({
  components: { FeaturedCards },
  setup() {
    return { args }
  },
  template: cardTemplate
})

const DefaultProps = {
  cards: [
    {
      image: {
        src: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Azion logo'
      },
      logo: {
        src: 'https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg',
        alt: 'Brand logo'
      },
      description:
        'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales on the web..',
      button: {
        link: 'https://www.azion.com/en/documentation/products/get-started/',
        label: 'Get started'
      },
      tag: 'Edge Computing'
    },
    {
      image: {
        src: 'https://plus.unsplash.com/premium_photo-1738772657819-8f58f03017b7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Azion logo'
      },
      logo: {
        src: 'https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg',
        alt: 'Brand logo'
      },
      description:
        'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales on the web..',
      button: {
        link: 'https://www.azion.com/en/documentation/products/get-started/',
        label: 'Get started'
      },
      tag: 'Edge Computing'
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Azion logo'
      },
      logo: {
        src: 'https://www.azion.com/assets/pages/products/images/dark/edge-functions/renner-logo.svg',
        alt: 'Brand logo'
      },
      description:
        'VTEX builds ultra-low latency serverless applications with Azion and allows thousands of customers to accelerate their sales on the web..',
      button: {
        link: 'https://www.azion.com/en/documentation/products/get-started/',
        label: 'Get started'
      },
      tag: 'Edge Computing'
    }
  ]
}

export const Default = Template.bind({})
Default.args = DefaultProps
