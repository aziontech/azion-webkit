
import ContentSection from '../../../templates/contentsection'
import CardBase from '../../../templates/cardbase'
import CardTitle from '../../../templates/cardtitle'
import Overline from '../../../templates/overline'
import LinkButton from '../../../templates/linkbutton'
import GridBentoBlock from '../../../templates/gridbento'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-grid-bento',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.cards}
        `,
      },
    },
  },
  argTypes: {
    gridType: {
      options: ['2-columns-3-items', '2-columns-4-items', '2-columns-5-items', '2-columns-6-items', '3-columns-4-items', '3-columns-7-items', '4-columns-5-items'],
      default: '2-columns-3-items',
      control: {
        type: 'select',
      },
    }
  }
}


const config = (args) => {
  return {
    components: {
      ContentSection,
      GridBentoBlock,
      CardBase,
      Overline,
      CardTitle,
      LinkButton,
      ImageSwitcher,
      Container
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <ContentSection :title="args.title" :overline="args.overline" :description="args.description" position="center"
          titleTag="h1" isContentCentralized textCenter>
          <template #main>
            <GridBentoBlock :gridType="args.gridType">
              <template v-for="({ title, img, overline, actions }, index) in args.cards" v-slot:[\`item-\${++index}\`]>
                <CardBase grid spacing="relaxed">
                  <template #content>
                    <Overline :label="overline" />
                    <CardTitle> {{ title }} </CardTitle>
                  </template>
                  <template v-if="actions" #actions>
                    <div>
                      <LinkButton v-for="button in actions" :outlined="button.outlined" :label="button.label"
                        :link="button.href" />
                    </div>
                  </template>
                  <template #content-raw>
                    <div class="h-full flex items-end">
                      <div v-if="img">
                        <ImageSwitcher>
                          <template #lightImage>
                            <img :src="img.src" loading="lazy" height="40" />
                          </template>
                          <template #darkImage>
                            <img :src="img.src" loading="lazy" height="40"/>
                          </template>
                        </ImageSwitcher>
                      </div>
                    </div>
                  </template>
                </CardBase>
              </template>
            </GridBentoBlock>
          </template>
        </ContentSection>
      </Container>
    `
  }
}

const Template = (args) => (config(args))
export const Default = Template.bind({})
Default.args = {
  overline: 'To the edge',
  title: 'All products and features, no upfront commitment required—cancel anytime.',
  gridType: '2-columns-4-items',
  "cards": [
    {
      "overline": "More Value",
      "title": "Find and launch a product on the Edge Firewall or the Edge Application, and it will be available in your Azion account for immediate use.",
      "img": {
        "src": "/assets/dark/asset.png",
        "alt": "An image representing the Azion Marketplace, where users can discover and launch addons and integrations for the Edge Firewall and Edge Application."
      }
    },
    {
      "overline": "Licensing Flexibility",
      "title": "You can use your existing licenses in a BYOL (Bring Your Own License) model, or purchase new licenses directly from Azion.",
      "actions": [
        {
          "label": "Try for free",
          "href": "https://console.azion.com/signup/",
          "class": "",
          "outlined": true
        }
      ]
    },
    {
      "overline": "Vendor Streamlining",
      "title": "Simplified software acquisition, with a single vendor and a single invoice.",
      "actions": [
        {
          "label": "Become a partner",
          "href": "/en/marketplace/become-a-partner/",
          "class": "",
          "outlined": true
        }
      ]
    },
    {
      "overline": "Licensing Flexibility",
      "title": "You can use your existing licenses in a BYOL (Bring Your Own License) model, or purchase new licenses directly from Azion.",
      "actions": [
        {
          "label": "Try for free",
          "href": "https://console.azion.com/signup/",
          "class": "",
          "outlined": true
        }
      ]
    },
    {
      "overline": "Vendor Streamlining",
      "title": "Simplified software acquisition, with a single vendor and a single invoice.",
      "actions": [
        {
          "label": "Become a partner",
          "href": "/en/marketplace/become-a-partner/",
          "class": "",
          "outlined": true
        }
      ]
    },
    {
      "overline": "Licensing Flexibility",
      "title": "You can use your existing licenses in a BYOL (Bring Your Own License) model, or purchase new licenses directly from Azion.",
      "actions": [
        {
          "label": "Try for free",
          "href": "https://console.azion.com/signup/",
          "class": "",
          "outlined": true
        }
      ]
    },
    {
      "overline": "Vendor Streamlining",
      "title": "Simplified software acquisition, with a single vendor and a single invoice.",
      "actions": [
        {
          "label": "Become a partner",
          "href": "/en/marketplace/become-a-partner/",
          "class": "",
          "outlined": true
        }
      ]
    }
  ],
}
