import BigNumbers from '../../blocks/SectionBigNumbersCarousel/BigNumbers.vue'

export default {
  title: 'Blocks/Rebranding/SectionBigNumbersCarousel',
  component: BigNumbers,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0a' }]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of items to display as big numbers in the carousel'
    },
    bottomSpacing: {
      control: { type: 'select' },
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      description: 'Bottom spacing class',
      defaultValue: 'mb-24'
    },
    id: {
      control: { type: 'text' },
      description: 'Section ID attribute'
    }
  }
}

export const Default = {
  args: {
    items: [
      {
        icon: 'pi pi-check',
        title: '80%',
        description: 'Better TCO'
      },
      {
        icon: 'pi pi-shield',
        title: '10x',
        description: 'Faster Applications'
      },
      {
        icon: 'pi pi-code',
        title: '100%',
        description: 'Availability, backed by an SLA'
      },
      {
        icon: 'pi pi-stopwatch',
        title: '80k+',
        description: 'Processed requests per second at peak load'
      }
    ],
    bottomSpacing: 'mb-24'
  }
}

export const WithManyItems = {
  args: {
    items: [
      {
        icon: 'pi pi-globe',
        title: '120+',
        description: 'Points of presence worldwide'
      },
      {
        icon: 'pi pi-bolt',
        title: '10ms',
        description: 'Average latency'
      },
      {
        icon: 'pi pi-shield',
        title: '99.99%',
        description: 'Uptime SLA'
      },
      {
        icon: 'pi pi-chart-line',
        title: '200tb/s',
        description: 'Network capacity'
      },
      {
        icon: 'pi pi-users',
        title: '1M+',
        description: 'Active users'
      },
      {
        icon: 'pi pi-server',
        title: '50+',
        description: 'Countries served'
      }
    ],
    bottomSpacing: 'mb-24'
  }
}

export const WithCustomSpacing = {
  args: {
    items: [
      {
        icon: 'pi pi-check',
        title: '70%',
        description: 'Cost reduction'
      },
      {
        icon: 'pi pi-bolt',
        title: '5x',
        description: 'Performance improvement'
      }
    ],
    bottomSpacing: 'mb-48',
    id: 'custom-spacing-section'
  }
}

export const MinimalSpacing = {
  args: {
    items: [
      {
        icon: 'pi pi-star',
        title: '95%',
        description: 'Customer satisfaction'
      },
      {
        icon: 'pi pi-trophy',
        title: 'A+',
        description: 'Security rating'
      }
    ],
    bottomSpacing: 'mb-0',
    id: 'minimal-spacing-section'
  }
}
