
import ContentSection from '../../../templates/contentsection'
import CardPanelExpandable from '../../../templates/cardpanelexpandable'
import ImageSwitcher from "../../../templates/themeawareimageswitcher";
import LinkButton from "../../../templates/linkbutton";
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Sections/Card Expandable',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "Professional Services",
  "title": "Helping you achieve your business goals with Azion.",
  "description": "Azion Professional Services offerings utilize a unique methodology rooted in Azion's internal best practices to help you complete projects faster and more reliably. We take into account the constantly evolving expectations and dynamic team structures encountered along the way.",
  "cards": [
    {
      "title": "Assessment",
      "description": "We carry out a detailed analysis to understand your needs and design customized edge solutions.",
      "img": {
        "src": "https://www.azion.com/assets/pages/professional-service/assessment.png",
        "alt": ""
      },
      "imgLight": {
        "src": "https://www.azion.com/assets/pages/professional-service/light/assessment.png",
        "alt": ""
      },
      "button": {
        "link": "https://www.azion.com/en/contact-sales/",
        "label": "Talk to sales",
        "outlined": false,
        "target": "_blank"
      }
    },
    {
      "title": "Planning",
      "description": "Our team of experts identifies and designs the right solutions for your technical or business needs.",
      "img": {
        "src": "https://www.azion.com/assets/pages/professional-service/planning.png",
        "alt": ""
      },
      "imgLight": {
        "src": "https://www.azion.com/assets/pages/professional-service/light/planning.png",
        "alt": ""
      },
      "button": {
        "link": "https://www.azion.com/en/resource-hub/",
        "label": "Read our guides",
        "outlined": true,
        "target": "_blank"
      }
    },
    {
      "title": "Integration",
      "description": "Configuration in Azion Console and preparation of origin infrastructure for content delivery, with integrated validation and testing.",
      "img": {
        "src": "https://www.azion.com/assets/pages/professional-service/integration.png",
        "alt": ""
      },
      "imgLight": {
        "src": "https://www.azion.com/assets/pages/professional-service/light/integration.png",
        "alt": ""
      },
      "button": {
        "link": "https://www.azion.com/en/contact-sales/",
        "label": "Learn more",
        "outlined": true,
        "target": "_blank"
      }
    },
    {
      "title": "Support",
      "icon": "pi pi-replay",
      "description": "Do you need technical support? Access documentation, guides, whitepapers, bug reports, the Azion Community on Discord, and other channels as Service Plans",
      "img": {
        "src": "https://www.azion.com/assets/pages/professional-service/support.png",
        "alt": ""
      },
      "imgLight": {
        "src": "https://www.azion.com/assets/pages/professional-service/light/support.png",
        "alt": ""
      },
      "button": {
        "link": "https://console.azion.com/login",
        "label": "Sign in",
        "outlined": true,
        "target": "_blank"
      }
    },
    {
      "title": "Innovation",
      "icon": "pi pi-replay",
      "description": "Check out our e-book, white papers, and more to turbocharge your innovation",
      "img": {
        "src": "https://www.azion.com/assets/pages/professional-service/innovation.png",
        "alt": ""
      },
      "imgLight": {
        "src": "https://www.azion.com/assets/pages/professional-service/light/innovation.png",
        "alt": ""
      },
      "button": {
        "link": "/en/resource-hub/",
        "label": "View success cases",
        "outlined": true,
        "target": "_blank"
      }
    }
  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection titleTag="h2" position="center" isContentCentralized textCenter :title="args.title" :overline="args.overline" :description="args.description">
    <template #main>
      <CardPanelExpandable :cards="args.cards" maxHeight="xl:h-[484px]">
        <template #content="slotProps">
          <div class="relative flex flex-col justify-end rounded w-full">
            <div class="flex justify-center w-full h-full top-0 left-0 overflow-hidden rounded">
              <ImageSwitcher>
                <template #darkImage>
                  <img v-bind="{
                    ...slotProps.data.img,
                    src: slotProps.data.img.src,
                  }" class="object-cover object-top w-full xl:max-h-44" loading="lazy" height="140" width="auto" />
                </template>
                <template #lightImage>
                  <img v-bind="{
                    ...slotProps.data.imgLight,
                    src: slotProps.data.imgLight.src,
                  }" class="object-cover object-top w-full xl:max-h-44" loading="lazy" height="140" width="auto" />
                </template>
              </ImageSwitcher>
            </div>
            <div class="hide-on-light absolute w-full h-full top-0 left-0 overflow-hidden rounded gradient-to-top" />
          </div>
        </template>
        <template #actions="slotProps">
          <LinkButton v-if="slotProps.data.button" v-bind="slotProps.data.button" />
        </template>
        <template #disabledContent="slotProps">
          <div class="relative min-h-40 h-full flex flex-col justify-end rounded">
            <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded">
              <img v-bind="{
                ...slotProps.data.img,
                src: slotProps.data.img.src,
              }" class="hide-on-light w-full h-full object-cover grayscale" loading="lazy" height="288" width="auto" />
              <img v-bind="{
                ...slotProps.data.imgLight,
                src: slotProps.data.imgLight.src,
              }" class="hide-on-dark w-full h-full object-cover grayscale" loading="lazy" height="288" width="auto" />
            </div>
            <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded gradient-to-bottom" />
          </div>
        </template>
      </CardPanelExpandable>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, CardPanelExpandable, ImageSwitcher, LinkButton, Container },
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
