import PricingCardCarousel from '../../blocks/PricingCardCarousel/PricingCardCarousel.vue'

export default {
  title: 'Blocks/Rebranding/PricingCardCarousel',
  component: PricingCardCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    },
    docs: {
      description: {
        component: `
**IMPORTANT:** A mobile-first carousel block component for displaying pricing cards using Swiper. Designed specifically for mobile visualization showing 1.25 cards with smooth scrolling. To see the component properly, use the responsive viewport controls in Storybook 

        `
      }
    }
  },

  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-neutral-950"><story /></div>'
    })
  ]
}

const pricingCards = [
  {
    title: 'Free',
    subtitle: 'Start free with personal projects and learning',
    monthlyPrice: '$0',
    annualPrice: '$0',
    savings: '',
    features: [
      {
        label: 'Global CDN',
        icon: 'pi-globe'
      },
      {
        label: 'Serverless Functions',
        icon: 'pi-code'
      },
      {
        label: 'Image optimization',
        icon: 'pi-image'
      },
      {
        label: 'Storage & SQL Database',
        icon: 'pi-database'
      },
      {
        label: 'Web Application Firewall',
        icon: 'pi-lock'
      },
      {
        label: 'DDoS Protection',
        icon: 'pi-shield'
      }
    ],
    buttonLabel: 'Free forever',
    popular: false
  },
  {
    title: 'Pro',
    subtitle: 'Scale applications securely as an independent professional',
    monthlyPrice: '$25',
    annualPrice: '$20',
    savings: 'Save 20%',
    features: [
      {
        label: 'All Free features, plus'
      },
      {
        label: 'Additional workloads',
        icon: 'pi-box'
      },
      {
        label: 'Higher application limits',
        icon: 'pi-check-circle'
      },
      {
        label: 'Real-time event observability',
        icon: 'pi-eye'
      },
      {
        label: 'Enhanced security features',
        icon: 'pi-shield'
      },
      {
        label: 'Technical Support',
        icon: 'pi-question-circle'
      }
    ],
    buttonLabel: 'Contact Us',
    popular: false
  },
  {
    title: 'Business',
    subtitle: 'Power small businesses with advanced security and compliance',
    monthlyPrice: '$250',
    annualPrice: '$200',
    savings: 'Save 20%',
    features: [
      {
        label: 'All Pro features, plus'
      },
      {
        label: 'Higher limits for Functions',
        icon: 'pi-code'
      },
      {
        label: 'Expanded Storage',
        icon: 'pi-database'
      },
      {
        label: 'Custom Certificates',
        icon: 'pi-verified'
      },
      {
        label: 'Integration Services',
        icon: 'pi-wrench'
      },
      {
        label: 'Compliance (PCI DSS, SOC 2/3)',
        icon: 'pi-file-check'
      }
    ],
    buttonLabel: 'Contact Us',
    popular: true
  },
  {
    title: 'Enterprise',
    subtitle: 'Custom contracts for mission-critical enterprise applications',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    savings: '',
    customPrice: 'Custom',
    features: [
      {
        label: 'All Business features, plus'
      },
      {
        label: 'Customized Contracts',
        icon: 'pi-file-check'
      },
      {
        label: 'Extra Integration Hours',
        icon: 'pi-arrow-right-arrow-left'
      },
      {
        label: 'Best Practices Review',
        icon: 'pi-search-plus'
      },
      {
        label: 'Business Events Support',
        icon: 'pi-compass'
      },
      {
        label: 'Technical Account Manager',
        icon: 'pi-user'
      }
    ],
    buttonLabel: 'Contact Us',
    popular: false
  }
]

const pricingTableData = [
  {
    overline: 'Managed Infrastructure',
    title: 'Azion Platform',
    description: 'Powering modern workloads on global infrastructure.',
    features: [
      {
        name: 'Workspaces',
        nested: true,
        values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
      },
      {
        name: 'Workloads',
        nested: true,
        values: [
          '10 included',
          '20 included, then $0.10 per workload per month',
          '100 included, then $0.10 per workload per month',
          'Custom'
        ]
      },
      {
        name: 'Data Transfer',
        nested: true,
        values: [
          '1 TB / month included',
          '2 TB / month included, then starting at $0.02 per GB',
          '10 TB / month included, then starting at $0.02 per GB',
          'Custom'
        ]
      }
    ]
  }
]

const Template = (args) => ({
  components: { PricingCardCarousel },
  setup() {
    return { args }
  },
  template: `
    <PricingCardCarousel
      :cards="args.cards"
      :table="args.table"
      :buttonLabel="args.buttonLabel"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  cards: pricingCards,
  buttonLabel: 'START NOW'
}
