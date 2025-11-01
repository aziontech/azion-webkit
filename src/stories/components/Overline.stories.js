import Overline from '../../components/overline/Overline.vue'

export default {
  title: 'Components/Rebranding/Overline',
  component: Overline,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950 p-6"><story /></div>'
    })
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'orange', 'black'],
      description: 'Text color variant of the overline'
    }
  }
}

export const Default = {
  args: {
    color: 'primary'
  },
  render: (args) => ({
    components: { Overline },
    setup() {
      return { args }
    },
    template: '<Overline :color="args.color">Sign up</Overline>'
  })
}

export const Orange = {
  args: {
    color: 'orange'
  },
  render: (args) => ({
    components: { Overline },
    setup() {
      return { args }
    },
    template: '<Overline :color="args.color">Orange Overline</Overline>'
  })
}

export const Black = {
  args: {
    color: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-white p-6"><story /></div>'
    })
  ],
  render: (args) => ({
    components: { Overline },
    setup() {
      return { args }
    },
    template: '<Overline :color="args.color">Black Overline</Overline>'
  })
}
