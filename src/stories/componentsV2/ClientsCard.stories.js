import ClientsCard from '../../components/ClientsCard/ClientsCard.vue'

export default {
  title: 'Components/Rebranding/ClientsCard',
  component: ClientsCard,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Label text displayed at the top-left of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    logos: {
      control: { type: 'object' },
      description: 'Array of logo objects or elements to display',
      table: {
        type: { summary: 'Array' },
        required: true
      }
    },
    link: {
      control: { type: 'text' },
      description: 'Optional URL for the card link',
      table: {
        type: { summary: 'string' },
        required: false
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# ClientsCard Component

A decorative card component designed to showcase client logos with a distinctive border design.

## Features
- **Unique Border Design**: Four corner dots creating a distinctive frame
- **Hover Effects**: Background and label color transitions on hover
- **Slot-based Content**: Logos provided via default slot for maximum flexibility
- **Link Functionality**: Entire card can be clickable
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive States**: Shows "+" indicator on hover

## Design Elements
- **Corner Dots**: White 1px dots at all four corners
- **Border**: 1px neutral-900 border
- **Label**: Top-left positioned with proto-mono font
- **Hover State**: 
  - Background changes to neutral-900
  - Label inverts to light background with dark text
  - Plus sign appears in top-right corner

## Usage

\`\`\`vue
<ClientsCard text="migrated off akamai" link="/case-studies">
  <img src="logo1.svg" alt="Client 1" />
  <img src="logo2.svg" alt="Client 2" />
  <img src="logo3.svg" alt="Client 3" />
</ClientsCard>
\`\`\`

## Slot Content
The component uses a default slot to accept any content, typically:
- SVG logos
- Image tags
- Custom logo components

Content is displayed in a flexbox with gap-9 and padding.
        `
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' }
      ]
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ClientsCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-2xl">
        <ClientsCard v-bind="args">
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#E5E7EB" />
          </svg>
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#D1D5DB" />
          </svg>
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#9CA3AF" />
          </svg>
        </ClientsCard>
      </div>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'migrated off akamai',
  link: '#'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default ClientsCard with three placeholder logos. Hover to see the interactive effects.'
    }
  }
}

export const WithoutLink = Template.bind({})
WithoutLink.args = {
  text: 'trusted by',
  link: ''
}
WithoutLink.parameters = {
  docs: {
    description: {
      story: 'ClientsCard without link functionality. Still shows hover effects but is not clickable.'
    }
  }
}

export const DifferentLabel = Template.bind({})
DifferentLabel.args = {
  text: 'powered by azion',
  link: '#'
}
DifferentLabel.parameters = {
  docs: {
    description: {
      story: 'ClientsCard with different label text.'
    }
  }
}

// Multiple Logos
const MultipleLogosTemplate = (args) => ({
  components: { ClientsCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-3xl">
        <ClientsCard v-bind="args">
          <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="80" height="30" rx="4" fill="#F59E0B" />
          </svg>
          <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="80" height="30" rx="4" fill="#10B981" />
          </svg>
          <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="80" height="30" rx="4" fill="#3B82F6" />
          </svg>
          <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="80" height="30" rx="4" fill="#EF4444" />
          </svg>
          <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="80" height="30" rx="4" fill="#8B5CF6" />
          </svg>
        </ClientsCard>
      </div>
    </div>
  `
})

export const FiveLogos = MultipleLogosTemplate.bind({})
FiveLogos.args = {
  text: 'trusted by industry leaders',
  link: '#'
}
FiveLogos.parameters = {
  docs: {
    description: {
      story: 'ClientsCard with five logos showing how it handles more content.'
    }
  }
}

// Two Logos
const TwoLogosTemplate = (args) => ({
  components: { ClientsCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-xl">
        <ClientsCard v-bind="args">
          <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="40" rx="4" fill="#E5E7EB" />
          </svg>
          <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="40" rx="4" fill="#D1D5DB" />
          </svg>
        </ClientsCard>
      </div>
    </div>
  `
})

export const TwoLogos = TwoLogosTemplate.bind({})
TwoLogos.args = {
  text: 'partners',
  link: '#'
}
TwoLogos.parameters = {
  docs: {
    description: {
      story: 'ClientsCard with just two larger logos.'
    }
  }
}

// Grid of Cards
const GridTemplate = () => ({
  components: { ClientsCard },
  template: `
    <div class="bg-black p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientsCard text="migrated from cloudflare" link="#">
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#F59E0B" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#10B981" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#3B82F6" />
          </svg>
        </ClientsCard>
        
        <ClientsCard text="switched to azion" link="#">
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#EF4444" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#8B5CF6" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#EC4899" />
          </svg>
        </ClientsCard>
        
        <ClientsCard text="powered by azion edge" link="#">
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#14B8A6" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#F97316" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#06B6D4" />
          </svg>
        </ClientsCard>
        
        <ClientsCard text="trusted globally" link="#">
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#84CC16" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#A855F7" />
          </svg>
          <svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="90" height="28" rx="4" fill="#F43F5E" />
          </svg>
        </ClientsCard>
      </div>
    </div>
  `
})

export const GridLayout = GridTemplate.bind({})
GridLayout.parameters = {
  docs: {
    description: {
      story: 'Multiple ClientsCards arranged in a grid layout showing different use cases.'
    }
  }
}

// Hover State Demo
const HoverTemplate = (args) => ({
  components: { ClientsCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-2xl">
        <p class="text-white mb-4 text-sm">Hover over the card to see:</p>
        <ul class="text-white text-sm mb-6 list-disc list-inside space-y-1">
          <li>Background changes to neutral-900</li>
          <li>Label background inverts to light</li>
          <li>Plus sign appears in top-right</li>
        </ul>
        <ClientsCard v-bind="args">
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#E5E7EB" />
          </svg>
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#D1D5DB" />
          </svg>
          <svg width="97" height="25" viewBox="0 0 97 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="97" height="25" rx="4" fill="#9CA3AF" />
          </svg>
        </ClientsCard>
      </div>
    </div>
  `
})

export const HoverEffects = HoverTemplate.bind({})
HoverEffects.args = {
  text: 'hover to see effects',
  link: '#'
}
HoverEffects.parameters = {
  docs: {
    description: {
      story: 'Demonstrates all hover effects with explanatory text.'
    }
  }
}
