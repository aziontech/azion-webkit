import HeroBlockBase from '../../../templates/herobase'
import LinkButton from '../../../templates/linkbutton'
import ContentLogoBlock from '../../../templates/contentlogo'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import ListUnordered from "../../../templates/listunordered"
import Titlegroup from '../../../templates/titlegroup'

export default {
  title: 'Blocks/Hero/Products',
  tags: ['autodocs'],
}

const MOCK = {
  hero: {
    overline: "Segurança",
    description:
      'Minimize fraud, enhance uptime, and boost visibility into applications and APIs'
  },
  "hgroup": {
    "subtitle": "Bot Management",
    "title": "Lorem ipsums dolor sit amet consectetur emit"
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
  ],
  list: {
    direction: 'horizontal',
    data: [
      {
        title: "Proteção",
        description: "Proteja suas aplicações e APIs contra SQL Injection, XSS, RFI e outras ameaças.",
        icon: "pi pi-lock",
      },
      {
        title: "Diverse use case",
        description: "Bloqueie ameaças no edge, antes de chegarem a sua aplicação ou infraestrutura. ",
        icon: "pi pi-shield",
      },
      {
        title: "Cost-effective",
        description: "Economize tempo com regras gerenciadas e passe mais tempo criando aplicações.",
        icon: "pi pi-clock",
      }
    ]
  }
}

const HeroDisplay = `
<div class="surface-ground flex flex-col lg:gap-10 gap-5">
  <HeroBlockBase
    v-bind="args.hero"
  >
    <template #title>
      <Titlegroup v-bind="args.hgroup" />
    </template>
    <template #actions>
      <LinkButton v-for="button in args.CTA" v-bind="button" />
    </template>
    <template #main>
      <ImageSwitcher>
        <template #lightImage>
          <img src="src/assets/images/mocks/_asset-product.png" />
        </template>
        <template #darkImage>
          <img src="src/assets/images/mocks/_asset-product.png" />
        </template>
      </ImageSwitcher>
    </template>
    <template #principal>
        <ListUnordered class="w-full" v-bind="args.list"/>
    </template>
  </HeroBlockBase>
</div>`

const Template = (args) => ({
  components: { HeroBlockBase, LinkButton, ContentLogoBlock, ImageSwitcher, ListUnordered, Titlegroup },
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
