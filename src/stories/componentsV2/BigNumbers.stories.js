import BigNumbers from '../../components/bignumbers/BigNumbers.vue'

export default {
  title: 'ComponentsV2/BigNumbers',
  component: BigNumbers,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of stat objects with title, description, and icon',
      table: {
        type: { summary: 'Array<{title: string, description: string, icon: string}>' },
        required: true
      }
    },
    justify: {
      control: { type: 'select' },
      options: ['center', 'start'],
      description: 'Content justification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# BigNumbers Component

A carousel component for displaying impressive statistics and metrics with large numbers.

## Features
- **Swiper Integration**: Smooth horizontal scrolling carousel
- **Responsive Breakpoints**: Adapts slides per view based on screen size
- **Icon Support**: PrimeVue icons in circular badges
- **Large Typography**: 80px numbers for maximum impact
- **Scrollbar**: Draggable scrollbar for navigation
- **Grab Cursor**: Interactive cursor feedback
- **Border Design**: Top border on desktop (md+)

## Responsive Behavior
- **Mobile**: 1 slide per view
- **Tablet (768px+)**: 1.5 slides per view
- **Desktop (1280px+)**: 2.5 slides per view
- **Large (1440px+)**: 3.15 slides per view

## Item Structure
Each item requires:
- \`title\`: Large number or stat (e.g., "99%", "1M+")
- \`description\`: Explanatory text (uppercase, tracking-widest)
- \`icon\`: PrimeVue icon class (e.g., "pi pi-bolt")

## Usage

\`\`\`vue
<BigNumbers 
  :items="[
    {
      title: '99.9%',
      description: 'Uptime Guarantee',
      icon: 'pi pi-check-circle'
    },
    {
      title: '150+',
      description: 'Edge Locations',
      icon: 'pi pi-globe'
    }
  ]"
  justify="center"
/>
\`\`\`

## Design Notes
- Proto Mono font for numbers and descriptions
- Light text (#EDE8E8) on dark background
- Orange border (#F3652B) on icon circles
- Scrollbar: #2B2B2B background, #EDE8E8 drag handle
- Top border: 2px #2B2B2B on desktop
- Icon circle: 56px mobile, 64px desktop
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
  components: { BigNumbers },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <BigNumbers v-bind="args" />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      title: '99.9%',
      description: 'Uptime Guarantee',
      icon: 'pi pi-check-circle'
    },
    {
      title: '150+',
      description: 'Edge Locations Worldwide',
      icon: 'pi pi-globe'
    },
    {
      title: '< 20ms',
      description: 'Average Latency',
      icon: 'pi pi-bolt'
    }
  ],
  justify: 'center'
}
Default.parameters = {
  docs: {
    description: {
      story: 'Default BigNumbers carousel with three performance metrics.'
    }
  }
}

export const CompanyStats = Template.bind({})
CompanyStats.args = {
  items: [
    {
      title: '1M+',
      description: 'Active Users',
      icon: 'pi pi-users'
    },
    {
      title: '500K',
      description: 'Daily Requests',
      icon: 'pi pi-chart-line'
    },
    {
      title: '10B+',
      description: 'API Calls Per Month',
      icon: 'pi pi-server'
    },
    {
      title: '24/7',
      description: 'Support Available',
      icon: 'pi pi-headphones'
    }
  ],
  justify: 'start'
}
CompanyStats.parameters = {
  docs: {
    description: {
      story: 'Company statistics with four metrics showing user and usage data.'
    }
  }
}

export const PerformanceMetrics = Template.bind({})
PerformanceMetrics.args = {
  items: [
    {
      title: '3x',
      description: 'Faster Load Times',
      icon: 'pi pi-bolt'
    },
    {
      title: '50%',
      description: 'Cost Reduction',
      icon: 'pi pi-dollar'
    },
    {
      title: '100%',
      description: 'Serverless Architecture',
      icon: 'pi pi-cloud'
    }
  ],
  justify: 'center'
}
PerformanceMetrics.parameters = {
  docs: {
    description: {
      story: 'Performance improvement metrics highlighting benefits.'
    }
  }
}

export const GlobalReach = Template.bind({})
GlobalReach.args = {
  items: [
    {
      title: '6',
      description: 'Continents Covered',
      icon: 'pi pi-map'
    },
    {
      title: '100+',
      description: 'Countries Served',
      icon: 'pi pi-flag'
    },
    {
      title: '200+',
      description: 'Points of Presence',
      icon: 'pi pi-map-marker'
    },
    {
      title: '5ms',
      description: 'Average Response Time',
      icon: 'pi pi-stopwatch'
    },
    {
      title: '99.99%',
      description: 'Network Availability',
      icon: 'pi pi-shield'
    }
  ],
  justify: 'center'
}
GlobalReach.parameters = {
  docs: {
    description: {
      story: 'Global infrastructure metrics with five data points.'
    }
  }
}

export const SecurityStats = Template.bind({})
SecurityStats.args = {
  items: [
    {
      title: '0',
      description: 'Data Breaches',
      icon: 'pi pi-shield'
    },
    {
      title: '100%',
      description: 'SSL/TLS Encryption',
      icon: 'pi pi-lock'
    },
    {
      title: '24/7',
      description: 'Security Monitoring',
      icon: 'pi pi-eye'
    }
  ],
  justify: 'center'
}
SecurityStats.parameters = {
  docs: {
    description: {
      story: 'Security-focused statistics emphasizing protection and monitoring.'
    }
  }
}

export const CustomerSuccess = Template.bind({})
CustomerSuccess.args = {
  items: [
    {
      title: '98%',
      description: 'Customer Satisfaction',
      icon: 'pi pi-heart'
    },
    {
      title: '4.9',
      description: 'Average Rating',
      icon: 'pi pi-star'
    },
    {
      title: '10K+',
      description: 'Happy Customers',
      icon: 'pi pi-thumbs-up'
    },
    {
      title: '95%',
      description: 'Retention Rate',
      icon: 'pi pi-refresh'
    }
  ],
  justify: 'center'
}
CustomerSuccess.parameters = {
  docs: {
    description: {
      story: 'Customer satisfaction metrics with positive indicators.'
    }
  }
}

// Two Items Only
export const TwoItems = Template.bind({})
TwoItems.args = {
  items: [
    {
      title: '10x',
      description: 'Performance Boost',
      icon: 'pi pi-bolt'
    },
    {
      title: '$0',
      description: 'Setup Fees',
      icon: 'pi pi-dollar'
    }
  ],
  justify: 'center'
}
TwoItems.parameters = {
  docs: {
    description: {
      story: 'Minimal configuration with just two statistics.'
    }
  }
}

// Many Items (Scrollable)
export const ManyItems = Template.bind({})
ManyItems.args = {
  items: [
    { title: '99.9%', description: 'Uptime', icon: 'pi pi-check' },
    { title: '150+', description: 'Locations', icon: 'pi pi-globe' },
    { title: '< 20ms', description: 'Latency', icon: 'pi pi-bolt' },
    { title: '1M+', description: 'Users', icon: 'pi pi-users' },
    { title: '10B+', description: 'Requests', icon: 'pi pi-chart-line' },
    { title: '24/7', description: 'Support', icon: 'pi pi-headphones' },
    { title: '100%', description: 'Serverless', icon: 'pi pi-cloud' },
    { title: '3x', description: 'Faster', icon: 'pi pi-forward' }
  ],
  justify: 'start'
}
ManyItems.parameters = {
  docs: {
    description: {
      story: 'Many items demonstrating scrollable carousel behavior. Drag or use scrollbar to navigate.'
    }
  }
}

// In Page Context
const PageContextTemplate = (args) => ({
  components: { BigNumbers },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black">
      <div class="max-w-7xl mx-auto py-20 px-6">
        <div class="text-center mb-16">
          <h2 class="text-white text-4xl font-bold mb-4">Trusted by Developers Worldwide</h2>
          <p class="text-neutral-400 text-lg">The numbers speak for themselves</p>
        </div>
        <BigNumbers v-bind="args" />
      </div>
    </div>
  `
})

export const InPageContext = PageContextTemplate.bind({})
InPageContext.args = {
  items: [
    { title: '1M+', description: 'Developers', icon: 'pi pi-users' },
    { title: '10B+', description: 'API Calls', icon: 'pi pi-server' },
    { title: '99.99%', description: 'Uptime', icon: 'pi pi-check-circle' },
    { title: '150+', description: 'Countries', icon: 'pi pi-globe' }
  ],
  justify: 'center'
}
InPageContext.parameters = {
  docs: {
    description: {
      story: 'BigNumbers integrated into a full page section with heading and description.'
    }
  }
}
