import ContentSection from '../../../templates/contentsection'
import CardBase from '../../../templates/cardbase'
import CardTitle from '../../../templates/cardtitle'
import CardDescription from '../../../templates/carddescription'
import Overline from '../../../templates/overline'
import LinkButton from '../../../templates/linkbutton'
import Menu from 'primevue/menu'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-horizontal-navigation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.cta}
${Rules.section.navigation}
${Rules.section.cards}
        `
      }
    }
  }
}

const config = (args) => {
  return {
    components: {
      ContentSection,
      Menu,
      CardBase,
      CardTitle,
      CardDescription,
      Overline,
      Container,
      LinkButton
    },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <ContentSection
          position="right"
          :overline="args.overline"
          :title="args.title"
          :description="args.description"
        >
          <template #actions>
            <LinkButton
              v-for="({ link, label }) in args.buttons"
              severity="secondary"
              :link="link"
              :label="label"
            />
          </template>

          <template #main>
            <div class="w-full max-w-80">
              <div class="hidden lg:block lg:top-20 lg:sticky">
                <Menu
                  :model="args.leftSidebar"
                  class="w-full"
                  :pt="{
                    menu: { class: 'flex flex-col gap-2' },
                    content: { class: 'p-2' }
                  }"
                >
                  <template #item="{ item }">
                    <a class="" :href="item.link">
                      <span class="text-sm">{{ item.label }}</span>
                    </a>
                  </template>
                </Menu>
              </div>
            </div>
          </template>

          <template #content>
            <div class="flex flex-col gap-10 lg:gap-20 mt-12">
              <div
                v-for="({ overline, id, cards }) in args.cardContent"
                :id="id"
                class="flex flex-col gap-6"
              >
                <Overline :label="overline" />
                <CardBase
                  v-for="({ title, text, links, image, alt }) in cards"
                  class="w-full"
                  spacing="compact"
                >
                  <template #content>
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-3">
                      <div class="lg:w-1/12">
                        <img width="60" height="60" :src="image" :alt="alt" />
                      </div>
                      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 m-0 lg:w-11/12">
                        <CardTitle>
                          {{ title }}
                        </CardTitle>
                        <div class="order-2 flex flex-col justify-end gap-3">
                          <LinkButton v-for="({ link, label }) in links" text size="small" :link="link" :label="label" />
                        </div>
                        <CardDescription class="xl:col-span-2 lg:row-span-2">
                          {{ text }}
                          </CardDescription>
                      </div>
                    </div>
                  </template>
                </CardBase>
              </div>
            </div>
          </template>
        </ContentSection>
      </Container>
    `
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = {
  overline: 'Compliance Expertise',
  title:
    'We are committed to ensuring that our global customers and partners can meet diverse compliance requirements.',
  description:
    'Security and Compliance are shared responsibilities between Azion and the customer. This shared model can help relieve the customer’s operational burden as Azion operates, manages and controls the components from the operating system and virtualization layer, including updates and security patches, down to the physical security of the facilities in which the service operates.',
  buttons: [
    {
      link: 'https://www.azion.com/en/documentation/shared-responsibility/',
      label: 'Visit Shared Responsibility Model'
    }
  ],
  leftSidebar: [
    {
      link: '#commercial-certifications',
      label: 'Global certifications'
    }
  ],
  cardContent: [
    {
      overline: 'Global Certifications',
      id: 'commercial-certifications',
      cards: [
        {
          title: 'SOC 2 Type 2 / SOC 3',
          text: 'Azion receives biannual SOC 2 Type 2 and SOC 3 reports, being evaluated on two different trust principles: Security and Availability. It demonstrates that the security controls are continuously audited audited over the course of the year. ',
          image: 'https://www.azion.com/assets/pages/compliance/AICPA.png',
          alt: 'AICPA Logo',
          links: [
            {
              label: 'Read documentation',
              link: 'https://www.azion.com/en/documentation/compliance/soc/ '
            }
          ]
        },
        {
          title: 'PCI DSS',
          text: "Azion annually renews its PCI DSS certification as a PCI DSS 4.0 Level 1 service provider, demonstrating the commitment to ensure that the transmission and processing of cardholder data are secure for both customers and those who interact with Azion's services.",
          image: 'https://www.azion.com/assets/pages/compliance/compliance-pci.png',
          alt: 'PCI DSS',
          links: [
            {
              label: 'Read documentation',
              link: 'https://www.azion.com/en/documentation/compliance/pci-dss-certification/ '
            }
          ]
        }
      ]
    }
  ]
}
