import PricingCardCarousel from '../../blocks/PricingCardCarousel/PricingCardCarousel.vue'

export default {
  title: 'RebrandingBlocks/PricingCardCarousel',
  component: PricingCardCarousel,
  tags: ['autodocs'],
  argTypes: {
    cards: {
      control: { type: 'object' },
      description: 'Array of pricing card data objects',
      table: {
        type: { summary: 'Array' },
        required: true
      }
    },
    table: {
      control: { type: 'object' },
      description: 'Array of feature comparison table sections',
      table: {
        type: { summary: 'Array' }
      }
    },
    buttonLabel: {
      control: { type: 'text' },
      description: 'Label for sticky CTA button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'START NOW' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# PricingCardCarousel Block

A mobile-optimized pricing carousel with cards, toggle, and sticky CTA button.

## Features
- **Swiper Integration**: Smooth horizontal scrolling carousel
- **Period Toggle**: Switch between monthly/yearly pricing
- **Sticky CTA**: Button that sticks on scroll with animations
- **Responsive**: Mobile-only (hidden on md+)
- **Controlled Swipers**: Two synchronized swiper instances
- **Feature Table**: Dynamic table filtered by active card
- **Touch Gestures**: Swipe support for navigation

## Components Used
- **PricingCard**: Individual pricing cards
- **Toggle**: Monthly/yearly billing toggle
- **Button**: Sticky CTA button
- **PricingTableContent**: Feature comparison table

## Events
- \`card-click\`: Emitted when card is clicked
- \`slide-change\`: Emitted when active slide changes
- \`period-change\`: Emitted when billing period changes

## Card Structure
Each card object requires:
- \`title\`: Plan name
- \`subtitle\`: Plan description
- \`popular\`: Boolean for popular badge
- \`features\`: Array of feature objects
- \`monthlyPrice\`: Monthly price string
- \`annualPrice\`: Annual price string
- \`priceLabel\`: Label above price
- \`buttonLabel\`: CTA button text

## Usage

\`\`\`vue
<PricingCardCarousel
  :cards="[
    {
      title: 'Pro',
      subtitle: 'For teams',
      popular: true,
      features: [
        { icon: 'pi-check', label: 'Feature 1' }
      ],
      monthlyPrice: '$49',
      annualPrice: '$39',
      buttonLabel: 'Get Started'
    }
  ]"
  :table="tableData"
  buttonLabel="START NOW"
  @card-click="handleClick"
  @period-change="handlePeriodChange"
/>
\`\`\`

## Design Notes
- Mobile-only: Hidden on md+ screens
- Sticky position: top-[64px]
- Swiper spacing: 16px
- Slides per view: 1.15 (shows peek of next card)
- Fade transitions for sticky title
- Shadow on sticky button cards
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
  components: { PricingCardCarousel },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black min-h-screen p-4">
      <div class="mb-8 text-center">
        <h2 class="text-white text-3xl font-bold mb-2">Choose Your Plan</h2>
        <p class="text-neutral-400">Flexible pricing for every need</p>
      </div>
      <PricingCardCarousel v-bind="args" />
    </div>
  `
})

export const ThreePlans = Template.bind({})
ThreePlans.args = {
  cards: [
    {
      title: 'Starter',
      subtitle: 'Perfect for individuals',
      popular: false,
      features: [
        { icon: 'pi-check', label: '1 Workspace' },
        { icon: 'pi-check', label: 'Basic features' },
        { icon: 'pi-check', label: 'Email support' },
        { icon: 'pi-check', label: '50 GB bandwidth' }
      ],
      monthlyPrice: '$19',
      annualPrice: '$15',
      priceLabel: 'start at',
      buttonLabel: 'Get Started'
    },
    {
      title: 'Pro',
      subtitle: 'For growing teams',
      popular: true,
      features: [
        { icon: 'pi-check', label: '5 Workspaces' },
        { icon: 'pi-check', label: 'Advanced features' },
        { icon: 'pi-check', label: 'Priority support' },
        { icon: 'pi-check', label: '500 GB bandwidth' }
      ],
      monthlyPrice: '$49',
      annualPrice: '$39',
      priceLabel: 'start at',
      buttonLabel: 'Get Started'
    },
    {
      title: 'Enterprise',
      subtitle: 'For large organizations',
      popular: false,
      features: [
        { icon: 'pi-check', label: 'Unlimited workspaces' },
        { icon: 'pi-check', label: 'Custom features' },
        { icon: 'pi-check', label: 'Dedicated support' },
        { icon: 'pi-check', label: 'Unlimited bandwidth' }
      ],
      customPrice: 'Contact us',
      priceLabel: '',
      buttonLabel: 'Contact Sales'
    }
  ],
  table: [
    {
      overline: 'CORE FEATURES',
      title: 'Platform',
      description: 'Essential platform capabilities',
      features: [
        {
          name: 'Workspaces',
          values: ['1 Workspace', '5 Workspaces', 'Unlimited']
        },
        {
          name: 'Users',
          values: ['1 user', '5 users', 'Unlimited']
        },
        {
          name: 'API Access',
          values: [true, true, true]
        }
      ]
    }
  ],
  buttonLabel: 'START NOW'
}
ThreePlans.parameters = {
  docs: {
    description: {
      story: 'Carousel with three pricing plans including a popular option.'
    }
  }
}

export const FourPlans = Template.bind({})
FourPlans.args = {
  cards: [
    {
      title: 'Free',
      subtitle: 'Get started for free',
      popular: false,
      features: [
        { icon: 'pi-check', label: '1 Workspace' },
        { icon: 'pi-check', label: 'Basic features' },
        { icon: 'pi-check', label: 'Community support' }
      ],
      monthlyPrice: '$0',
      annualPrice: '$0',
      priceLabel: 'Forever free',
      buttonLabel: 'Start Free'
    },
    {
      title: 'Starter',
      subtitle: 'For small projects',
      popular: false,
      features: [
        { icon: 'pi-check', label: '3 Workspaces' },
        { icon: 'pi-check', label: 'Standard features' },
        { icon: 'pi-check', label: 'Email support' }
      ],
      monthlyPrice: '$19',
      annualPrice: '$15',
      priceLabel: 'start at',
      buttonLabel: 'Subscribe'
    },
    {
      title: 'Pro',
      subtitle: 'Most popular',
      popular: true,
      features: [
        { icon: 'pi-check', label: '10 Workspaces' },
        { icon: 'pi-check', label: 'Advanced features' },
        { icon: 'pi-check', label: 'Priority support' }
      ],
      monthlyPrice: '$49',
      annualPrice: '$39',
      priceLabel: 'start at',
      buttonLabel: 'Get Started'
    },
    {
      title: 'Enterprise',
      subtitle: 'Custom solutions',
      popular: false,
      features: [
        { icon: 'pi-check', label: 'Unlimited' },
        { icon: 'pi-check', label: 'Custom features' },
        { icon: 'pi-check', label: 'Dedicated support' }
      ],
      customPrice: 'Custom',
      buttonLabel: 'Contact Us'
    }
  ],
  buttonLabel: 'CHOOSE PLAN'
}
FourPlans.parameters = {
  docs: {
    description: {
      story: 'Carousel with four plans including a free tier.'
    }
  }
}

export const WithDetailedTable = Template.bind({})
WithDetailedTable.args = {
  cards: [
    {
      title: 'Basic',
      subtitle: 'Essential features',
      popular: false,
      features: [
        { icon: 'pi-check', label: 'Core features' },
        { icon: 'pi-check', label: 'Email support' }
      ],
      monthlyPrice: '$29',
      annualPrice: '$24',
      buttonLabel: 'Get Started'
    },
    {
      title: 'Professional',
      subtitle: 'Advanced capabilities',
      popular: true,
      features: [
        { icon: 'pi-check', label: 'All features' },
        { icon: 'pi-check', label: 'Priority support' }
      ],
      monthlyPrice: '$79',
      annualPrice: '$65',
      buttonLabel: 'Get Started'
    }
  ],
  table: [
    {
      overline: 'PLATFORM',
      title: 'Core Features',
      description: 'Essential platform capabilities',
      features: [
        {
          name: 'Workspaces',
          nested: true,
          values: ['5 Workspaces', 'Unlimited']
        },
        {
          name: 'Storage',
          values: ['100 GB', '1 TB']
        },
        {
          name: 'Bandwidth',
          values: ['500 GB', '5 TB']
        }
      ]
    },
    {
      overline: 'SUPPORT',
      title: 'Customer Support',
      description: 'Help when you need it',
      features: [
        {
          name: 'Email Support',
          values: [true, true]
        },
        {
          name: 'Priority Support',
          values: [false, true]
        },
        {
          name: 'Dedicated Manager',
          values: [false, true]
        }
      ]
    }
  ],
  buttonLabel: 'SELECT PLAN'
}
WithDetailedTable.parameters = {
  docs: {
    description: {
      story: 'Carousel with detailed feature comparison table below cards.'
    }
  }
}

// Interactive Example
const InteractiveTemplate = () => ({
  components: { PricingCardCarousel },
  data() {
    return {
      selectedCard: null,
      selectedPeriod: 'monthly'
    }
  },
  methods: {
    handleCardClick(data) {
      this.selectedCard = data.card
      console.log('Card clicked:', data)
    },
    handleSlideChange(data) {
      console.log('Slide changed:', data)
    },
    handlePeriodChange(period) {
      this.selectedPeriod = period
      console.log('Period changed:', period)
    }
  },
  template: `
    <div class="bg-black min-h-screen p-4">
      <div class="mb-8 text-center">
        <h2 class="text-white text-3xl font-bold mb-2">Interactive Pricing</h2>
        <p class="text-neutral-400">Swipe to explore plans</p>
      </div>
      
      <PricingCardCarousel
        :cards="[
          {
            title: 'Starter',
            subtitle: 'For individuals',
            features: [
              { icon: 'pi-check', label: 'Feature 1' },
              { icon: 'pi-check', label: 'Feature 2' }
            ],
            monthlyPrice: '$19',
            annualPrice: '$15',
            buttonLabel: 'Start'
          },
          {
            title: 'Pro',
            subtitle: 'For teams',
            popular: true,
            features: [
              { icon: 'pi-check', label: 'Feature 1' },
              { icon: 'pi-check', label: 'Feature 2' }
            ],
            monthlyPrice: '$49',
            annualPrice: '$39',
            buttonLabel: 'Start'
          }
        ]"
        @card-click="handleCardClick"
        @slide-change="handleSlideChange"
        @period-change="handlePeriodChange"
      />
      
      <div v-if="selectedCard" class="mt-8 p-4 bg-neutral-900 rounded-lg text-white text-center">
        <p class="text-sm">Selected: {{ selectedCard.title }}</p>
        <p class="text-xs text-neutral-400">Period: {{ selectedPeriod }}</p>
      </div>
    </div>
  `
})

export const InteractiveExample = InteractiveTemplate.bind({})
InteractiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive example with event handlers showing card selection and period changes.'
    }
  }
}
