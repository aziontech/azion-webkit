import FormBase from '../../templates/formblock'

export default {
  title: 'Components Group/FormBase',
  component: FormBase,
  tags: ['autodocs']
}

const formTemplate = `
<FormBase v-bind="args">
  <template #content>
    <img src="/assets/mocks/_slot.png" />
  </template>
  <template #actions>
      <img src="/assets/mocks/_slot.png" />
  </template>
</FormBase>
`

const Template = (args) => ({
  components: { FormBase },
  setup() {
    return { args }
  },
  template: formTemplate
})

export const Default = Template.bind({})
Default.args = {
  title: 'Form Base',
  description:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonumy euismod tempor incididunt ut labore et dolore magna aliqu compliance et'
}
