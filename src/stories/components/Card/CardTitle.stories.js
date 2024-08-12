import CardTitle from "../../../templates/cardtitle/CardTitle"

export default {
  title: 'Components/Card/CardTitle',
  component: CardTitle,
  tags: ['autodocs'],
  argTypes: {
    titleTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', ''],
    }
  },
}

const CardTitleTemplate = `<CardTitle v-bind="args">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                 </CardTitle>`

const Template = (args) => ({
  components: { CardTitle },
  setup() {
    return { args }
  },
  template: CardTitleTemplate
})

export const Default = Template.bind({})
