import BigNumbers from '../../templates/bignumbers'

export default {
  title: 'Components Group/Big Numbers',
  tags: ['autodocs'],
  argTypes: {
    items: {
      type: Array,
      required: true
    }
  }
}

const MOCK = {
  items: [
    {
      icon: 'pi pi-verified',
      title: '80%',
      description: 'Better TCO'
    },
    {
      icon: 'pi pi-shield',
      title: '100%',
      description: 'Availability, backed by an SLA'
    },
    {
      icon: 'pi pi-code',
      title: '10x',
      description: 'Faster Applications'
    },
    {
      icon: 'pi pi-stopwatch',
      title: '15ms',
      description: 'Response Time'
    }
  ]
}

const template = `
  <div class="py-10 px-container surface-ground">
    <BigNumbers v-bind="args" />
  </div>
`

const Template = (args) => ({
  components: { BigNumbers },
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
