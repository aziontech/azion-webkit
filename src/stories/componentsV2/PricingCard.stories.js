import PricingCard from '../../components/PricingCard/PricingCard.vue'

export default {
  title: 'Components/Rebranding/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The plan title',
      table: {
        type: { summary: 'string' }
      }
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtitle or plan description',
      table: {
        type: { summary: 'string' }
      }
    },
    popular: {
      control: { type: 'boolean' },
      description: 'Marks the card as popular with special styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    features: {
      control: { type: 'object' },
      description: 'Array of feature objects with icon and label properties',
      table: {
        type: { summary: 'Array<{icon: string, label: string}>' }
      }
    },
    monthlyPrice: {
      control: { type: 'text' },
      description: 'Monthly price (can include $ symbol)',
      table: {
        type: { summary: 'string' }
      }
    },
    annualPrice: {
      control: { type: 'text' },
      description: 'Annual price (can include $ symbol)',
      table: {
        type: { summary: 'string' }
      }
    },
    currentPeriod: {
      control: { type: 'select' },
      options: ['monthly', 'annual'],
      description: 'Current billing period to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'monthly' }
      }
    },
    priceLabel: {
      control: { type: 'text' },
      description: 'Label above the price',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start at' }
      }
    },
    buttonLabel: {
      control: { type: 'text' },
      description: 'CTA button label',
      table: {
        type: { summary: 'string' }
      }
    },
    customPrice: {
      control: { type: 'text' },
      description: 'Custom price text (e.g., "Contact us"). Overrides monthly/annual prices',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# PricingCard Component

A comprehensive pricing card component designed for displaying subscription plans and pricing tiers.

## Features
- **Popular Badge**: Highlight featured plans with an orange "Popular" badge
- **Flexible Pricing**: Support for monthly/annual pricing or custom text
- **Feature List**: Display features with PrimeVue icons
- **Responsive Design**: Adapts from mobile to desktop (w-full to w-[20rem])
- **CTA Button**: Integrated button with dynamic styling based on popularity
- **Dark Theme**: Neutral-900 background with white text
- **Typography**: Mix of Sora and Proto Mono fonts

## Pricing Modes

### Standard Pricing
Use \`monthlyPrice\` and \`annualPrice\` props with \`currentPeriod\` to toggle between them.

### Custom Pricing
Use \`customPrice\` for text like "Contact us" or "Custom" - overrides standard pricing.

## Popular Cards
When \`popular={true}\`:
- Shows orange "Popular" badge
- Primary button styling (instead of secondary)
- Light theme button

## Usage

\`\`\`vue
<PricingCard
  title="Pro"
  subtitle="For growing teams"
  :popular="true"
  :features="[
    { icon: 'pi-check', label: 'Unlimited projects' },
    { icon: 'pi-check', label: '24/7 support' }
  ]"
  monthlyPrice="$49"
  annualPrice="$39"
  currentPeriod="monthly"
  buttonLabel="Get Started"
/>
\`\`\`

## Design Notes
- Fixed height sections for consistent card heights
- Features section: h-[13rem]
- Price section: h-24
- Button hidden on mobile, visible on md+ screens
- Proto Mono font for pricing and labels
- Sora font for titles and features
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
  components: { PricingCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="flex justify-center">
        <PricingCard v-bind="args" />
      </div>
    </div>
  `
})

export const FreePlan = Template.bind({})
FreePlan.args = {
  title: 'Free',
  subtitle: 'Test, learn and vibe code',
  popular: false,
  features: [
    { icon: 'pi-check', label: '1 Workspace' },
    { icon: 'pi-check', label: 'Basic features' },
    { icon: 'pi-check', label: 'Community support' },
    { icon: 'pi-check', label: '100 GB bandwidth' }
  ],
  monthlyPrice: '$0',
  annualPrice: '$0',
  currentPeriod: 'monthly',
  priceLabel: 'Forever free',
  buttonLabel: 'Start Free'
}
FreePlan.parameters = {
  docs: {
    description: {
      story: 'Free tier pricing card with $0 price and basic features.'
    }
  }
}

