import Card from '../../components/Card/Card.vue'

export default {
  title: 'RebrandingComponents/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The main title text displayed in the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    description: {
      control: { type: 'text' },
      description: 'The description text displayed below the title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      control: { type: 'text' },
      description: 'Optional button label displayed at the bottom of the card (only shown when href is provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    href: {
      control: { type: 'text' },
      description: 'Optional link URL. When provided, the card becomes clickable with hover effects',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank'],
      description: 'Link target attribute (only applies when href is provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' }
      }
    },
    theme: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Visual theme variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Card Component

A flexible card component with optional link functionality and hover effects.

## Features
- **Static or Clickable**: Can be a static card or clickable link
- **Hover Effects**: Background color change and title color transition when clickable
- **Responsive**: Adapts to different screen sizes with responsive padding
- **Dark Theme**: Designed for dark backgrounds with neutral color scheme
- **Optional CTA**: Can include a tertiary button at the bottom
- **Flexible Layout**: Uses flexbox for proper content distribution

## Variants

### Static Card
Without \`href\` prop, the card is static with no hover effects or button.

### Clickable Card
With \`href\` prop, the card becomes an anchor tag with:
- Background hover effect (neutral-900 → neutral-800)
- Title color transition (neutral-100 → violet-300)
- Optional tertiary button with label

## Usage

\`\`\`vue
<!-- Static Card -->
<Card 
  title="Edge-ready infrastructure"
  description="Build, secure, and scale globally."
/>

<!-- Clickable Card -->
<Card 
  title="Explore Documentation"
  description="Start shipping faster with guides."
  label="View docs"
  href="/docs"
  target="_self"
/>
\`\`\`

## Design Notes
- Uses Sora font family for typography
- Neutral-900 background with rounded corners
- Responsive padding (p-3 on mobile, p-6 on desktop)
- Title uses display-3 class for large text
- Description uses text-xs with neutral-400 color
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
  components: { Card },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-md">
        <Card v-bind="args" />
      </div>
    </div>
  `
})

export const StaticCard = Template.bind({})
StaticCard.args = {
  title: 'Edge-ready infrastructure',
  description: 'Build, secure, and scale globally with our developer-first platform.',
  theme: 'default'
}
StaticCard.parameters = {
  docs: {
    description: {
      story: 'A static card without link functionality. No hover effects or button displayed.'
    }
  }
}

export const ClickableCard = Template.bind({})
ClickableCard.args = {
  title: 'Explore Documentation',
  description: 'Start shipping faster with comprehensive guides, examples, and API references.',
  label: 'View docs',
  href: '#',
  target: '_self',
  theme: 'default'
}
ClickableCard.parameters = {
  docs: {
    description: {
      story: 'A clickable card with hover effects and a tertiary button. The entire card is wrapped in an anchor tag.'
    }
  }
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  title: 'Visit GitHub',
  description: 'Check out our open-source projects and contribute to the community.',
  label: 'Go to GitHub',
  href: 'https://github.com/aziontech',
  target: '_blank',
  theme: 'default'
}
ExternalLink.parameters = {
  docs: {
    description: {
      story: 'Card linking to an external URL with target="_blank".'
    }
  }
}

export const LongContent = Template.bind({})
LongContent.args = {
  title: 'Advanced Edge Computing Solutions',
  description: 'Leverage our cutting-edge infrastructure to build, deploy, and scale your applications at the edge. Experience unparalleled performance with our global network of edge locations, designed to bring your content closer to your users.',
  label: 'Learn more',
  href: '#',
  theme: 'default'
}
LongContent.parameters = {
  docs: {
    description: {
      story: 'Card with longer text content to demonstrate text wrapping and layout flexibility.'
    }
  }
}

export const ShortContent = Template.bind({})
ShortContent.args = {
  title: 'Fast',
  description: 'Lightning speed.',
  label: 'Details',
  href: '#',
  theme: 'default'
}
ShortContent.parameters = {
  docs: {
    description: {
      story: 'Card with minimal content showing compact layout.'
    }
  }
}

// Grid Layout Example
const GridTemplate = () => ({
  components: { Card },
  template: `
    <div class="bg-black p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card 
          title="Edge Functions"
          description="Run serverless functions at the edge for ultra-low latency."
          label="Explore"
          href="#"
        />
        <Card 
          title="Edge Storage"
          description="Store and retrieve data with global distribution."
          label="Learn more"
          href="#"
        />
        <Card 
          title="Edge Firewall"
          description="Protect your applications with advanced security."
          label="View features"
          href="#"
        />
        <Card 
          title="Real-time Metrics"
          description="Monitor your applications with live analytics."
          label="See dashboard"
          href="#"
        />
        <Card 
          title="CDN"
          description="Deliver content faster with our global CDN."
          label="Get started"
          href="#"
        />
        <Card 
          title="DDoS Protection"
          description="Enterprise-grade protection against attacks."
          label="Learn how"
          href="#"
        />
      </div>
    </div>
  `
})

export const GridLayout = GridTemplate.bind({})
GridLayout.parameters = {
  docs: {
    description: {
      story: 'Multiple cards arranged in a responsive grid layout. Demonstrates how cards work together in a typical use case.'
    }
  }
}

// Mixed Cards (Static and Clickable)
const MixedTemplate = () => ({
  components: { Card },
  template: `
    <div class="bg-black p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <Card 
          title="Static Information"
          description="This card displays information without any link."
        />
        <Card 
          title="Clickable Action"
          description="This card is clickable and includes a button."
          label="Click me"
          href="#"
        />
        <Card 
          title="Another Static"
          description="Just displaying content, no interaction needed."
        />
        <Card 
          title="External Resource"
          description="Links to an external website."
          label="Visit site"
          href="https://azion.com"
          target="_blank"
        />
      </div>
    </div>
  `
})

export const MixedCards = MixedTemplate.bind({})
MixedCards.parameters = {
  docs: {
    description: {
      story: 'Combination of static and clickable cards showing different use cases together.'
    }
  }
}

// Hover State Demo
const HoverTemplate = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-md">
        <p class="text-white mb-4 text-sm">Hover over the card to see the transition effects:</p>
        <Card v-bind="args" />
      </div>
    </div>
  `
})

export const HoverEffects = HoverTemplate.bind({})
HoverEffects.args = {
  title: 'Hover over me',
  description: 'Watch the background change from neutral-900 to neutral-800, and the title change from neutral-100 to violet-300.',
  label: 'Interact',
  href: '#',
  theme: 'default'
}
HoverEffects.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the hover effects on a clickable card. Notice the smooth color transitions.'
    }
  }
}
