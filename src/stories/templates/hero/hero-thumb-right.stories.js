import HeroProductHorizontal from '../../../templates/heroproductshorizontal'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Hero/hero-thumb-right',
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
${Rules.heroProduct.list}
        `
      }
    }
  }
}

const MOCK = {
  overline: 'Solutions',
  hgroup: {
    subtitle: 'Jamstack Websites',
    title:
      'Enhance the performance, security, and scalability of your websites and web applications'
  },
  buttons: [
    {
      label: 'Start Now',
      link: 'https://console.azion.com/signup/'
    },
    {
      label: 'Get a Demo',
      link: '/en/contact-sales/',
      outlined: true
    }
  ],
  images: {
    dark: '/assets/mocks/_asset-product.png',
    light: '/assets/mocks/_asset-product.png',
    alt: ''
  },
  list: {
    severity: 'secondary',
    data: [
      {
        title: 'Lightning-fast load times',
        description:
          'Developed with Vue/Vite, PrimeVue, and Tailwind, Azion Console Kit is a front-end development kit used for crafting a customized Azion Console interface. Seamless scalability for optimal performance during traffic spikes. Minimize latency by pushing computing closer to users.',
        icon: 'pi pi-check'
      },
      {
        title: 'Optimized costs and efficiency',
        description:
          'Save time and resources with a simplified development process. Align costs with usage through a consumption-based pricing model. Minimize infrastructure expenses with global content delivery networks.',
        icon: 'pi pi-check'
      },
      {
        title: 'Enhanced security against threats',
        description:
          'Reduced attack surface with abstracted microservice APIs. Serverless architecture eliminates server management and patching. Limited breach impact through decoupled front-end and back-end.',
        icon: 'pi pi-check'
      }
    ]
  }
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroProductHorizontal v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { HeroProductHorizontal, Container },
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
