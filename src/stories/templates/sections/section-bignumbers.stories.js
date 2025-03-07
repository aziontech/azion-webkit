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
        `
      }
    }
  }
}

const MOCK = {
  title: "Achieve Unmatched Protection with Azion's Bot Management",
  overline: 'Powerful Metrics Showcasing',
  data: {
    justify: 'start',
    items: [
      {
        icon: 'pi pi-verified',
        title: '4mi',
        description: 'Number of DDoS threats blocked '
      },
      {
        icon: 'pi pi-shield',
        title: '<5s',
        description: 'Detected threat properties worldwide'
      },
      {
        icon: 'pi pi-code',
        title: '7',
        description: 'Detected threat properties worldwide'
      },
      {
        icon: 'pi pi-stopwatch',
        title: '80k+',
        description: 'Detected threat properties worldwide'
      }
    ]
  }
}

const MOCK_CENTER = {
  title: "Achieve Unmatched Protection with Azion's Bot Management",
  overline: 'Powerful Metrics Showcasing',
  data: {
    justify: 'center',
    items: [
      {
        icon: 'pi pi-verified',
        title: '4mi',
        description: 'Number of DDoS threats blocked '
      },
      {
        icon: 'pi pi-shield',
        title: '<5s',
        description: 'Detected threat properties worldwide'
      },
      {
        icon: 'pi pi-code',
        title: '7',
        description: 'Detected threat properties worldwide'
      },
      {
        icon: 'pi pi-stopwatch',
        title: '80k+',
        description: 'Detected threat properties worldwide'
      }
    ]
  }
}

const template = `
  <Container class="surface-ground">
    <SectionBigNumbers v-bind="args" />
  </Container>
`

const config = (args) => {
  return {
    components: {
      SectionBigNumbers,
      Container
    },
    setup() {
      return { args }
    },
    template: template
  }
}

const Template = (args) => config(args)
export const Default = Template.bind({})
Default.args = MOCK

const Template2 = (args) => config(args)
export const Center = Template2.bind({})
Center.args = MOCK_CENTER
