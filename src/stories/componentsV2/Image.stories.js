import Image from '../../components/Image/Image.vue'

export default {
  title: 'RebrandingComponents/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Image source URL',
      table: {
        type: { summary: 'string' },
        required: true
      }
    },
    alt: {
      control: { type: 'text' },
      description: 'Alternative text for accessibility',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'If true, applies w-full class',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    cover: {
      control: { type: 'boolean' },
      description: 'If true, applies object-cover and h-full',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Native loading strategy',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lazy' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Image Component

A flexible image component with responsive and cover options.

## Features
- **Full Width Control**: Toggle full-width display with \`fullWidth\` prop
- **Cover Mode**: Object-cover with full height using \`cover\` prop
- **Lazy Loading**: Built-in native lazy loading support
- **Event Handling**: Emits \`load\` and \`error\` events
- **Natural Height**: Maintains image aspect ratio by default

## Height Behavior
- **Default**: Height determined by natural image dimensions (\`h-auto\`)
- **Cover Mode**: Height fills parent container (\`h-full\`) with \`object-cover\`

## Width Behavior
- **Default**: Width determined by natural image dimensions (\`w-auto\`)
- **Full Width**: Width fills parent container (\`w-full\`)

## Usage

\`\`\`vue
<!-- Basic -->
<Image src="/image.jpg" alt="Description" />

<!-- Full Width -->
<Image src="/image.jpg" alt="Description" :fullWidth="true" />

<!-- Cover Mode (requires parent with height) -->
<div class="h-64">
  <Image src="/image.jpg" alt="Description" :cover="true" />
</div>

<!-- With Events -->
<Image 
  src="/image.jpg" 
  alt="Description"
  @load="handleLoad"
  @error="handleError"
/>
\`\`\`
        `
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' }
      ]
    }
  }
}

