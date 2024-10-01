import SectionBigNumbers from '../../../templates/sectionbignumbers'
import Container from '../../../templates/container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-bignumbers',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.section.overline}
${Rules.section.title}
${Rules.section.bigNumbers}
        `,
      },
    },
  },
}

const MOCK = {
  "title": "Achieve Unmatched Protection with Azion's Bot Management",
  "overline": "Powerful Metrics Showcasing",
  "data": {
    "justify": "start",
    "items": [
      {
        "icon": "pi pi-verified",
        "title": "4mi",
        "description": "Number of DDoS threats blocked "
      },
      {
        "icon": "pi pi-shield",
        "title": "<5s",
        "description": "Detected threat properties worldwide"
      },
      {
        "icon": "pi pi-code",
        "title": "7",
        "description": "Detected threat properties worldwide"
      },
      {
        "icon": "pi pi-stopwatch",
        "title": "80k+",
        "description": "Detected threat properties worldwide"
      }
    ]
  }
}

const template = `
<Container class="surface-ground">
  <SectionBigNumbers v-bind="args" />
</Container>`

const Template = (args) => ({
  components: { SectionBigNumbers, Container },
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
