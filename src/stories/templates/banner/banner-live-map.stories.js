

import Container from '../../../templates/container'
import BannerLiveMap from '../../../templates/bannerlivemap'
import Rules from '../../rules'

export default {
  title: 'Blocks/Banner/banner-live-map',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.banner.overline}
${Rules.banner.title}
${Rules.banner.cta}
${Rules.banner.image}
        `,
      },
    },
  },
}

const MOCK = {
  "overline": "LIVE MAP",
  "title": "Azion Live Map",
  "description": "Discover e-commerce behavior in real time, the times with the most traffic or regions with the highest number of blocked attacks.",
  "button": {
    "label": "See Live Map",
    "link": "https://www.azion.com/pt-br/live-map/",
    "icon": "pi pi-arrow-up-right",
    "outlined": true
  }
}

const template = `
<Container class="surface-ground">
  <BannerLiveMap v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { BannerLiveMap, Container },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template } },
};
