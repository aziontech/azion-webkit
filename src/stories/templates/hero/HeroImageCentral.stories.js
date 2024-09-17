import HeroBlockBase from '../../../templates/herobase'
import LinkButton from '../../../templates/linkbutton'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Hero/ Image Central',
  tags: ['autodocs'],
}

const MOCK = {
  hero: {
    overline: "Build",
    "title": "Edge Application",
    description:
      'Edge Application allows you to build your web applications to run on Azion Edge Platform.',
    alt: "Insert ALt here",
    imageDark: "https://www.azion.com/assets/pages/products/images/dark/edge-application/_thumb_edge_app.png",
    imageLight: "https://52082s.ha.azioncdn.net/assets/pages/products/images/light/edge-application/_thumb_edge_app-light.png"
  },
  CTA: [
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
  <HeroBlockBase
    isCentralized
    :overline="args.hero.overline"
    :title="args.hero.title"
    :description="args.hero.description"
  >
    <template #actions>
      <LinkButton v-for="button in args.CTA" v-bind="button" />
    </template>
    <template #main>
      <ImageSwitcher>
        <template #darkImage>
          <img
            fetchPriority="high"
            width="auto"
            height="655"
            :alt="args.hero.alt"
            :src="args.hero.imageDark"
          />
        </template>
        <template #lightImage>
          <img
            fetchPriority="high"
            width="auto"
            height="655"
            :alt="args.hero.alt"
            :src="args.hero.imageLight"
          />
        </template>
      </ImageSwitcher>
    </template>
  </HeroBlockBase>
</Container>`

const Template = (args) => ({
  components: { HeroBlockBase, LinkButton, ImageSwitcher, Container },
  setup() {
    return { args }
  },
  template: HeroDisplay
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: HeroDisplay } },
};
