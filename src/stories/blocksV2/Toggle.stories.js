import Toggle from '../../blocks/Toggle/Toggle.vue'

export default {
  title: 'RebrandingBlocks/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'select' },
      options: ['main', 'alternative'],
      description: 'Current selected option (v-model)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'main' }
      }
    },
    mainLabel: {
      control: { type: 'text' },
      description: 'Label for the main/left option',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'monthly' }
      }
    },
    alternativeLabel: {
      control: { type: 'text' },
      description: 'Label for the alternative/right option',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'yearly' }
      }
    },
    description: {
      control: { type: 'text' },
      description: 'Optional description text below the toggle',
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
# Toggle Block

An animated toggle switch component for binary choices (e.g., monthly/yearly billing).

## Features
- **Smooth Animation**: Sliding background with ease-out transition
- **v-model Support**: Two-way binding with parent component
- **Hover States**: Visual feedback on inactive option
- **Uppercase Labels**: Proto Mono font with tracking
- **Optional Description**: Additional text below toggle
- **Accessible**: Keyboard and click interactions

## Events
- \`update:modelValue\`: Emitted when selection changes
- \`change\`: Emitted with selected option value

## Usage

\`\`\`vue
<script setup>
import { ref } from 'vue'
const period = ref('main')
</script>

<Toggle
  v-model="period"
  main-label="monthly"
  alternative-label="yearly"
  description="Save 20% with yearly billing"
  @change="handleChange"
/>
\`\`\`

## Design Notes
- Background: #13131A (dark)
- Active background: #B5B1F4 (purple)
- Active text: neutral-900 (dark)
- Inactive text: neutral-400 (gray)
- Hover: neutral-200
- Proto Mono font, uppercase, tracking-tight
- Rounded corners with smooth transitions
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
  components: { Toggle },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8 flex justify-center">
      <Toggle v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  modelValue: 'main',
  mainLabel: 'monthly',
  alternativeLabel: 'yearly',
  description: ''
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default toggle for monthly/yearly selection without description.'
    }
  }
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  modelValue: 'main',
  mainLabel: 'monthly',
  alternativeLabel: 'yearly',
  description: 'Save up to 20% with yearly billing'
}
WithDescription.parameters = {
  docs: {
    description: {
      story: 'Toggle with description text encouraging yearly billing.'
    }
  }
}

export const YearlySelected = Template.bind({})
YearlySelected.args = {
  modelValue: 'alternative',
  mainLabel: 'monthly',
  alternativeLabel: 'yearly',
  description: 'Currently viewing yearly prices'
}
YearlySelected.parameters = {
  docs: {
    description: {
      story: 'Toggle with yearly option pre-selected.'
    }
  }
}

export const CustomLabels = Template.bind({})
CustomLabels.args = {
  modelValue: 'main',
  mainLabel: 'basic',
  alternativeLabel: 'pro',
  description: 'Choose your plan tier'
}
CustomLabels.parameters = {
  docs: {
    description: {
      story: 'Toggle with custom labels for different use case.'
    }
  }
}

export const OnOffToggle = Template.bind({})
OnOffToggle.args = {
  modelValue: 'main',
  mainLabel: 'off',
  alternativeLabel: 'on',
  description: 'Enable advanced features'
}
OnOffToggle.parameters = {
  docs: {
    description: {
      story: 'Toggle used as an on/off switch.'
    }
  }
}

// Interactive Example
const InteractiveTemplate = () => ({
  components: { Toggle },
  data() {
    return {
      selectedPeriod: 'main',
      price: 49
    }
  },
  computed: {
    displayPrice() {
      return this.selectedPeriod === 'main' ? '$49' : '$39'
    },
    savings() {
      return this.selectedPeriod === 'alternative' ? 'Save $120/year' : ''
    }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-md mx-auto text-center">
        <h3 class="text-white text-2xl font-bold mb-6">Choose Your Billing</h3>
        
        <Toggle
          v-model="selectedPeriod"
          main-label="monthly"
          alternative-label="yearly"
          description="Save up to 20% with yearly billing"
          @change="(value) => console.log('Changed to:', value)"
        />
        
        <div class="mt-8 p-6 bg-neutral-900 rounded-lg">
          <p class="text-neutral-400 text-sm mb-2">Price</p>
          <p class="text-white text-4xl font-bold mb-2">{{ displayPrice }}</p>
          <p class="text-sm text-neutral-400">{{ selectedPeriod === 'main' ? 'per month' : 'per month, billed annually' }}</p>
          <p v-if="savings" class="text-green-500 text-sm mt-2">{{ savings }}</p>
        </div>
      </div>
    </div>
  `
})

export const InteractiveExample = InteractiveTemplate.bind({})
InteractiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive example showing toggle controlling pricing display.'
    }
  }
}

// In Pricing Context
const PricingContextTemplate = () => ({
  components: { Toggle },
  data() {
    return {
      billingPeriod: 'main'
    }
  },
  template: `
    <div class="bg-black p-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-white text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p class="text-neutral-400 text-lg mb-8">Choose the plan that fits your needs</p>
          
          <Toggle
            v-model="billingPeriod"
            main-label="monthly"
            alternative-label="yearly"
            description="Save 20% with annual billing"
          />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-neutral-900 p-6 rounded-lg text-center">
            <h3 class="text-white text-xl font-bold mb-4">Starter</h3>
            <p class="text-white text-3xl font-bold">
              {{ billingPeriod === 'main' ? '$19' : '$15' }}
              <span class="text-sm text-neutral-400">/mo</span>
            </p>
          </div>
          <div class="bg-neutral-900 p-6 rounded-lg text-center">
            <h3 class="text-white text-xl font-bold mb-4">Pro</h3>
            <p class="text-white text-3xl font-bold">
              {{ billingPeriod === 'main' ? '$49' : '$39' }}
              <span class="text-sm text-neutral-400">/mo</span>
            </p>
          </div>
          <div class="bg-neutral-900 p-6 rounded-lg text-center">
            <h3 class="text-white text-xl font-bold mb-4">Enterprise</h3>
            <p class="text-white text-3xl font-bold">
              {{ billingPeriod === 'main' ? '$99' : '$79' }}
              <span class="text-sm text-neutral-400">/mo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})

export const InPricingContext = PricingContextTemplate.bind({})
InPricingContext.parameters = {
  docs: {
    description: {
      story: 'Toggle integrated into a pricing page controlling multiple card prices.'
    }
  }
}
