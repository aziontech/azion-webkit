import SectionImageContent2Column from '../../blocks/SectionImageContent2Column/SectionImageContent2Column.vue'

export default {
  title: 'Blocks/Rebranding/SectionImageContent2Column',
  component: SectionImageContent2Column,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title text displayed on the left side (sticky)'
    },
    bullets: {
      control: { type: 'object' },
      description: 'Array of bullet point texts (can include HTML for bold text)'
    },
    image: {
      control: { type: 'text' },
      description: 'Image source URL'
    },
    alt: {
      control: { type: 'text' },
      description: 'Image alt text'
    },
    height: {
      control: { type: 'select' },
      options: ['default', 'large'],
      description: 'Height of the image box'
    },
    variant: {
      control: { type: 'select' },
      options: ['titleBulletsImage', 'titleImage', 'imageOnly'],
      description: 'Layout variation'
    }
  },
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
      template: '<div class="bg-neutral-950 min-h-screen"><story /></div>'
    })
  ]
}

const Template = (args) => ({
  components: { SectionImageContent2Column },
  setup() {
    return { args }
  },
  template: `<SectionImageContent2Column v-bind="args" />`
})

export const Default = Template.bind({})
Default.args = {
  title: 'Framework compatibility and development environment',
  bullets: [
    'The platform provides support for modern frameworks including Next.js, Vue, React, Angular, Gatsby, and Astro.',
    'Functions provides comprehensive observability with execution traces and performance metrics for optimization.',
    'The system supports WebAssembly execution, Node.js APIs, and WinterTC compatibility for flexible development.'
  ],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Development environment',
  height: 'default',
  variant: 'titleBulletsImage'
}
