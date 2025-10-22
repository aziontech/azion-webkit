import Overline from '../../components/overline/Overline.vue'

export default {
  title: 'Components/Rebranding/Overline',
  component: Overline,
  tags: ['autodocs'],
  argTypes: {
    // No argTypes needed since component uses slots
  }
}

export const Default = {
  render: () => ({
    components: { Overline },
    template: '<Overline>Sign up</Overline>'
  })
}
