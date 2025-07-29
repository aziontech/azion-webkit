import Table from '../../templates/table'
import { Default as DefaultData } from '../../mock/table'

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the table'
    },
    columns: {
      control: 'object',
      description: 'Array of column names (providers)'
    },
    rows: {
      control: 'object', 
      description: 'Array of row names (metrics)'
    },
    data: {
      control: 'object',
      description: 'Matrix of cell values (row x column)'
    }
  }
}

const Template = (args) => ({
  components: { Table },
  setup() {
    return { args }
  },
  template: '<Table v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  ...DefaultData
} 
