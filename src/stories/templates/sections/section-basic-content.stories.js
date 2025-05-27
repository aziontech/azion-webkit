import Container from '../../../templates/container'
import SectionBasicContent from '../../../templates/sectionbasiccontent'
import Rules from '../../rules'

export default {
  title: 'Blocks/Sections/section-basic-content',
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
  titleTag: 'h2',
  overline: 'Sobre a Azion',
  title: 'Construa com a Azion',
  description:
    'Atendemos várias das maiores empresas globais. Isso significa que você usa a Azion diariamente, quando compra, se comunica e até mesmo quando trabalha. Procuramos pessoas talentosas que compartilhem nossos valores de inovação, trabalho coletivo e a missão de impulsionar uma economia hiperconectada. ',
  wysisyg: false,
  buttons: [
    {
      label: 'login',
      link: 'https://www.azion.com/',
      outlined: false
    },
    {
      label: 'Conta gratuíta',
      link: 'https://www.azion.com/',
      outlined: true
    }
  ]
}

const template = `
  <Container class="surface-ground">
    <SectionBasicContent v-bind="args" />
  </Container>
`

const config = (args) => {
  return {
    components: {
      SectionBasicContent,
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
