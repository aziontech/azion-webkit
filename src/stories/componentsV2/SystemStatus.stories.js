import SystemStatus from '../../components/SystemStatus/SystemStatus.vue'

export default {
  title: 'ComponentsV2/SystemStatus',
  component: SystemStatus,
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: { type: 'select' },
      options: ['en', 'es', 'pt-br'],
      description: 'Language for status messages',
      table: {
        type: { summary: 'string' },
        required: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# SystemStatus Component

A real-time system status indicator that fetches and displays Azion's service status.

## Features
- **Live Status**: Fetches real-time status from Azion Status API
- **Color-Coded**: Different colors for different status levels
- **Multi-language**: Supports English, Spanish, and Portuguese
- **Auto-Update**: Checks status on component mount
- **Clickable**: Links to full status page at status.azion.com
- **Responsive**: Compact design suitable for headers/footers

## Status Levels

### Operational (Green - #8bc249)
All systems running normally.

### Maintenance (Blue - #6e7cf7)
Scheduled maintenance in progress.

### Minor Outage (Yellow - #fec111)
Minor service disruption.

### Partial Outage (Orange - #f3652b)
Partial system outage affecting some services.

### Major Outage (Red - #ff4141)
Critical system-wide outage.

## API Integration
Fetches from:
- \`https://status.azion.com/api/v2/components.json\` - Component status
- \`https://status.azion.com/api/v2/status.json\` - Overall status

## Usage

\`\`\`vue
<!-- English -->
<SystemStatus lang="en" />

<!-- Portuguese -->
<SystemStatus lang="pt-br" />

<!-- Spanish -->
<SystemStatus lang="es" />
\`\`\`

## Design Notes
- Proto Mono font for technical aesthetic
- Small circular indicator (h-2 w-2)
- White text on dark backgrounds
- Gap-3 between indicator and label
- Text size: text-xs
- Links to external status page
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
  components: { SystemStatus },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-black p-8">
      <SystemStatus v-bind="args" />
    </div>
  `
})

export const English = Template.bind({})
English.args = {
  lang: 'en'
}
English.parameters = {
  docs: {
    description: {
      story: 'System status in English. Fetches live data from Azion Status API.'
    }
  }
}

export const Portuguese = Template.bind({})
Portuguese.args = {
  lang: 'pt-br'
}
Portuguese.parameters = {
  docs: {
    description: {
      story: 'System status in Portuguese (Brazil). Status messages are translated.'
    }
  }
}

export const Spanish = Template.bind({})
Spanish.args = {
  lang: 'es'
}
Spanish.parameters = {
  docs: {
    description: {
      story: 'System status in Spanish. Status messages are translated.'
    }
  }
}

// In Header Context
const HeaderTemplate = (args) => ({
  components: { SystemStatus },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-neutral-950 p-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center">
          <div class="text-white font-bold text-xl">Azion</div>
          <SystemStatus v-bind="args" />
        </div>
      </div>
    </div>
  `
})

export const InHeader = HeaderTemplate.bind({})
InHeader.args = {
  lang: 'en'
}
InHeader.parameters = {
  docs: {
    description: {
      story: 'System status positioned in a header, showing typical usage context.'
    }
  }
}

// In Footer Context
const FooterTemplate = (args) => ({
  components: { SystemStatus },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-neutral-950 p-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-white font-bold mb-4">Product</h3>
            <ul class="space-y-2 text-neutral-400 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Company</h3>
            <ul class="space-y-2 text-neutral-400 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Support</h3>
            <ul class="space-y-2 text-neutral-400 text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Status</h3>
            <SystemStatus v-bind="args" />
          </div>
        </div>
      </div>
    </div>
  `
})

export const InFooter = FooterTemplate.bind({})
InFooter.args = {
  lang: 'en'
}
InFooter.parameters = {
  docs: {
    description: {
      story: 'System status in a footer layout with other links.'
    }
  }
}

// Multiple Languages Side by Side
const MultiLanguageTemplate = () => ({
  components: { SystemStatus },
  template: `
    <div class="bg-black p-8">
      <div class="space-y-6">
        <div>
          <h3 class="text-white mb-3 font-bold text-sm">English</h3>
          <SystemStatus lang="en" />
        </div>
        <div>
          <h3 class="text-white mb-3 font-bold text-sm">Portuguese (Brazil)</h3>
          <SystemStatus lang="pt-br" />
        </div>
        <div>
          <h3 class="text-white mb-3 font-bold text-sm">Spanish</h3>
          <SystemStatus lang="es" />
        </div>
      </div>
    </div>
  `
})

export const AllLanguages = MultiLanguageTemplate.bind({})
AllLanguages.parameters = {
  docs: {
    description: {
      story: 'All supported languages displayed together for comparison.'
    }
  }
}

// Compact Layout
const CompactTemplate = (args) => ({
  components: { SystemStatus },
  setup() {
    return { args }
  },
  template: `
    <div class="bg-neutral-900 p-4 rounded-lg inline-block">
      <SystemStatus v-bind="args" />
    </div>
  `
})

export const Compact = CompactTemplate.bind({})
Compact.args = {
  lang: 'en'
}
Compact.parameters = {
  docs: {
    description: {
      story: 'System status in a compact container showing minimal space usage.'
    }
  },
  backgrounds: { default: 'dark' }
}
