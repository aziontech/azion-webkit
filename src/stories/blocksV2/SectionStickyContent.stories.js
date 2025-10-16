import SectionStickyContent from '../../blocks/SectionStickyContent/SectionStickyContent.vue'

export default {
  title: 'Blocks/Rebranding/SectionStickyContent',
  component: SectionStickyContent,
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
      values: [{ name: 'dark', value: '#000000' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-black min-h-screen"><story /></div>'
    })
  ]
}

const Template = (args) => ({
  components: { SectionStickyContent },
  setup() {
    return { args }
  },
  template: `<SectionStickyContent v-bind="args" />`
})

// Layout 1: Title on left (sticky) + Bullets below title + Image on right
export const TitleBulletsImage = Template.bind({})
TitleBulletsImage.args = {
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

// Layout 2: Title on left (sticky) + Bullets on right above image + Larger image
export const TitleImageWithBullets = Template.bind({})
TitleImageWithBullets.args = {
  title: 'Code execution and runtime processing',
  bullets: [
    'Functions Rust-based runtime processes <span class="font-bold text-neutral-200">JavaScript</span> and <span class="font-bold text-neutral-200">TypeScript</span> code directly at edge locations with zero cold starts.',
    'The system <span class="font-bold text-neutral-200">automatically handles function instantiation</span> and resource allocation across Azion\'s distributed infrastructure.',
    'Advanced request routing directs traffic to appropriate function instances based on execution rules and geographic proximity.'
  ],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Code execution',
  height: 'large',
  variant: 'titleImage'
}

// Layout 3: Image only (full width, no title or bullets)
export const ImageOnly = Template.bind({})
ImageOnly.args = {
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Full width image',
  height: 'large',
  variant: 'imageOnly'
}

// Variation: Default height with title only (no bullets)
export const TitleImageOnly = Template.bind({})
TitleImageOnly.args = {
  title: 'Simple title with image',
  bullets: [],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Simple layout',
  height: 'default',
  variant: 'titleImage'
}

// Variation: Large image with title and bullets on left
export const LargeTitleBulletsImage = Template.bind({})
LargeTitleBulletsImage.args = {
  title: 'Enhanced performance and scalability',
  bullets: [
    'Edge computing reduces latency by processing requests closer to users.',
    'Automatic scaling handles traffic spikes without manual intervention.',
    'Built-in caching optimizes response times and reduces origin load.'
  ],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  alt: 'Performance metrics',
  height: 'large',
  variant: 'titleBulletsImage'
}
