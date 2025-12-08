import SectionIframe from '../../../blocks/sectioniframe/SectionIframe.js'
import Rules from '../../rules'

const MOCK = {
  id: 'section-iframe',
  iframeUrl: 'https://web-assessment.azion.app/',
  bottomSpacing: 'mb-24'
}

const HeroDisplay = `
  <SectionIframe v-bind="args" />
`

export default {
  title: 'Blocks/Rebranding/SectionIframe',
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
  components: { SectionIframe },
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
