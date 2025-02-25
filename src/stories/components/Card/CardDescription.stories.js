import CardDescription from '../../../templates/carddescription'

export default {
  title: 'Components/Card/CardDescription',
  component: CardDescription,
  tags: ['autodocs'],
  argTypes: {}
}

const CardDescriptionTemplate = `<CardDescription v-bind="args">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                 </CardDescription>`

const Template = (args) => ({
  components: { CardDescription },
  setup() {
    return { args }
  },
  template: CardDescriptionTemplate
})

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}
export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
