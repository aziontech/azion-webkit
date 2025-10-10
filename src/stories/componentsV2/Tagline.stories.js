import Tagline from '../../components/Tagline/Tagline.vue'

export default {
  title: 'RebrandingComponents/Tagline',
  component: Tagline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Tagline Component

A branded tagline component featuring the Azion logo and company slogan.

## Features
- **Fixed Content**: Displays "The web platform for modern workloads"
- **Azion Logo**: Integrated SVG logo on the left side
- **Bordered Design**: Clean border layout with separated sections
- **Proto Mono Font**: Uses proto-mono font family for technical aesthetic
- **Dark Theme**: Designed for light backgrounds with dark text

## Design Elements
- **Two-section Layout**: Logo section and text section
- **Border**: 1px neutral-950 border around entire component
- **Divider**: Vertical border between logo and text
- **Padding**: p-6 (1.5rem) on both sections
- **Responsive**: Maintains layout across screen sizes

## Usage

\`\`\`vue
<Tagline />
\`\`\`

## Notes
This is a static component with no props. The content and logo are fixed as part of the Azion brand identity.
        `
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' }
      ]
    }
  }
}

const Template = () => ({
  components: { Tagline },
  template: `
    <div class="bg-white p-8">
      <Tagline />
    </div>
  `
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    description: {
      story: 'Default tagline component with Azion logo and slogan.'
    }
  }
}

// Centered Layout
const CenteredTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-white p-8">
      <div class="flex justify-center">
        <Tagline />
      </div>
    </div>
  `
})

export const Centered = CenteredTemplate.bind({})
Centered.parameters = {
  docs: {
    description: {
      story: 'Tagline centered on the page.'
    }
  }
}

// With Gray Background
const GrayBackgroundTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-gray-100 p-8">
      <Tagline />
    </div>
  `
})

export const OnGrayBackground = GrayBackgroundTemplate.bind({})
OnGrayBackground.parameters = {
  docs: {
    description: {
      story: 'Tagline on a gray background showing contrast.'
    }
  }
}

// In Header Context
const HeaderContextTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12">
        <div class="flex justify-center mb-8">
          <Tagline />
        </div>
        <h1 class="text-4xl font-bold text-center text-neutral-900 mb-4">
          Welcome to Azion
        </h1>
        <p class="text-center text-neutral-600 max-w-2xl mx-auto">
          Build, secure, and scale your applications at the edge with our developer-first platform.
        </p>
      </div>
    </div>
  `
})

export const InHeaderContext = HeaderContextTemplate.bind({})
InHeaderContext.parameters = {
  docs: {
    description: {
      story: 'Tagline used in a typical header context with additional content.'
    }
  }
}

// Multiple Taglines (for comparison)
const MultipleTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-white p-8">
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-bold mb-4 text-neutral-600">Left Aligned</h3>
          <Tagline />
        </div>
        
        <div>
          <h3 class="text-sm font-bold mb-4 text-neutral-600">Centered</h3>
          <div class="flex justify-center">
            <Tagline />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-bold mb-4 text-neutral-600">Right Aligned</h3>
          <div class="flex justify-end">
            <Tagline />
          </div>
        </div>
      </div>
    </div>
  `
})

export const AlignmentVariations = MultipleTemplate.bind({})
AlignmentVariations.parameters = {
  docs: {
    description: {
      story: 'Tagline with different alignment options using flex utilities.'
    }
  }
}

// In Hero Section
const HeroTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="flex justify-center mb-12">
          <Tagline />
        </div>
        
        <div class="text-center space-y-6">
          <h1 class="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
            Build at the Edge
          </h1>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            Deploy your applications globally with our edge computing platform. 
            Experience unmatched performance and reliability.
          </p>
          <div class="flex justify-center gap-4 pt-6">
            <button class="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
              Get Started
            </button>
            <button class="px-6 py-3 border border-neutral-300 text-neutral-900 rounded-md hover:bg-neutral-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})

export const InHeroSection = HeroTemplate.bind({})
InHeroSection.parameters = {
  docs: {
    description: {
      story: 'Tagline integrated into a complete hero section layout.'
    }
  }
}

// With Content Below
const ContentBelowTemplate = () => ({
  components: { Tagline },
  template: `
    <div class="bg-white p-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-center mb-12">
          <Tagline />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 border border-neutral-200 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Edge Functions</h3>
            <p class="text-neutral-600 text-sm">
              Run code at the edge for ultra-low latency.
            </p>
          </div>
          <div class="p-6 border border-neutral-200 rounded-lg">
            <h3 class="font-bold text-lg mb-2">Global CDN</h3>
            <p class="text-neutral-600 text-sm">
              Deliver content faster with our worldwide network.
            </p>
          </div>
          <div class="p-6 border border-neutral-200 rounded-lg">
            <h3 class="font-bold text-lg mb-2">DDoS Protection</h3>
            <p class="text-neutral-600 text-sm">
              Enterprise-grade security built-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})

export const WithContentBelow = ContentBelowTemplate.bind({})
WithContentBelow.parameters = {
  docs: {
    description: {
      story: 'Tagline positioned above content cards showing a typical page layout.'
    }
  }
}