export const PopularPlan = Template.bind({})
PopularPlan.args = {
  title: 'Pro',
  subtitle: 'For growing teams and businesses',
  popular: true,
  features: [
    { icon: 'pi-check', label: 'Unlimited workspaces' },
    { icon: 'pi-check', label: 'Advanced features' },
    { icon: 'pi-check', label: 'Priority support' },
    { icon: 'pi-check', label: '1 TB bandwidth' }
  ],
  monthlyPrice: '$49',
  annualPrice: '$39',
  currentPeriod: 'monthly',
  priceLabel: 'start at',
  buttonLabel: 'Get Started'
}
PopularPlan.parameters = {
  docs: {
    description: {
      story: 'Popular plan with orange badge and primary button styling.'
    }
  }
}

export const EnterprisePlan = Template.bind({})
EnterprisePlan.args = {
  title: 'Enterprise',
  subtitle: 'For large organizations',
  popular: false,
  features: [
    { icon: 'pi-check', label: 'Unlimited everything' },
    { icon: 'pi-check', label: 'Custom integrations' },
    { icon: 'pi-check', label: 'Dedicated support' },
    { icon: 'pi-check', label: 'SLA guarantee' }
  ],
  customPrice: 'Contact us',
  buttonLabel: 'Contact Sales'
}
EnterprisePlan.parameters = {
  docs: {
    description: {
      story: 'Enterprise plan with custom pricing text instead of numeric price.'
    }
  }
}

export const AnnualBilling = Template.bind({})
AnnualBilling.args = {
  title: 'Business',
  subtitle: 'Best value with annual billing',
  popular: false,
  features: [
    { icon: 'pi-check', label: '10 Workspaces' },
    { icon: 'pi-check', label: 'All features included' },
    { icon: 'pi-check', label: 'Email support' },
    { icon: 'pi-check', label: '500 GB bandwidth' }
  ],
  monthlyPrice: '$29',
  annualPrice: '$19',
  currentPeriod: 'annual',
  priceLabel: 'billed annually',
  buttonLabel: 'Subscribe'
}
AnnualBilling.parameters = {
  docs: {
    description: {
      story: 'Card showing annual pricing (lower than monthly).'
    }
  }
}

