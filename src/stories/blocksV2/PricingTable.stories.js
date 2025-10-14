import PricingTable from '../../blocks/PricingTable/PricingTable.vue'
import PricingTableHeader from '../../components/PricingTableHeader/PricingTableHeader.vue'
import PricingTableContent from '../../components/PricingTableContent/PricingTableContent.vue'

export default {
  title: 'Blocks/Rebranding/PricingTable',
  component: PricingTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

const pricingTableHeader = [
  {
    title: "Free",
    subtitle: "Start free with personal projects",
    monthlyPrice: "$0",
    annualPrice: "$0",
    buttonLabel: "Free forever"
  },
  {
    title: "Pro",
    subtitle: "Scale as independent professional",
    monthlyPrice: "$25",
    annualPrice: "$20",
    savings: "Save 20%",
    buttonLabel: "Contact Us"
  },
  {
    title: "Business",
    subtitle: "Power small businesses",
    monthlyPrice: "$250",
    annualPrice: "$200",
    savings: "Save 20%",
    buttonLabel: "Contact Us",
    popular: true
  },
  {
    title: "Enterprise",
    subtitle: "Mission-critical applications",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    buttonLabel: "Contact Us"
  }
]

const pricingTableContent = [
  {
    overline: "Managed Infrastructure",
    title: "Azion Platform",
    description: "Powering modern workloads on global infrastructure.",
    features: [
      {
        name: "Global Infrastructure",
        info: "Worldwide edge network",
        icon: "pi-check",
        values: [null, null, null, null]
      },
      {
        name: "100+ data centers",
        info: "Edge locations worldwide",
        nested: true,
        values: [true, true, true, true]
      },
      {
        name: "Automatic Routing",
        nested: true,
        values: [true, true, true, true]
      },
      {
        name: "Traffic Load Balancing",
        nested: true,
        values: [true, true, true, true]
      },
      {
        name: "Workloads",
        values: [null, null, null, null]
      },
      {
        name: "Workloads",
        nested: true,
        values: [
          "10 included",
          "20 included, then $0.10 per workload per month",
          "100 included, then $0.10 per workload per month",
          "Custom"
        ]
      },
      {
        name: "Data Transfer",
        nested: true,
        values: [
          "1 TB / month included",
          "2 TB / month included, then starting at $0.02 per GB",
          "10 TB / month included, then starting at $0.02 per GB",
          "Custom"
        ]
      },
      {
        name: "TLS Encryption",
        nested: true,
        values: [true, true, true, true]
      }
    ]
  },
  {
    overline: "Build",
    title: "Azion Applications",
    description: "Empowering developers to build, run, and scale globally.",
    features: [
      {
        name: "Applications",
        values: [null, null, null, null]
      },
      {
        name: "Requests",
        nested: true,
        values: [
          "10M / month included",
          "20M / month included, then starting at $0.90 per 1M",
          "100M / month included, then starting at $0.90 per 1M",
          "Custom"
        ]
      },
      {
        name: "Functions",
        values: [null, null, null, null]
      },
      {
        name: "Compute Time",
        nested: true,
        values: [
          "5 hours / month included",
          "10 hours / month included, then $0.18 per hour",
          "50 hours / month included, then $0.18 per hour",
          "Custom"
        ]
      },
      {
        name: "Cache",
        values: [null, null, null, null]
      },
      {
        name: "Purges",
        nested: true,
        values: [
          "1,000 / month included",
          "2,000 / month included, then $5 per 1,000 purges",
          "10,000 / month included, then $5 per 1,000 purges",
          "Custom"
        ]
      }
    ]
  }
]

export const Default = {
  render: (args) => ({
    components: { PricingTable, PricingTableHeader, PricingTableContent },
    setup() {
      return { pricingTableHeader, pricingTableContent }
    },
    template: `
      <PricingTable>
        <PricingTableHeader :plans="pricingTableHeader" />
        <PricingTableContent :table="pricingTableContent" />
      </PricingTable>
    `
  })
}
