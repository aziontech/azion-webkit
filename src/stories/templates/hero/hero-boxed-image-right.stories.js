import HeroBoxedImageRight from '../../../templates/heroboxedimageright'
import Rules from '../../rules'

export default {
  title: 'Blocks/Hero/hero-boxed-image-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.heroProduct.title}
${Rules.heroProduct.description}
${Rules.heroProduct.image}
${Rules.heroProduct.logo}
        `
      }
    }
  }
}

const MOCK = {
  title: '',
  description: '',
  logos: {
    title: 'Azion',
    images: [
      '/assets/mocks/_asset-product.png',
      '/assets/mocks/_asset-product.png',
      '/assets/mocks/_asset-product.png'
    ]
  },
  imagesRight: {
    dark: '/assets/mocks/_asset-product.png',
    light: '/assets/mocks/_asset-product.png',
    alt: ''
  }
}

const HeroDisplay = `
  <div class="min-h-[calc(100vh-56px)] flex justify-center items-center relative py-10 md:py-0">
    <HeroBlockBase
      :title="title"
      :description="description"
    >
      <template #content>
        <div class="w-full flex items-center justify-center lg:items-start lg:justify-start">
          <ContentLogoBlock
            :title="logos.title"
            :logos="logos.images"
          />
        </div>
      </template>
      <template #main>
        <div class="flex justify-center">
          <ImageSwitcher>
            <template #darkImage>
              <img
                :alt="images.alt"
                :src="images.dark"
              />
            </template>
            <template #lightImage>
              <img
                :alt="images.alt"
                :src="images.light"
              />
            </template>
          </ImageSwitcher>
        </div>
      </template>
    </HeroBlockBase>
  </div>`

const Template = (args) => ({
  components: { HeroBoxedImageRight },
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
