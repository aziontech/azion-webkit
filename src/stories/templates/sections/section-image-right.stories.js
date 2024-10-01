
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'
import ImageSwitcher from '../../../templates/themeawareimageswitcher'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-image-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.description}
${Rules.section.image}
        `,
      },
    },
  },
}

const MOCK = {
  overline: 'Edge Connectivity',
  title: 'Azion’s robust connectivity strategy helps us deliver the best performance, availability, and resiliency to our customers',
  description: "Our highly distributed architecture includes edge nodes strategically located inside ISPs' (Internet Service Providers) last-mile networks and connectivity to multiple IXPs (Internet Exchange Points), private and public peerings, and Tier 1 transit providers around the world.",
}

const template = `
<Container class="surface-ground">
  <ContentSection :title="args.title" :overline="args.overline" :description="args.description" titleTag="h2">
    <template #actions>
      <LinkButton v-for="({ link, label }) in args.buttons" :link="link" :label="label" outlined />
    </template>
    <template #main>
    <div class="w-full">
      <ImageSwitcher>
        <template #darkImage>
          <img width="540" height="auto" src="https://www.azion.com/assets/pages/products/images/dark/edge-network/network-ilustrationEN.png" />
        </template>
        <template #lightImage>
          <img width="540" height="auto" src="https://www.azion.com/assets/pages/products/images/light/edge-network/network-ilustrationEN.png" />
        </template>
      </ImageSwitcher>
      </div>
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, ImageSwitcher, LinkButton, Container },
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
