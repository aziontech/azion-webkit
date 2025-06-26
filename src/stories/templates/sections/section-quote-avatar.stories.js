import Container from '../../../templates/container'
import SectionQuoteAvatar from '../../../templates/sectionquoteavatar'

export default {
  title: 'Blocks/Sections/section-quote-avatar',
  component: SectionQuoteAvatar
}

const MOCK = {
  data: [
    {
      text: "”Azion accelerates content delivery for Brazil's largest entertainment company.”",
      image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
      author: 'Rafael Umann, Chief Executive Officer, Azion Technologies',
      button: {
        link: 'https://www.azion.com/en/success-case/axur-reduced-time-to-takedown-with-ai/',
        label: 'See success case'
      }
    }
  ]
}

const MOCK_MULTIPLE = {
  data: [MOCK.data[0], MOCK.data[0], MOCK.data[0]]
}

const template = `
  <Container class="surface-ground">
    <div class="px-container w-full">
      <SectionQuoteAvatar v-bind="args" />
    </div>
  </Container>
`

const config = (args) => {
  return {
    components: {
      Container,
      SectionQuoteAvatar
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
export const MultipleItems = Template2.bind({})
MultipleItems.args = MOCK_MULTIPLE
