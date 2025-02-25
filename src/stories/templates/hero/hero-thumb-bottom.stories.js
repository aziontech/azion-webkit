import HeroThumbBottom from '../../../templates/herothumbbottom'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Hero/hero-thumb-bottom',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.heroProduct.overline}
${Rules.heroProduct.title}
${Rules.heroProduct.cta}
${Rules.heroProduct.image}

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
  images: {
    alt: 'Insert ALt here',
    dark: 'https://www.azion.com/assets/pages/products/images/dark/edge-application/_thumb_edge_app.png',
    light:
      'https://52082s.ha.azioncdn.net/assets/pages/products/images/light/edge-application/_thumb_edge_app-light.png'
  },
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
  ]
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroThumbBottom v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { HeroThumbBottom, Container },
  setup() {
    return { args }
  },
  template: HeroDisplay
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: HeroDisplay } }
}
