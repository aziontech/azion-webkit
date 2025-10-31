import Container from '../../../templates/container/Container'
import SectionIframe from '../../../templates/sectioniframe/SectionIframe'
import Rules from '../../rules'

const MOCK = {
  id: 'section-iframe',
  iframeUrl: 'https://web-assessment.azion.app/'
}

const HeroDisplay = `
<Container class="surface-ground">
  <SectionIframe v-bind="args" />
</Container>
`

export default {
  title: 'Blocks/section/section-iframe',
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'Optional ID for the section element'
    },
    iframeUrl: {
      control: { type: 'text' },
      description: 'Iframe URL to render'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero?.overline || ''}
${Rules.hero?.title || ''}
${Rules.hero?.description || ''}
        `
      }
    }
  }
}

const Template = (args) => ({
  components: { Container, SectionIframe },
  setup() {
    return { args }
  },
  template: HeroDisplay
})

export const Default = Template.bind({})
Default.args = MOCK
Default.parameters = {
  docs: {
    source: { code: HeroDisplay }
  }
}
