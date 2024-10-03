
import ContentSection from '../../../templates/contentsection'
import LinkButton from '../../../templates/linkbutton'
import UnorderedList from '../../../templates/listunordered'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-bullets-right',
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
${Rules.section.list}
        `,
      },
    },
  },
}

const config = (args) => {
  return {
    components: { ContentSection, UnorderedList, LinkButton, Container },
    setup() {
      return { args }
    },
    template: `
      <Container class="surface-ground">
        <ContentSection :title="args.title" :overline="args.overline" :description="args.description" titleTag="h2">
          <template #actions>
            <LinkButton v-for="({ link, label, outlined }) in args.buttons" :link="link" :label="label" :outlined="outlined" />
          </template>
          <template #main>
            <UnorderedList :data="args.contentListBlock" />
          </template>
        </ContentSection>
      </Container>
    `
  }
}

const Template = (args) => (config(args))
export const Default = Template.bind({})
Default.args = {
  "overline": 'Marketplace',
  "title": 'What is the Azion Marketplace?',
  "description": "The Azion Marketplace is a digital catalog that makes it easy to find, test, and deploy edge-enabled software that runs anywhere. The Marketplace brings together a wide range of solutions that you can use to enhance, compose, or customize your applications.",
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
      "icon": "pi pi-bolt",
      "title": "Agile",
      "description": "Run code and deploy in minutes. From prototype to enterprise scale with NoOps, just code."
    },
    {
      "icon": "pi pi-arrow-right-arrow-left",
      "title": "Diverse use cases",
      "description": "Fraud detection, authentication and authorization, bot mitigation, and facial recognition, using technologies such as visual computing and artificial intelligence executed at the edge."
    },
    {
      "icon": "pi pi-dollar",
      "title": "Cost-effective",
      "description": "Pricing is based on the edge resources and/or private edge locations in use."
    }
  ]
}
