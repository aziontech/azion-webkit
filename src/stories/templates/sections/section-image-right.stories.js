
import ContentSection from '../../../templates/contentsection/ContentSection'
import LinkButton from '../../../templates/linkbutton/LinkButton'
import ImageSwitcher from '../../../templates/themeawareimageswitcher/ImageSwitcher'
import Container from '../../../templates/container/Container'
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
${Rules.section.cta}
${Rules.section.image}
        `,
      },
    },
  },
}

const MOCK = {
  overline: 'SAVE MORE BY RESERVING',
  title: 'Get lower rates with Savings Plans',
  description: "With Savings Plans, you qualify for even greater discounts by committing to a consistent amount of usage for a period of 1, 2, or 3 years. This model provides the flexibility to use Azion's products that best fit your needs while reducing your costs by up to 78%.",
  "buttons": [{
    "label": "Create a free account",
    "link": "https://console.azion.com/signup"
  }]
}

const template = `
<Container class="surface-ground">
  <ContentSection :title="args.title" :overline="args.overline" :description="args.description" titleTag="h2">
    <template #actions>
      <LinkButton v-for="({ link, label }) in args.buttons" :link="link" :label="label" outlined />
    </template>
    <template #main>
      <ImageSwitcher>
        <template #darkImage>
          <img src="/assets/dark/illustration-demo.svg" />
        </template>
        <template #lightImage>
          <img src="/assets/light/illustration-demo.svg" />
        </template>
      </ImageSwitcher>
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
