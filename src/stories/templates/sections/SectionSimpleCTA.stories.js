
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'


export default {
  title: 'Blocks/Sections/Simple CTA',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "Get Started",
  "title": "Sign up now and get $300 to use for 12 months",
  "description": "Get all products and features without any upfront commitment. Cancel anytime.",
  "buttons": [
    {
      "label": "Free account",
      "link": "https://console.azion.com/signup/"
    },
    {
      "label": "Talk to an expert",
      "link": "https://www.azion.com/en/contact-sales/",
      "outlined": true
    }
  ]
}

const template = `
<div class="surface-ground py-10">
  <ContentSection :overline="args.overline" :title="args.title" :description="args.description" titleTag="h2"
    isContentCentralized position="center">
    <template #actions>
      <LinkButton v-for="button in args.buttons" v-bind="button" />
    </template>
  </ContentSection>
</div>`

const Template = (args) => ({
  components: { ContentSection, LinkButton },
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
