import NetworkList from '../../blocks/NetworkList/NetworkList.vue'

export default {
  title: 'Blocks/Rebranding/NetworkList',
  component: NetworkList,
  tags: ['autodocs'],
  argTypes: {}
}

const Template = (args) => ({
  components: { NetworkList },
  setup() {
    return { args }
  },
  template: `
  <div class="bg-black p-6">
    <NetworkList v-bind="args" />
  </div>
  `
})

const title = 'Fastest distributed network in the planet'
const overlines = ['100+ points of presence', '100tb/s']
const descriptionHtml = `<strong>+120 points of presence</strong> across the globe so your data and application are where your users are`
const items = [
  { id: 1, titleup: 'Better TCO', title: '70%' },
  { id: 2, titleup: 'Faster Applications', title: '10x' },
  { id: 3, titleup: 'Availability, backed by an SLA', title: '100%' },
  { id: 4, titleup: 'User Satisfaction', title: '95%' }
]

export const Default = Template.bind({})
Default.args = {
  title,
  overlines,
  descriptionHtml,
  items
}


