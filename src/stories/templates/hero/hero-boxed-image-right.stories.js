import Rules from '../../rules'
import HeroBoxedImageRight from '../../../templates/heroboxedimageright'
import ContentLogoBlock from '../../../templates/contentlogo'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Hero/hero-boxed-image-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.title}
${Rules.hero.description}
${Rules.hero.image}
${Rules.hero.logos}
        `
      }
    }
  }
}

const MOCK = {
  title: 'Jamstack Websites',
  description:
    'Enhance the performance, security, and scalability of your websites and web applications',
  logos: {
    title: 'Azion logos template',
    images: [
      '/assets/dark/illustration-demo.svg',
      '/assets/dark/illustration-demo.svg',
      '/assets/dark/illustration-demo.svg'
    ]
  },
  imagesRight: {
    dark: '/assets/mocks/_asset-product.png',
    light: '/assets/mocks/_asset-product.png',
    alt: ''
  }
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroBoxedImageRight v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { HeroBoxedImageRight, ContentLogoBlock, ImageSwitcher, Container },
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
