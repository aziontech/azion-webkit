import CardLink from '../../components/CardLink/CardLink.vue'

export default {
  title: 'Components/Rebranding/CardLink',
  component: CardLink,
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
      template: '<div class="bg-neutral-950 p-12"><story /></div>'
    })
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title text displayed at the top of the card'
    },
    description: {
      control: 'text',
      description: 'The description text displayed below the title with hover animation'
    },
    href: {
      control: 'text',
      description: 'Optional URL to make the card clickable'
    },
    icon: {
      control: 'text',
      description:
        'Icon class name to display at the top of the card (e.g., "pi pi-cloud", "pi pi-shield")'
    },
    target: {
      control: 'select',
      options: ['_blank', '_self'],
      description: 'Link target attribute (only applies when href is provided)'
    }
  }
}

export const Default = {
  args: {
    title: 'Feature Titles',
    description: 'Subtitle for short description, with maximum 2 lines 100 caracteres',
    label: 'Learn More',
    href: 'https://www.azion.com',
    target: '_blank',
    icon: 'pi pi-sun'
  }
}

export const WithoutLink = {
  args: {
    title: 'Feature Titles',
    description: 'Subtitle for short description, with maximum 2 lines 100 caracteres',
    icon: 'pi pi-cloud'
  }
}

export const WithoutIcon = {
  args: {
    title: 'Feature Titles',
    description: 'Subtitle for short description, with maximum 2 lines 100 caracteres'
  }
}

export const MultipleCards = {
  render: () => ({
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardLink 
          title="Edge Computing"
          description="Deploy applications closer to your users with our global edge network."
        />
        <CardLink 
          title="Security"
          description="Advanced security features to protect your applications and data."
          icon="pi pi-shield"
        />
        <CardLink 
          title="Performance"
          description="Optimize performance with our high-speed global infrastructure."
          target='_blank'
          icon='pi pi-sun'
        />
        <CardLink 
          title="Developer Experience"
          description="Optimize performance with our high-speed global infrastructure."
          target='_blank'
        />
      </div>
    `,
    components: { CardLink }
  })
}