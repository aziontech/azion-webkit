import Container from '../../../templates/container'
import HeroIframeRight from '../../../templates/heroiframeright'
import Rules from '../../rules'

const MOCK = {
  id: 'hero-iframe',
  overline: 'Get started',
  titleTag: 'h1',
  title: 'Build at the edge, faster',
  description:
    'Deploy globally in minutes with our edge platform. Enhance performance, security and scalability.',
  list: [
    { icon: 'pi pi-check', title: 'Global scale', description: 'Run closer to your users' },
    { icon: 'pi pi-bolt', title: 'Lightning fast', description: 'Ultra-low latency' },
    { icon: 'pi pi-shield', title: 'Secure', description: 'Enterprise-grade security' }
  ],
  position: 'right',
  margin: 'default',
  iframeUrl: 'https://web-assessment.azion.app/'
}

const HeroDisplay = `
<Container class="surface-ground">
  <HeroIframeRight v-bind="args" />
</Container>
`

export default {
  title: 'Blocks/Hero/hero-iframe-right',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Controls the layout position of content and main slot'
    },
    titleTag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading tag used for the title'
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
  components: { Container, HeroIframeRight },
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

export const PositionLeft = Template.bind({})
PositionLeft.args = { ...MOCK, position: 'left' }
PositionLeft.parameters = {
  docs: {
    description: { story: 'Hero with content positioned on the left side' },
    source: { code: HeroDisplay }
  }
}
