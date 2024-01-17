import Stats from "../templates/stats/index.vue"

export default {
  title: 'Blocks/Stats',
  component: Stats,
  tags: ['autodocs'],
  argsType: {
    tagLabel: String,
    description: String,
    bigNumber: String,
    isCentralized: Boolean,
  }
}

const Template = (args) => ({
  components: { Stats },
  setup() {
    return { args }
  },
  template: `<Stats v-bind="args"></Stats>`
})

export const Default = Template.bind({});
Default.args = {
  tagLabel: 'Label',
  bigNumber: '100k+',
  description: `lorem ipsum dolor sit amet, consectetur`,
}

export const Center = Template.bind({});
Center.args = {
  tagLabel: 'Label',
  bigNumber: '100k+',
  description: `lorem ipsum dolor sit amet, consectetur`,
  isCentralized: true,
}

export const NoLabel = Template.bind({});
NoLabel.args = {
  bigNumber: '100k+',
  description: `lorem ipsum dolor sit amet, consectetur`,
  isCentralized: true,
}
