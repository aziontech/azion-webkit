import SectionContent3Column from '../../blocks/SectionContent3Column/SectionContent3Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionContent3Column',
  component: SectionContent3Column,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    cards: {
      control: 'object',
      description: 'Array of content cards to display'
    },
    id: {
      control: 'text',
      description: 'Section ID for navigation'
    },
    gridPattern: {
      control: 'select',
      options: ['square', 'dots'],
      description: 'Pattern type for the grid background'
    }
  }
}

export const Default = {
  args: {
    cards: [
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      },
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      },
      {
        title: 'Small Title with benefit',
        description: 'This ensures efficient processing for enterprise needs.'
      }
    ],
    id: 'section-content-3-column',
    gridPattern: 'dots'
  }
}