const Template = (args) => ({
  components: { Image },
  setup() {
    return { args }
  },
  template: `
    <div class="p-8">
      <Image v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop',
  alt: 'Beautiful landscape',
  fullWidth: false,
  cover: false,
  loading: 'lazy'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default image with natural dimensions. Height and width determined by the image itself.'
    }
  }
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=600&fit=crop',
  alt: 'Wide landscape',
  fullWidth: true,
  cover: false,
  loading: 'lazy'
}
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Image with full width. Stretches to fill parent container width while maintaining aspect ratio.'
    }
  }
}

// Cover Mode Template
const CoverTemplate = (args) => ({
  components: { Image },
  setup() {
    return { args }
  },
  template: `
    <div class="p-8">
      <div class="h-64 border-2 border-dashed border-neutral-300">
        <Image v-bind="args" />
      </div>
      <p class="text-sm text-neutral-600 mt-2">Parent container has h-64 (256px height)</p>
    </div>
  `
})

export const CoverMode = CoverTemplate.bind({})
CoverMode.args = {
  src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=800&fit=crop',
  alt: 'Cover image',
  fullWidth: true,
  cover: true,
  loading: 'lazy'
}
CoverMode.parameters = {
  docs: {
    description: {
      story: 'Cover mode fills parent height with object-cover. Requires parent container with defined height.'
    }
  }
}

// Hero Example
const HeroTemplate = (args) => ({
  components: { Image },
  setup() {
    return { args }
  },
  template: `
    <div class="relative h-96 overflow-hidden">
      <Image v-bind="args" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold mb-4">Hero Section</h1>
          <p class="text-lg">Image as background with cover mode</p>
        </div>
      </div>
    </div>
  `
})

export const HeroSection = HeroTemplate.bind({})
HeroSection.args = {
  src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&h=1080&fit=crop',
  alt: 'Hero background',
  fullWidth: true,
  cover: true,
  loading: 'eager'
}
HeroSection.parameters = {
  docs: {
    description: {
      story: 'Hero section example with image as background. Uses eager loading for above-the-fold content.'
    }
  }
}

// Gallery Example
const GalleryTemplate = () => ({
  components: { Image },
  template: `
    <div class="p-8">
      <h2 class="text-2xl font-bold mb-6">Image Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="aspect-square overflow-hidden rounded-lg">
          <Image 
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=400&fit=crop"
            alt="Gallery image 1"
            :fullWidth="true"
            :cover="true"
          />
        </div>
        <div class="aspect-square overflow-hidden rounded-lg">
          <Image 
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400&h=400&fit=crop"
            alt="Gallery image 2"
            :fullWidth="true"
            :cover="true"
          />
        </div>
        <div class="aspect-square overflow-hidden rounded-lg">
          <Image 
            src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=400&fit=crop"
            alt="Gallery image 3"
            :fullWidth="true"
            :cover="true"
          />
        </div>
      </div>
    </div>
  `
})

export const Gallery = GalleryTemplate.bind({})
Gallery.parameters = {
  docs: {
    description: {
      story: 'Gallery layout using cover mode with aspect-square containers for consistent sizing.'
    }
  }
}

// Card Example
const CardTemplate = () => ({
  components: { Image },
  template: `
    <div class="p-8">
      <div class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=400&fit=crop"
          alt="Card image"
          :fullWidth="true"
        />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Card Title</h3>
          <p class="text-neutral-600">
            Image component used in a card layout with full width.
          </p>
        </div>
      </div>
    </div>
  `
})

export const CardImage = CardTemplate.bind({})
CardImage.parameters = {
  docs: {
    description: {
      story: 'Image used in a card component with full width and natural height.'
    }
  }
}

// With Event Handlers
const EventTemplate = () => ({
  components: { Image },
  data() {
    return {
      loadStatus: 'Loading...',
      loadTime: null
    }
  },
  methods: {
    handleLoad(event) {
      this.loadStatus = '✅ Image loaded successfully'
      this.loadTime = new Date().toLocaleTimeString()
      console.log('Image loaded:', event)
    },
    handleError(event) {
      this.loadStatus = '❌ Image failed to load'
      console.error('Image error:', event)
    }
  },
  template: `
    <div class="p-8">
      <div class="mb-4 p-4 bg-neutral-100 rounded">
        <p class="font-bold">Status: {{ loadStatus }}</p>
        <p v-if="loadTime" class="text-sm text-neutral-600">Loaded at: {{ loadTime }}</p>
      </div>
      <Image 
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop"
        alt="Image with events"
        :fullWidth="true"
        @load="handleLoad"
        @error="handleError"
      />
    </div>
  `
})

export const WithEvents = EventTemplate.bind({})
WithEvents.parameters = {
  docs: {
    description: {
      story: 'Demonstrates load and error event handling. Check console for event logs.'
    }
  }
}

// Different Sizes
const SizesTemplate = () => ({
  components: { Image },
  template: `
    <div class="p-8 space-y-8">
      <div>
        <h3 class="text-lg font-bold mb-4">Small (Natural Size)</h3>
        <Image 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=150&fit=crop"
          alt="Small image"
        />
      </div>
      
      <div>
        <h3 class="text-lg font-bold mb-4">Medium (Natural Size)</h3>
        <Image 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop"
          alt="Medium image"
        />
      </div>
      
      <div>
        <h3 class="text-lg font-bold mb-4">Large (Full Width)</h3>
        <Image 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=600&fit=crop"
          alt="Large image"
          :fullWidth="true"
        />
      </div>
    </div>
  `
})

export const DifferentSizes = SizesTemplate.bind({})
DifferentSizes.parameters = {
  docs: {
    description: {
      story: 'Images at different sizes showing natural dimensions vs full width.'
    }
  }
}

// Responsive Example
const ResponsiveTemplate = () => ({
  components: { Image },
  template: `
    <div class="p-8">
      <h2 class="text-2xl font-bold mb-6">Responsive Layout</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Portrait</h3>
          <div class="h-96 bg-neutral-100 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=800&fit=crop"
              alt="Portrait image"
              :fullWidth="true"
              :cover="true"
            />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Landscape</h3>
          <div class="h-96 bg-neutral-100 rounded-lg overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop"
              alt="Landscape image"
              :fullWidth="true"
              :cover="true"
            />
          </div>
        </div>
      </div>
    </div>
  `
})

export const ResponsiveLayout = ResponsiveTemplate.bind({})
ResponsiveLayout.parameters = {
  docs: {
    description: {
      story: 'Responsive grid layout with different aspect ratios using cover mode.'
    }
  }
}
