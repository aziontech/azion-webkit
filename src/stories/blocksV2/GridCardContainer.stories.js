import GridCardContainer from '../../blocks/GridCardContainer/GridCardContainer.vue'

export default {
  title: 'Blocks/Rebranding/GridCardContainer',
  component: GridCardContainer,
  tags: ['autodocs'],
  argTypes: {
    cards: {
      control: { type: 'object' },
      description: 'Array of card objects with Card component props',
      table: {
        type: { summary: 'Array<CardProps>' },
        defaultValue: { summary: '[]' }
      }
    },
    title: {
      control: { type: 'text' },
      description: 'Section title displayed above the grid',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    id: {
      control: { type: 'text' },
      description: 'Optional ID attribute for the section',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# GridCardContainer Block

A responsive grid container for displaying multiple Card components with a section title.

## Features
- **Responsive Grid**: 1 column mobile, 2 tablet, 3 desktop
- **Card Integration**: Uses Card component from components/
- **Section Title**: Uppercase, purple accent color
- **Flexible Cards**: Each card can be static or clickable
- **Equal Heights**: Cards stretch to fill grid cells
- **TypeScript Support**: Full type definitions

## Grid Breakpoints
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns
- **Gap**: gap-2 (0.5rem)

## Card Props
Each card object supports all Card component props:
- \`title\`: Card title
- \`description\`: Card description
- \`label\`: Optional button label
- \`href\`: Optional link URL
- \`target\`: Link target
- \`theme\`: Visual theme

## Usage

\`\`\`vue
<GridCardContainer
  title="Our Products"
  id="products"
  :cards="[
    {
      title: 'Edge Functions',
      description: 'Run code at the edge',
      label: 'Learn more',
      href: '/products/functions'
    },
    {
      title: 'CDN',
      description: 'Global content delivery',
      label: 'Explore',
      href: '/products/cdn'
    }
  ]"
/>
\`\`\`

## Design Notes
- Title: #B5B1F4 (purple), uppercase, tracking-widest
- Proto Mono font for title
- Section gap: gap-4 (1rem)
- Cards have h-full for equal heights
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
  components: { GridCardContainer },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <GridCardContainer v-bind="args" />
    </div>
  `
})

export const ThreeCards = Template.bind({})
ThreeCards.args = {
  title: 'Our Products',
  id: 'products',
  cards: [
    {
      title: 'Edge Functions',
      description: 'Run serverless functions at the edge for ultra-low latency.',
      label: 'Learn more',
      href: '#'
    },
    {
      title: 'Edge Storage',
      description: 'Store and retrieve data with global distribution.',
      label: 'Explore',
      href: '#'
    },
    {
      title: 'Edge Firewall',
      description: 'Protect your applications with advanced security.',
      label: 'View features',
      href: '#'
    }
  ]
}
ThreeCards.parameters = {
  docs: {
    description: {
      story: 'Grid with three cards - perfect for desktop 3-column layout.'
    }
  }
}

export const SixCards = Template.bind({})
SixCards.args = {
  title: 'Platform Features',
  id: 'features',
  cards: [
    {
      title: 'Edge Computing',
      description: 'Deploy closer to users',
      label: 'Details',
      href: '#'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor performance live',
      label: 'View dashboard',
      href: '#'
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade security',
      label: 'Learn how',
      href: '#'
    },
    {
      title: 'Auto Scaling',
      description: 'Handle traffic spikes',
      label: 'See pricing',
      href: '#'
    },
    {
      title: 'Global CDN',
      description: 'Worldwide distribution',
      label: 'View locations',
      href: '#'
    },
    {
      title: '24/7 Support',
      description: 'Always here to help',
      label: 'Contact us',
      href: '#'
    }
  ]
}
SixCards.parameters = {
  docs: {
    description: {
      story: 'Grid with six cards showing two rows on desktop.'
    }
  }
}

export const StaticCards = Template.bind({})
StaticCards.args = {
  title: 'Key Benefits',
  id: 'benefits',
  cards: [
    {
      title: '99.9% Uptime',
      description: 'Guaranteed reliability for your applications.'
    },
    {
      title: 'Global Network',
      description: 'Over 150 edge locations worldwide.'
    },
    {
      title: 'Low Latency',
      description: 'Average response time under 20ms.'
    }
  ]
}
StaticCards.parameters = {
  docs: {
    description: {
      story: 'Grid with static cards (no links or buttons).'
    }
  }
}

export const MixedCards = Template.bind({})
MixedCards.args = {
  title: 'Solutions',
  id: 'solutions',
  cards: [
    {
      title: 'For Developers',
      description: 'Build and deploy with ease.',
      label: 'Get started',
      href: '#'
    },
    {
      title: 'For Enterprises',
      description: 'Scale with confidence and security.'
    },
    {
      title: 'For Agencies',
      description: 'Manage multiple client projects.',
      label: 'Learn more',
      href: '#'
    }
  ]
}
MixedCards.parameters = {
  docs: {
    description: {
      story: 'Grid with mixed cards - some clickable, some static.'
    }
  }
}

export const TwoCards = Template.bind({})
TwoCards.args = {
  title: 'Choose Your Path',
  id: 'paths',
  cards: [
    {
      title: 'Self-Service',
      description: 'Get started instantly with our platform. Perfect for developers and small teams.',
      label: 'Start free trial',
      href: '#'
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for large organizations. Dedicated support and SLA.',
      label: 'Contact sales',
      href: '#'
    }
  ]
}
TwoCards.parameters = {
  docs: {
    description: {
      story: 'Grid with two cards showing side-by-side comparison.'
    }
  }
}

// Full Page Context
const FullPageTemplate = () => ({
  components: { GridCardContainer },
  template: `
    <div class="bg-black">
      <div class="max-w-7xl mx-auto py-20 px-6 space-y-20">
        <GridCardContainer
          title="Core Products"
          id="core-products"
          :cards="[
            {
              title: 'Edge Functions',
              description: 'Serverless at the edge',
              label: 'Explore',
              href: '#'
            },
            {
              title: 'Edge Storage',
              description: 'Distributed data storage',
              label: 'Learn more',
              href: '#'
            },
            {
              title: 'Edge Firewall',
              description: 'Advanced security',
              label: 'View features',
              href: '#'
            }
          ]"
        />
        
        <GridCardContainer
          title="Additional Services"
          id="services"
          :cards="[
            {
              title: 'Monitoring',
              description: 'Real-time insights'
            },
            {
              title: 'Analytics',
              description: 'Detailed reporting'
            },
            {
              title: 'Support',
              description: '24/7 assistance'
            }
          ]"
        />
      </div>
    </div>
  `
})

export const MultipleSections = FullPageTemplate.bind({})
MultipleSections.parameters = {
  docs: {
    description: {
      story: 'Multiple GridCardContainer sections on the same page.'
    }
  }
}
