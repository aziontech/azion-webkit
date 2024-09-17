
import ContentSection from '../../../templates/contentsection'
import LinkButton from "../../../templates/linkbutton";
import Carousel from 'primevue/carousel';
import CardBase from '../../../templates/cardbase'
import CardTitle from '../../../templates/cardtitle'
import CardDescription from '../../../templates/carddescription'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Sections/Card Carousel',
  tags: ['autodocs'],
}

const MOCK = {
  responsiveOptions: [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ],
  "overline": "Choose a challenge",
  "title": "Open job roles",
  "cards": [
    {
      "title": "Engineering",
      "description": "Improve your skills while building the future of computing and delivering mission-critical services to global customers.",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Engineering",
          "label": "See jobs"
        }
      ]
    },
    {
      "title": "Revenue",
      "description": "Create amazing stories with global customers.",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Revenue",
          "label": "See jobs"
        }
      ]
    },
    {
      "title": "Products",
      "description": "Build products to power the hyper-connected economy while improving methodologies and strategies.",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Products",
          "label": "See jobs"
        }
      ]
    },
    {
      "title": "Operations",
      "description": "Drive our business initiatives to successful outcomes on a global scale.",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Operations",
          "label": "See jobs"
        }
      ]
    },
    {
      "title": "Security",
      "description": "Help us secure our applications, infrastructure, networks, devices, and data.",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Security",
          "label": "See jobs"
        }
      ]
    },
    {
      "title": "DevEx",
      "description": "Ensure a great developer experience with our products",
      "buttons": [
        {
          "link": "/en/careers/jobs/?area=Developer+Experience",
          "label": "See jobs"
        }
      ]
    }
  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection :title="args.title" :overline="args.overline" position="center" titleTag="h2" isContentCentralized>
    <template #main>
      <Carousel :value="args.cards" :numVisible="4" :numScroll="1" :circular="true" :autoplayInterval="5000"
        :responsiveOptions="args.responsiveOptions" :showIndicators="false">
        <template #item="slotProps">
          <div class="px-3 h-full">
            <CardBase :spacing="args.sspacing" grid>
              <template #content>
                <CardTitle>{{ slotProps.data.title }}</CardTitle>
                <template v-if="slotProps.data.description">
                  <CardDescription> {{ slotProps.data.description }} </CardDescription>
                </template>
              </template>
              <template #actions>
                <template v-for="({ label, link }) in slotProps.data.buttons">
                  <LinkButton :label="label" :link="link" outlined />
                </template>
              </template>
            </CardBase>
          </div>
        </template>
      </Carousel>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, Carousel, CardBase, CardTitle, CardDescription, LinkButton, Container },
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
    source: { code: template }
  },
};
