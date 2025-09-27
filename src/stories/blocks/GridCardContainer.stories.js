import GridCardContainer from '../../blocks/GridCardContainer/GridCardContainer.vue'

export default {
  title: 'Blocks/GridCardContainer',
  component: GridCardContainer,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title text displayed above the grid'
    },
    cards: {
      control: { type: 'object' },
      description: 'Array of card objects to display in the grid'
    },
    id: {
      control: { type: 'text' },
      description: 'Optional ID for the section element'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A grid container that displays multiple cards in a responsive layout with a title above.'
      }
    }
  }
}

const Template = (args) => ({
  components: { GridCardContainer },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-6">
      <div class="max-w-6xl mx-auto">
        <GridCardContainer v-bind="args" />
      </div>
    </div>
  `
})

export const WithExternalLinks = Template.bind({})
WithExternalLinks.args = {
  title: 'External Resources',
  cards: [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references for developers.',
      href: 'https://docs.azion.com',
      target: '_blank',
      label: 'Read docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other developers and get support from our community.',
      href: 'https://community.azion.com',
      target: '_blank',
      label: 'Join forum'
    },
    {
      title: 'GitHub Repository',
      description: 'Explore our open source projects and contribute to the codebase.',
      href: 'https://github.com/aziontech',
      target: '_blank',
      label: 'View code'
    },
    {
      title: 'Blog',
      description: 'Latest insights, tutorials, and updates from our engineering team.',
      href: 'https://blog.azion.com',
      target: '_blank',
      label: 'Read blog'
    },
    {
      title: 'Status Page',
      description: 'Real-time status updates for all Azion services and infrastructure.',
      href: 'https://status.azion.com',
      target: '_blank',
      label: 'Check status'
    },
    {
      title: 'Support Center',
      description: 'Get help with your account, billing, and technical issues.',
      href: 'https://support.azion.com',
      target: '_blank',
      label: 'Get help'
    }
  ]
}
