import QuoteAvatar from '../../templates/quoteavatar'

export default {
  title: 'Components/QuoteAvatar',
  component: QuoteAvatar
}

const MOCK = {
  border: true,
  disableDegrade: false,
  text: "”Azion accelerates content delivery for Brazil's largest entertainment company.”",
  image: '	https://www.azion.com/assets/pages/about/perfil-6.png',
  author: 'Rafael Umann, Chief Executive Officer, Azion Technologies',
  button: {
    link: 'https://www.azion.com/en/success-case/axur-reduced-time-to-takedown-with-ai/',
    label: 'See success case'
  }
}

const template = `
  <div class="px-container py-10 surface-ground">
    <QuoteAvatar v-bind="args" />
  </div>
`

const Template = (args) => ({
  components: { QuoteAvatar },
  setup() {
    return { args }
  },
  template: template
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: { source: { code: template } }
}
