import Tile from '../../templates/tile'

export default {
  title: 'Azion Web Kit/Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['default', 'primary', 'warning', 'success', 'info' ]
    }
  }
}

const Template = (args) => ({
  components: { Tile },
  setup() {
    return { args }
  },
  template: `<Tile v-bing="args"> 1 </Tile>`
})

const TemplateIcon = (args) => ({
  components: { Tile },
  setup() {
    return { args }
  },
  template: `<Tile v-bing="args"> <i class="text-xs pi pi-check" /> </Tile>`
})

export const Default = Template.bind({})

export const Primary = TemplateIcon.bind({})
Primary.args = {
  severity: 'primary'
}

export const Warning = Template.bind({})
Warning.args = {
  severity: 'warning'
}

export const Success = TemplateIcon.bind({})
Success.args = {
  severity: 'success'
}

export const Info = Template.bind({})
Info.args = {
  severity: 'info'
}
