import FeaturedCards from '../../../templates/featuredcards'
import HeroFeaturedBottom from '../../../templates/herofeaturedbottom'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Hero/hero-featured-bottom',
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

const MOCK = {
  overline: 'Build',
  title: 'Edge Application',
  description:
    'Edge Application allows you to build your web applications to run on Azion Edge Platform.',
  buttons: [
    {
      label: 'Start Now',
      link: 'https://console.azion.com/signup/',
      outlined: false
    },
    {
      label: 'Get a Demo',
      link: '/en/contact-sales/',
      outlined: true
    }
  ],
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
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      button: {
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
      link: 'https://www.azion.com/en/documentation/products/get-started/',
      button: {
        label: 'Get started'
      },
      tag: 'Edge Computing'
    }
  ]
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroFeaturedBottom v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { HeroFeaturedBottom, Container, FeaturedCards },
  setup() {
    return { args }
  },
  template: HeroDisplay
})

export const Default = Template.bind({})
Default.args = MOCK
