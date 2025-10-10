import Hero from '../../blocks/Hero/Hero.vue'

export default {
  title: 'Blocks/Rebranding/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Main heading text for the hero section',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtitle text displayed below the heading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button configuration objects (max 2 buttons displayed)',
      table: {
        type: { summary: 'Array<HeroButtonProps>' },
        defaultValue: { summary: '[]' }
      }
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'default', 'large'],
      description: 'Vertical padding/spacing of the hero section',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    id: {
      control: { type: 'text' },
      description: 'Optional ID attribute for the section',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Hero Block

A centered hero section component for landing pages and section headers.

## Features
- **Centered Layout**: Text and buttons centered for maximum impact
- **Responsive Typography**: Large display text on desktop, smaller on mobile
- **Flexible Buttons**: Supports up to 2 CTA buttons
- **Spacing Control**: Four spacing presets for different contexts
- **Dark Theme**: Designed for dark backgrounds with white text
- **TypeScript Support**: Full type definitions included

## Spacing Options

### None (py-0)
No vertical padding - for sections with custom spacing.

### Small (py-5 to py-20)
Compact spacing for secondary sections or tight layouts.

### Default (py-10 to py-40)
Standard spacing for most hero sections.

### Large (py-14 to py-48)
Maximum spacing for prominent hero sections.

## Button Configuration
Each button object supports:
- \`label\`: Button text
- \`href\`: Link URL
- \`type\`: Button style (primary, secondary, link, etc.)
- \`size\`: small or large
- \`icon\`: PrimeVue icon class
- \`theme\`: dark or light

## Usage

\`\`\`vue
<Hero
  title="Build at the Edge"
  subtitle="Deploy globally with our edge platform"
  :buttons="[
    {
      label: 'Get Started',
      href: '/signup',
      type: 'primary',
      size: 'small'
    },
    {
      label: 'Learn More',
      href: '/docs',
      type: 'secondary',
      size: 'small'
    }
  ]"
  spacing="default"
/>
\`\`\`

## Design Notes
- Sora font family for headings
- Title: text-4xl on mobile, display-1 on desktop
- Subtitle: text-md with neutral-300 color
- Max-width: 2xl (672px) for subtitle
- Responsive flex layout for buttons
- Gap: gap-2 on mobile, gap-5 on desktop
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
  components: { Hero },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black">
      <Hero v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Designed to Scale your business.',
  subtitle: 'From vibing to enterprise, pay as your business grow.',
  spacing: 'default'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Basic hero with title and subtitle, no buttons.'
    }
  }
}

export const WithSingleButton = Template.bind({})
WithSingleButton.args = {
  title: 'Ready to Scale?',
  subtitle: 'Start your free trial and see the difference.',
  buttons: [
    {
      label: 'Get Started',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-arrow-right'
    }
  ],
  spacing: 'default'
}
WithSingleButton.parameters = {
  docs: {
    description: {
      story: 'Hero with a single primary CTA button.'
    }
  }
}

export const WithTwoButtons = Template.bind({})
WithTwoButtons.args = {
  title: 'Build at the Edge',
  subtitle: 'Deploy your applications globally with unmatched performance.',
  buttons: [
    {
      label: 'Start Free Trial',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-check'
    },
    {
      label: 'View Documentation',
      href: '#',
      type: 'secondary',
      size: 'small',
      icon: 'pi pi-book'
    }
  ],
  spacing: 'default'
}
WithTwoButtons.parameters = {
  docs: {
    description: {
      story: 'Hero with two buttons - primary and secondary CTAs.'
    }
  }
}

export const SmallSpacing = Template.bind({})
SmallSpacing.args = {
  title: 'Compact Hero Section',
  subtitle: 'Perfect for secondary pages with less emphasis.',
  buttons: [
    {
      label: 'Learn More',
      href: '#',
      type: 'secondary',
      size: 'small'
    }
  ],
  spacing: 'small'
}
SmallSpacing.parameters = {
  docs: {
    description: {
      story: 'Hero with small spacing - good for secondary sections.'
    }
  }
}

export const LargeSpacing = Template.bind({})
LargeSpacing.args = {
  title: 'Maximum Impact',
  subtitle: 'Large spacing for prominent landing page heroes.',
  buttons: [
    {
      label: 'Get Started',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-arrow-right'
    },
    {
      label: 'Watch Demo',
      href: '#',
      type: 'secondary',
      size: 'small',
      icon: 'pi pi-play'
    }
  ],
  spacing: 'large'
}
LargeSpacing.parameters = {
  docs: {
    description: {
      story: 'Hero with large spacing for maximum visual impact.'
    }
  }
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  title: 'No Padding',
  subtitle: 'Use when you need custom spacing control.',
  spacing: 'none'
}
NoSpacing.parameters = {
  docs: {
    description: {
      story: 'Hero with no vertical padding - useful for custom layouts.'
    }
  }
}

export const LongContent = Template.bind({})
LongContent.args = {
  title: 'The Complete Edge Computing Platform for Modern Applications',
  subtitle: 'Build, deploy, and scale your applications at the edge with our developer-first platform. Experience unparalleled performance with our global network of edge locations, designed to bring your content and applications closer to your users.',
  buttons: [
    {
      label: 'Start Building',
      href: '#',
      type: 'primary',
      size: 'small'
    }
  ],
  spacing: 'default'
}
LongContent.parameters = {
  docs: {
    description: {
      story: 'Hero with longer text content showing text wrapping behavior.'
    }
  }
}

export const ShortContent = Template.bind({})
ShortContent.args = {
  title: 'Fast. Simple. Powerful.',
  subtitle: 'Edge computing made easy.',
  buttons: [
    {
      label: 'Try Now',
      href: '#',
      type: 'primary',
      size: 'small'
    }
  ],
  spacing: 'default'
}
ShortContent.parameters = {
  docs: {
    description: {
      story: 'Hero with minimal, punchy content.'
    }
  }
}

// Full Page Example
const FullPageTemplate = (args) => ({
  components: { Hero },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen flex items-center">
      <Hero v-bind="args" />
    </div>
  `
})

export const FullPageHero = FullPageTemplate.bind({})
FullPageHero.args = {
  title: 'Welcome to Azion',
  subtitle: 'The web platform for modern workloads.',
  buttons: [
    {
      label: 'Get Started Free',
      href: '#',
      type: 'primary',
      size: 'small',
      icon: 'pi pi-arrow-right'
    },
    {
      label: 'Talk to Sales',
      href: '#',
      type: 'secondary',
      size: 'small',
      icon: 'pi pi-phone'
    }
  ],
  spacing: 'large'
}
FullPageHero.parameters = {
  docs: {
    description: {
      story: 'Hero centered in a full-page layout with large spacing.'
    }
  }
}

// Multiple Heroes on Page
const MultipleTemplate = () => ({
  components: { Hero },
  template: `
    <div class="bg-black">
      <Hero
        title="Main Hero Section"
        subtitle="Large spacing for the primary hero"
        :buttons="[
          { label: 'Get Started', href: '#', type: 'primary', size: 'small' }
        ]"
        spacing="large"
      />
      
      <div class="bg-neutral-900 py-20">
        <div class="max-w-4xl mx-auto px-6">
          <p class="text-neutral-300 text-center">Some content here...</p>
        </div>
      </div>
      
      <Hero
        title="Secondary Section"
        subtitle="Small spacing for secondary hero"
        spacing="small"
      />
    </div>
  `
})

export const MultipleSections = MultipleTemplate.bind({})
MultipleSections.parameters = {
  docs: {
    description: {
      story: 'Multiple hero sections on the same page with different spacing.'
    }
  }
}
