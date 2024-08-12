import ReadableContent from "../../templates/readablecontent/ReadableContent"

export default {
  title: 'Blocks/ReadableContent',
  component: ReadableContent,
  tags: ['autodocs'],
};

const ReadableContentTemplate = `
<ReadableContent>

  <h1>Esse componente é utilizado como um Wrapper de conteúdo para plain text</h1>

  <a href="https://github.com/tailwindlabs/tailwindcss-typography"> Tailwind Prose </a>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis laoreet nibh nec consectetur. Curabitur in est sed lacus vehicula malesuada in vel felis. Nullam nec elit at justo elementum condimentum a eget nisl. Donec urna elit, ullamcorper sit amet maximus id, ultrices non ligula. Nullam congue sem at luctus dictum. Etiam condimentum massa eu aliquam dapibus. Sed mollis pulvinar dolor at feugiat. Quisque aliquam turpis elementum, venenatis tortor vel, hendrerit ipsum. Morbi pulvinar commodo tincidunt. Nulla tristique sagittis est. Cras volutpat erat eget mollis auctor. Nullam vitae eleifend justo, sit amet pellentesque sem. Ut quis nisl neque.<p>
</ReadableContent>
`

const Template = (args) => ({
  components: { ReadableContent },
  setup() {
    return { args }
  },
  template: ReadableContentTemplate
})

export const Default = Template.bind({})