// Comparison Grid
const ComparisonTemplate = () => ({
  components: { PricingCard },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-white text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <PricingCard
            title="Starter"
            subtitle="Perfect for individuals"
            :features="[
              { icon: 'pi-check', label: '1 Workspace' },
              { icon: 'pi-check', label: 'Basic features' },
              { icon: 'pi-check', label: 'Email support' },
              { icon: 'pi-check', label: '50 GB bandwidth' }
            ]"
            monthlyPrice="$19"
            annualPrice="$15"
            currentPeriod="monthly"
            buttonLabel="Get Started"
          />
          
          <PricingCard
            title="Pro"
            subtitle="For growing teams"
            :popular="true"
            :features="[
              { icon: 'pi-check', label: '5 Workspaces' },
              { icon: 'pi-check', label: 'Advanced features' },
              { icon: 'pi-check', label: 'Priority support' },
              { icon: 'pi-check', label: '500 GB bandwidth' }
            ]"
            monthlyPrice="$49"
            annualPrice="$39"
            currentPeriod="monthly"
            buttonLabel="Get Started"
          />
          
          <PricingCard
            title="Enterprise"
            subtitle="For large organizations"
            :features="[
              { icon: 'pi-check', label: 'Unlimited workspaces' },
              { icon: 'pi-check', label: 'Custom features' },
              { icon: 'pi-check', label: 'Dedicated support' },
              { icon: 'pi-check', label: 'Unlimited bandwidth' }
            ]"
            customPrice="Contact us"
            buttonLabel="Contact Sales"
          />
        </div>
      </div>
    </div>
  `
})

export const PricingComparison = ComparisonTemplate.bind({})
PricingComparison.parameters = {
  docs: {
    description: {
      story: 'Three pricing cards in a grid layout showing a typical pricing page.'
    }
  }
}

// Four Card Layout
const FourCardTemplate = () => ({
  components: { PricingCard },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-white text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p class="text-neutral-400 text-lg">Choose the plan that fits your needs</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <PricingCard
            title="Free"
            subtitle="Get started for free"
            :features="[
              { icon: 'pi-check', label: '1 Workspace' },
              { icon: 'pi-check', label: 'Basic features' },
              { icon: 'pi-check', label: 'Community support' }
            ]"
            monthlyPrice="$0"
            buttonLabel="Start Free"
          />
          
          <PricingCard
            title="Starter"
            subtitle="For small projects"
            :features="[
              { icon: 'pi-check', label: '3 Workspaces' },
              { icon: 'pi-check', label: 'Standard features' },
              { icon: 'pi-check', label: 'Email support' }
            ]"
            monthlyPrice="$19"
            annualPrice="$15"
            currentPeriod="monthly"
            buttonLabel="Subscribe"
          />
          
          <PricingCard
            title="Pro"
            subtitle="Most popular choice"
            :popular="true"
            :features="[
              { icon: 'pi-check', label: '10 Workspaces' },
              { icon: 'pi-check', label: 'Advanced features' },
              { icon: 'pi-check', label: 'Priority support' }
            ]"
            monthlyPrice="$49"
            annualPrice="$39"
            currentPeriod="monthly"
            buttonLabel="Get Started"
          />
          
          <PricingCard
            title="Enterprise"
            subtitle="Custom solutions"
            :features="[
              { icon: 'pi-check', label: 'Unlimited' },
              { icon: 'pi-check', label: 'Custom features' },
              { icon: 'pi-check', label: 'Dedicated support' }
            ]"
            customPrice="Custom"
            buttonLabel="Contact Us"
          />
        </div>
      </div>
    </div>
  `
})

export const FourCardLayout = FourCardTemplate.bind({})
FourCardLayout.parameters = {
  docs: {
    description: {
      story: 'Four pricing cards showing a complete pricing tier system.'
    }
  }
}

// With Different Icons
const DifferentIconsTemplate = (args) => ({
  components: { PricingCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="flex justify-center">
        <PricingCard v-bind="args" />
      </div>
    </div>
  `
})

export const WithDifferentIcons = DifferentIconsTemplate.bind({})
WithDifferentIcons.args = {
  title: 'Premium',
  subtitle: 'All features included',
  popular: true,
  features: [
    { icon: 'pi-star', label: 'Premium features' },
    { icon: 'pi-bolt', label: 'Lightning fast' },
    { icon: 'pi-shield', label: 'Advanced security' },
    { icon: 'pi-users', label: 'Team collaboration' }
  ],
  monthlyPrice: '$99',
  annualPrice: '$79',
  currentPeriod: 'monthly',
  buttonLabel: 'Go Premium'
}
WithDifferentIcons.parameters = {
  docs: {
    description: {
      story: 'Pricing card using different PrimeVue icons for features instead of just check marks.'
    }
  }
}

// Minimal Features
const MinimalTemplate = (args) => ({
  components: { PricingCard },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <div class="flex justify-center">
        <PricingCard v-bind="args" />
      </div>
    </div>
  `
})

export const MinimalFeatures = MinimalTemplate.bind({})
MinimalFeatures.args = {
  title: 'Basic',
  subtitle: 'Essential features only',
  features: [
    { icon: 'pi-check', label: 'Core functionality' },
    { icon: 'pi-check', label: 'Standard support' }
  ],
  monthlyPrice: '$9',
  buttonLabel: 'Start Now'
}
MinimalFeatures.parameters = {
  docs: {
    description: {
      story: 'Card with minimal features showing how it handles fewer items.'
    }
  }
}
