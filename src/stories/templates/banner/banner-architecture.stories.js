
import Container from '../../../templates/container'
import SectionHighlight from '../../../templates/sectionhighlight'
import Rules from '../../rules'

export default {
  title: 'Blocks/Banner/banner-architecture',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.image}
        `,
      },
    },
  },
}

const MOCK = {
  "overline": "Architecture",
  "title": "Protect Your Edge Applications with a Bot Management Solution",
  "button": {
    "link": "https://www.azion.com/en/resource-hub/",
    "label": "Read documentation",
    "outlined": true
  },
  "images": {
    "dark": "https://www.azion.com/assets/docs/images/uploads/application-and-network-security/dark-bot-management.png",
    "light": "https://www.azion.com/assets/docs/images/uploads/application-and-network-security/light-bot-management.png",
    "alt": ""
  }
}

const template = `
<Container class="surface-ground">
  <SectionHighlight v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionHighlight, Container },
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
