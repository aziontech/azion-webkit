import HeroBlockBase from '../../../templates/herobase'
import LinkButton from '../../../templates/linkbutton'
import ContentLogoBlock from '../../../templates/contentlogo'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import ListUnordered from "../../../templates/listunordered"
import Titlegroup from '../../../templates/titlegroup'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Hero/hero-products-horizontal',
  tags: ['autodocs'],
}

const MOCK = {
  hero: {
    overline: "SECURE",
    description:
      'Protect your web application from OWASP Top 10 threats to sophisticated zero-day attacks.'
  },
  "hgroup": {
    "subtitle": "Web Application Firewall",
    "title": "Azion WAF: the advanced protection security specialists trust"
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
<Container class="surface-ground">
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
          <img src="/assets/mocks/_asset-product.png" />
        </template>
        <template #darkImage>
          <img src="/assets/mocks/_asset-product.png" />
        </template>
      </ImageSwitcher>
    </template>
    <template #principal>
        <ListUnordered severity="secondary" class="w-full" v-bind="args.list"/>
    </template>
  </HeroBlockBase>
</Container>`

const Template = (args) => ({
  components: { HeroBlockBase, LinkButton, ContentLogoBlock, ImageSwitcher, ListUnordered, Titlegroup, Container },
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
