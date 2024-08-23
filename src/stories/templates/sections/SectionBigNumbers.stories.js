
import ContentSection from '../../../templates/contentsection'
import BigNumbers from '../../../templates/bignumbers'


export default {
  title: 'Blocks/Sections/Big Numbers',
  tags: ['autodocs'],
}

const MOCK = {
  "overline": "RESULTS WITH AZION",
  "title": "When our customers succeed, we succeed",
  "items": [
    {
      "icon": "pi pi-verified",
      "title": "80%",
      "description": "Better TCO"
    },
    {
      "icon": "pi pi-shield",
      "title": "100%",
      "description": "Availability, backed by an SLA"
    },
    {
      "icon": "pi pi-code",
      "title": "10x",
      "description": "Faster Applications"
    },
    {
      "icon": "pi pi-stopwatch",
      "title": "15ms",
      "description": "Response Time"
    }
  ]
}

const template = `
<div class="surface-ground py-10">
  <ContentSection position="center" isContentCentralized :overline="args.overline" :title="args.title">
    <template #content>
      <BigNumbers :items="args.items" />
    </template>
  </ContentSection>
</div>`

const Template = (args) => ({
  components: { ContentSection, BigNumbers },
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
