
import Container from '../../../templates/container'
import Overline from '../../../templates/overline/Overline'
import LinkButton from '../../../templates/linkbutton/LinkButton'
import CardBase from '../../../templates/cardbase/CardBase'
import CardDescription from '../../../templates/carddescription/CardDescription'
import CardTitle from '../../../templates/cardtitle/CardTitle'
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
  <div class="px-container w-full">
    <CardBase grid class="w-full">
      <template #content-raw>
        <div class="flex flex-col md:flex-row gap-8 w-full">
          <div class="lg:p-10 p-6 md:pr-0  md:w-1/2">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-5">
                <Overline :label="args.overline" />
                <CardTitle titleTag="h3">
                  {{ args.title }}
                </CardTitle>
                <CardDescription>
                  {{ args.descriptio }}
                </CardDescription>
              </div>
              <LinkButton class="w-fit" :outlined="args.button.outlined" :label="args.button.label"
                :link="args.button.link" :icon="args.button.icon" iconPos="right" />
            </div>
          </div>
          <div
            class="hide-on-light w-full md:w-1/2 md:bg-cover md:bg-[url('https://www.azion.com/assets/pages/products/images/dark/edge-network/live-map.png')] rounded" />
          <div
            class="hide-on-dark w-full md:w-1/2 md:bg-cover md:bg-center md:bg-[url('https://www.azion.com/assets/pages/products/images/light/edge-network/live-map.png')] rounded" />
        </div>
      </template>
    </CardBase>
  </div>
</Container>`

const Template = (args) => ({
  components: { CardBase, Overline, CardTitle, CardDescription, LinkButton, Container },
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
