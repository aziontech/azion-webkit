
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'
import UnorderedList from '../../../templates/listunordered'
import Container from '../../../templates/container'

export default {
  title: 'Blocks/Sections/Bullets Right',
  tags: ['autodocs'],
}

const MOCK = {
  overline: 'Marketplace',
  title: 'What is the Azion Marketplace?',
  description: "The Azion Marketplace is a digital catalog that makes it easy to find, test, and deploy edge-enabled software that runs anywhere. The Marketplace brings together a wide range of solutions that you can use to enhance, compose, or customize your applications.",
  "buttons": [{
    "label": "Try it for freet",
    "link": "https://console.azion.com/signup"
  }, {
    "label": "Become Partner",
    "link": "https://console.azion.com/signup",
    "outlined": "true"
  }],
  "contentListBlock": [
    {
      "icon": "pi pi-check",
      "title": "Agile",
      "description": "Run code and deploy in minutes. From prototype to enterprise scale with NoOps, just code."
    },
    {
      "icon": "pi pi-check",
      "title": "Diverse use cases",
      "description": "Fraud detection, authentication and authorization, bot mitigation, and facial recognition, using technologies such as visual computing and artificial intelligence executed at the edge."
    },
    {
      "icon": "pi pi-check",
      "title": "Cost-effective",
      "description": "Pricing is based on the edge resources and/or private edge locations in use."
    }
  ]
}

const template = `
<Container class="surface-ground">
  <ContentSection :title="args.title" :overline="args.overline" :description="args.description" titleTag="h2">
    <template #actions>
      <LinkButton v-for="({ link, label, outlined }) in args.buttons" :link="link" :label="label" :outlined="outlined" />
    </template>
    <template #main>
      <UnorderedList :data="args.contentListBlock" />
    </template>
  </ContentSection>
</Container>`

const Template = (args) => ({
  components: { ContentSection, UnorderedList, LinkButton, Container },
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
