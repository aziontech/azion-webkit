import BentoClients from '../../blocks/BentoClients/BentoClients.vue'

export default {
  title: 'BlocksV2/BentoClients',
  component: BentoClients,
  tags: ['autodocs'],
  argTypes: {
    showcaseCards: {
      control: { type: 'object' },
      description: 'Array of showcase card data',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '[]' }
      }
    },
    logoCards: {
      control: { type: 'object' },
      description: 'Array of logo card data',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '[]' }
      }
    },
    personaCards: {
      control: { type: 'object' },
      description: 'Array of client profile/persona card data',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '[]' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# BentoClients Block

A responsive bento grid layout for displaying client showcases, logos, and profiles.

## Features
- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size
- **Three Card Types**: Showcase, Logo, and Profile cards
- **Smart Layout**: Pre-defined layout pattern with responsive visibility
- **Component Mapping**: Automatically maps data to correct card components
- **Flexible Content**: Each card type accepts different data structures

## Grid Layout
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns, 3 rows
- **XL**: 4 columns, 4 rows

## Card Types

### Showcase Cards
Large feature cards highlighting key information or case studies.

### Logo Cards
Compact cards displaying client/partner logos.

### Profile Cards
Client testimonials or profile information.

## Layout Pattern
The component uses a predefined layout mixing card types:
1. Showcase
2. Profile (hidden on mobile)
3. Logo (hidden below xl)
4. Logo (hidden on mobile)
5. Showcase (hidden below xl)
6. Profile
7. Showcase
8. Empty space (xl only)
9. Logo
10. Logo (hidden on mobile)
11. Logo (hidden on mobile)

## Usage

\`\`\`vue
<BentoClients
  :showcaseCards="[
    { title: 'Case Study 1', description: '...' },
    { title: 'Case Study 2', description: '...' }
  ]"
  :logoCards="[
    { logo: 'company1.svg', alt: 'Company 1' },
    { logo: 'company2.svg', alt: 'Company 2' }
  ]"
  :personaCards="[
    { name: 'John Doe', role: 'CTO', quote: '...' }
  ]"
/>
\`\`\`

## Design Notes
- Gap: gap-3 (0.75rem)
- Min height per card: min-h-52
- Responsive visibility classes for optimal layout
- Auto-distributes cards based on layout pattern
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

const Template = (args) => ({
  components: { BentoClients },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <BentoClients v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  showcaseCards: [
    { title: 'Showcase 1', description: 'First showcase card' },
    { title: 'Showcase 2', description: 'Second showcase card' },
    { title: 'Showcase 3', description: 'Third showcase card' }
  ],
  logoCards: [
    { logo: 'Logo 1' },
    { logo: 'Logo 2' },
    { logo: 'Logo 3' },
    { logo: 'Logo 4' },
    { logo: 'Logo 5' }
  ],
  personaCards: [
    { name: 'Client 1', role: 'CEO' },
    { name: 'Client 2', role: 'CTO' }
  ]
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default bento grid with all three card types populated.'
    }
  }
}

export const ShowcaseOnly = Template.bind({})
ShowcaseOnly.args = {
  showcaseCards: [
    { title: 'Feature 1', description: 'Description 1' },
    { title: 'Feature 2', description: 'Description 2' },
    { title: 'Feature 3', description: 'Description 3' }
  ],
  logoCards: [],
  personaCards: []
}
ShowcaseOnly.parameters = {
  docs: {
    description: {
      story: 'Bento grid with only showcase cards, other positions empty.'
    }
  }
}

export const LogosOnly = Template.bind({})
LogosOnly.args = {
  showcaseCards: [],
  logoCards: [
    { logo: 'Company A' },
    { logo: 'Company B' },
    { logo: 'Company C' },
    { logo: 'Company D' },
    { logo: 'Company E' }
  ],
  personaCards: []
}
LogosOnly.parameters = {
  docs: {
    description: {
      story: 'Bento grid with only logo cards.'
    }
  }
}

export const MixedContent = Template.bind({})
MixedContent.args = {
  showcaseCards: [
    { title: 'Case Study', description: 'Success story' }
  ],
  logoCards: [
    { logo: 'Partner 1' },
    { logo: 'Partner 2' },
    { logo: 'Partner 3' }
  ],
  personaCards: [
    { name: 'Jane Smith', role: 'VP Engineering' }
  ]
}
MixedContent.parameters = {
  docs: {
    description: {
      story: 'Bento grid with mixed content - fewer items showing sparse layout.'
    }
  }
}

// Full Example
const FullTemplate = () => ({
  components: { BentoClients },
  template: `
    <div class="bg-black">
      <div class="max-w-7xl mx-auto py-20 px-6">
        <div class="text-center mb-12">
          <h2 class="text-white text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p class="text-neutral-400 text-lg">Join thousands of companies building on Azion</p>
        </div>
        <BentoClients
          :showcaseCards="[
            { title: '99.9% Uptime', description: 'Guaranteed reliability' },
            { title: '150+ Locations', description: 'Global edge network' },
            { title: '10B+ Requests', description: 'Handled daily' }
          ]"
          :logoCards="[
            { logo: 'Company A' },
            { logo: 'Company B' },
            { logo: 'Company C' },
            { logo: 'Company D' },
            { logo: 'Company E' }
          ]"
          :personaCards="[
            { name: 'John Doe', role: 'CTO at TechCorp' },
            { name: 'Jane Smith', role: 'VP Engineering' }
          ]"
        />
      </div>
    </div>
  `
})

export const FullExample = FullTemplate.bind({})
FullExample.parameters = {
  docs: {
    description: {
      story: 'Complete example with heading and fully populated bento grid.'
    }
  }
}
