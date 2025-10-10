import PricingTable from '../../blocks/PricingTable/PricingTable.vue'

export default {
  title: 'Blocks/Rebranding/PricingTable',
  component: PricingTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# PricingTable Block

A simple grid wrapper component for pricing table layouts.

## Features
- **Grid Structure**: 5-column grid layout
- **Slot-based**: Content provided via default slot
- **Max Width**: 1292px with auto margins
- **Responsive**: Adapts grid on smaller screens
- **White Text**: Designed for dark backgrounds

## Purpose
This component provides the structural grid for pricing comparison tables. It's meant to be used with PricingTableHeader and PricingTableContent components as children.

## Usage

\`\`\`vue
<PricingTable>
  <PricingTableHeader :plans="plans" />
  <PricingTableContent :table="tableData" />
</PricingTable>
\`\`\`

## Design Notes
- Grid: grid-cols-5
- Max width: 1292px
- Padding: px-5
- Text color: white
- Bottom margin: mb-[25rem] (large spacing)
- Uses default slot for flexible content

## Typical Structure
1. First column: Feature names
2. Columns 2-5: Plan comparison data

## Related Components
- **PricingTableHeader**: Header row with plan names
- **PricingTableContent**: Feature comparison rows
- **PricingCard**: Individual pricing cards
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

const Template = () => ({
  components: { PricingTable },
  template: `
    <div class="bg-black p-8">
      <PricingTable>
        <div class="col-span-1 text-white font-bold p-4">Features</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Free</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Pro</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Business</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Enterprise</div>
        
        <div class="col-span-1 text-neutral-400 p-4">Storage</div>
        <div class="col-span-1 text-white p-4 text-center">10 GB</div>
        <div class="col-span-1 text-white p-4 text-center">100 GB</div>
        <div class="col-span-1 text-white p-4 text-center">1 TB</div>
        <div class="col-span-1 text-white p-4 text-center">Unlimited</div>
        
        <div class="col-span-1 text-neutral-400 p-4">Users</div>
        <div class="col-span-1 text-white p-4 text-center">1</div>
        <div class="col-span-1 text-white p-4 text-center">5</div>
        <div class="col-span-1 text-white p-4 text-center">25</div>
        <div class="col-span-1 text-white p-4 text-center">Unlimited</div>
        
        <div class="col-span-1 text-neutral-400 p-4">Support</div>
        <div class="col-span-1 text-white p-4 text-center">Email</div>
        <div class="col-span-1 text-white p-4 text-center">Priority</div>
        <div class="col-span-1 text-white p-4 text-center">24/7</div>
        <div class="col-span-1 text-white p-4 text-center">Dedicated</div>
      </PricingTable>
    </div>
  `
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    description: {
      story: 'Basic pricing table with 5 columns showing feature comparison.'
    }
  }
}

const SimpleTemplate = () => ({
  components: { PricingTable },
  template: `
    <div class="bg-black p-8">
      <PricingTable>
        <div class="text-white p-4 font-bold">Feature</div>
        <div class="text-white p-4 text-center font-bold">Plan A</div>
        <div class="text-white p-4 text-center font-bold">Plan B</div>
        <div class="text-white p-4 text-center font-bold">Plan C</div>
        <div class="text-white p-4 text-center font-bold">Plan D</div>
      </PricingTable>
    </div>
  `
})

export const HeaderOnly = SimpleTemplate.bind({})
HeaderOnly.parameters = {
  docs: {
    description: {
      story: 'Pricing table showing just the header row structure.'
    }
  }
}

const WithIconsTemplate = () => ({
  components: { PricingTable },
  template: `
    <div class="bg-black p-8">
      <PricingTable>
        <div class="col-span-1 text-white font-bold p-4">Features</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Starter</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Pro</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Business</div>
        <div class="col-span-1 text-white font-bold p-4 text-center">Enterprise</div>
        
        <div class="col-span-1 text-neutral-400 p-4">API Access</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        
        <div class="col-span-1 text-neutral-400 p-4">Advanced Analytics</div>
        <div class="col-span-1 text-neutral-600 p-4 text-center">✗</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        
        <div class="col-span-1 text-neutral-400 p-4">Custom Integrations</div>
        <div class="col-span-1 text-neutral-600 p-4 text-center">✗</div>
        <div class="col-span-1 text-neutral-600 p-4 text-center">✗</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
        <div class="col-span-1 text-white p-4 text-center">✓</div>
      </PricingTable>
    </div>
  `
})

export const WithCheckmarks = WithIconsTemplate.bind({})
WithCheckmarks.parameters = {
  docs: {
    description: {
      story: 'Pricing table using checkmarks and crosses for feature availability.'
    }
  }
}

const DetailedTemplate = () => ({
  components: { PricingTable },
  template: `
    <div class="bg-black p-8">
      <div class="text-center mb-8">
        <h2 class="text-white text-3xl font-bold mb-2">Compare Plans</h2>
        <p class="text-neutral-400">Choose the right plan for your needs</p>
      </div>
      <PricingTable>
        <div class="col-span-1 text-white font-bold p-4 border-b border-neutral-800">Features</div>
        <div class="col-span-1 text-white font-bold p-4 text-center border-b border-neutral-800">Free</div>
        <div class="col-span-1 text-white font-bold p-4 text-center border-b border-neutral-800 bg-neutral-900">Pro</div>
        <div class="col-span-1 text-white font-bold p-4 text-center border-b border-neutral-800">Business</div>
        <div class="col-span-1 text-white font-bold p-4 text-center border-b border-neutral-800">Enterprise</div>
        
        <div class="col-span-5 text-orange-500 font-bold p-4 pt-6 text-sm uppercase tracking-wider">Core Features</div>
        
        <div class="col-span-1 text-neutral-300 p-4">Bandwidth</div>
        <div class="col-span-1 text-white p-4 text-center">100 GB</div>
        <div class="col-span-1 text-white p-4 text-center bg-neutral-900">1 TB</div>
        <div class="col-span-1 text-white p-4 text-center">10 TB</div>
        <div class="col-span-1 text-white p-4 text-center">Unlimited</div>
        
        <div class="col-span-1 text-neutral-300 p-4">Edge Locations</div>
        <div class="col-span-1 text-white p-4 text-center">50+</div>
        <div class="col-span-1 text-white p-4 text-center bg-neutral-900">150+</div>
        <div class="col-span-1 text-white p-4 text-center">150+</div>
        <div class="col-span-1 text-white p-4 text-center">150+</div>
        
        <div class="col-span-5 text-orange-500 font-bold p-4 pt-6 text-sm uppercase tracking-wider">Support</div>
        
        <div class="col-span-1 text-neutral-300 p-4">Response Time</div>
        <div class="col-span-1 text-white p-4 text-center">48h</div>
        <div class="col-span-1 text-white p-4 text-center bg-neutral-900">24h</div>
        <div class="col-span-1 text-white p-4 text-center">4h</div>
        <div class="col-span-1 text-white p-4 text-center">1h</div>
      </PricingTable>
    </div>
  `
})

export const DetailedComparison = DetailedTemplate.bind({})
DetailedComparison.parameters = {
  docs: {
    description: {
      story: 'Detailed pricing comparison with section headers and highlighted column.'
    }
  }
}
