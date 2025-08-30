export const menu = {
  menu: [
    {
      label: 'Solutions',
      href: '/pt-br/solucoes/'
    },
    {
      label: 'Products',
      ref: 'productsPanel',
      subMenuColumns: [
        [
          {
            label: 'Platform',
            icon: '',
            description: 'Build, secure and scale applications',
            href: '/pt-br/produtos/platform/',
            items: [
              {
                icon: 'ai ai-edge-storage',
                label: 'Overview',
                description: 'Platform overview description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-edge-kv',
                label: 'Our Network',
                description: 'Network description here',
                href: '/pt-br/'
              }
            ]
          },
          {
            label: 'Store',
            icon: '',
            description: 'Data storage solutions',
            href: '/pt-br/produtos/store/',
            items: [
              {
                icon: 'ai ai-sql-database',
                label: 'SQL Database',
                description: 'SQL Database description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-kv-store',
                label: 'KV Store',
                description: 'KV Store description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-object-storage',
                label: 'Object Storage',
                description: 'Object Storage description here',
                href: '/pt-br/'
              }
            ]
          }
        ],
        {
          label: 'Build',
          icon: '',
          description: 'Application development and deployment',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Application Accelerator',
              description: 'Application Accelerator description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Functions',
              description: 'Functions description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Cache',
              description: 'Cache description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Image Processor',
              description: 'Image Processor description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-live-ingest',
              label: 'Live Ingest',
              description: 'Live Ingest description here',
              href: '/pt-br/'
            }
          ]
        },
        [
          {
            label: 'AI',
            icon: '',
            description: 'Artificial Intelligence solutions',
            href: '/pt-br/produtos/ai/',
            items: [
              {
                icon: 'ai ai-ai-studio',
                label: 'AI Studio',
                description: 'AI Studio description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-ai-inference',
                label: 'AI Inference (Edge AI)',
                description: 'AI Inference description here',
                href: '/pt-br/'
              }
            ]
          },
          {
            label: 'Observe',
            icon: '',
            description: 'Monitoring and analytics',
            href: '/pt-br/produtos/observe/',
            items: [
              {
                icon: 'ai ai-real-time-events',
                label: 'Real-Time Events',
                description: 'Real-Time Events description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-data-stream',
                label: 'Data Stream',
                description: 'Data Stream description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-real-time-metrics',
                label: 'Real-Time Metrics',
                description: 'Real-Time Metrics description here',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-edge-pulse',
                label: 'Edge Pulse',
                description: 'Edge Pulse description here',
                href: '/pt-br/'
              }
            ]
          }
        ],
        {
          label: 'Secure',
          icon: '',
          description: 'Security and protection services',
          items: [
            {
              icon: 'ai ai-network-layer-protection',
              label: 'Network Layer Protection',
              description: 'Network Layer Protection description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-web-application-firewall',
              label: 'Web Application Firewall (WAF)',
              description: 'Web Application Firewall description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-bot-manager',
              label: 'Bot Manager',
              description: 'Bot Manager description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-dns',
              label: 'Edge DNS',
              description: 'Edge DNS description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-load-balancer',
              label: 'Load Balancer',
              description: 'Load Balancer description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-origin-shield',
              label: 'Origin Shield',
              description: 'Origin Shield description here',
              href: '/pt-br/'
            }
          ]
        }
      ]
    },
    {
      label: 'Clients',
      href: '/pt-br/solucoes/'
    },
    {
      label: 'Developer',
      ref: 'developersPanel',
      subMenuColor: 'bg-[#A09EBC]',
      subMenuColumns: [
        {
          label: 'Docs',
          icon: '',
          description: 'Application development and deployment',
          href: '/pt-br/produtos/build/',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Welcome to Azion Docs',
              description: 'Edge growth, scalability, performance, and security.',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Guides',
              description: 'Guides description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Dev Tools',
              description: 'Dev Tools description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Release Notes',
              description: 'Image Processor description here',
              href: '/pt-br/'
            }
          ]
        },
        [
          {
            label: 'test',
            icon: '',
            description: 'Application development and deployment',
            href: '/pt-br/produtos/build/',
            items: [
              {
                icon: 'ai ai-application-accelerator',
                label: 'Welcome to Azion Docs',
                description: 'Edge growth, scalability, performance, and security.',
                href: '/pt-br/'
              },
              {
                icon: 'ai ai-edge-functions',
                label: 'Guides',
                description: 'Guides description here',
                href: '/pt-br/'
              },
            ]
          },
          {
            label: 'Community',
            communityComponent: true
          }
        ]
      ]
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      subMenuColumns: [
        {
          label: 'Content',
          icon: '',
          description: 'Application development and deployment',
          href: '/pt-br/produtos/build/',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Welcome to Azion Docs',
              description: 'Edge growth, scalability, performance, and security.',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Guides',
              description: 'Guides description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Dev Tools',
              description: 'Dev Tools description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Release Notes',
              description: 'Image Processor description here',
              href: '/pt-br/'
            }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pt-br/solucoes/'
    }
  ]
}

export const menuMobile = {
  menu: [
    {
      label: 'Solutions',
      href: '/pt-br/solucoes/'
    },
    {
      label: 'Products',
      ref: 'productsPanel',
      subMenuColumns: [
        {
          label: 'Platform',
          icon: '',
          description: 'Build, secure and scale applications',
          href: '/pt-br/produtos/platform/',
          items: [
            {
              icon: 'ai ai-edge-storage',
              label: 'Overview',
              description: 'Platform overview description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-kv',
              label: 'Our Network',
              description: 'Network description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'Store',
          icon: '',
          description: 'Data storage solutions',
          href: '/pt-br/produtos/store/',
          items: [
            {
              icon: 'ai ai-sql-database',
              label: 'SQL Database',
              description: 'SQL Database description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-kv-store',
              label: 'KV Store',
              description: 'KV Store description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-object-storage',
              label: 'Object Storage',
              description: 'Object Storage description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'Build',
          icon: '',
          description: 'Application development and deployment',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Application Accelerator',
              description: 'Application Accelerator description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Functions',
              description: 'Functions description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Cache',
              description: 'Cache description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Image Processor',
              description: 'Image Processor description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-live-ingest',
              label: 'Live Ingest',
              description: 'Live Ingest description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'AI',
          icon: '',
          description: 'Artificial Intelligence solutions',
          href: '/pt-br/produtos/ai/',
          items: [
            {
              icon: 'ai ai-ai-studio',
              label: 'AI Studio',
              description: 'AI Studio description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-ai-inference',
              label: 'AI Inference (Edge AI)',
              description: 'AI Inference description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'Observe',
          icon: '',
          description: 'Monitoring and analytics',
          href: '/pt-br/produtos/observe/',
          items: [
            {
              icon: 'ai ai-real-time-events',
              label: 'Real-Time Events',
              description: 'Real-Time Events description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-data-stream',
              label: 'Data Stream',
              description: 'Data Stream description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-real-time-metrics',
              label: 'Real-Time Metrics',
              description: 'Real-Time Metrics description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-pulse',
              label: 'Edge Pulse',
              description: 'Edge Pulse description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'Secure',
          icon: '',
          description: 'Security and protection services',
          items: [
            {
              icon: 'ai ai-network-layer-protection',
              label: 'Network Layer Protection',
              description: 'Network Layer Protection description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-web-application-firewall',
              label: 'Web Application Firewall (WAF)',
              description: 'Web Application Firewall description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-bot-manager',
              label: 'Bot Manager',
              description: 'Bot Manager description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-dns',
              label: 'Edge DNS',
              description: 'Edge DNS description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-load-balancer',
              label: 'Load Balancer',
              description: 'Load Balancer description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-origin-shield',
              label: 'Origin Shield',
              description: 'Origin Shield description here',
              href: '/pt-br/'
            }
          ]
        }
      ]
    },
    {
      label: 'Clients',
      href: '/pt-br/solucoes/'
    },
    {
      label: 'Developer',
      ref: 'developersPanel',
      subMenuColumns: [
        {
          label: 'Docs',
          icon: '',
          description: 'Application development and deployment',
          href: '/pt-br/produtos/build/',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Welcome to Azion Docs',
              description: 'Edge growth, scalability, performance, and security.',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Guides',
              description: 'Guides description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Dev Tools',
              description: 'Dev Tools description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Release Notes',
              description: 'Image Processor description here',
              href: '/pt-br/'
            }
          ]
        },
        {
          label: 'Docs',
          icon: '',
          description: 'Application development and deployment',
          href: '/pt-br/produtos/build/',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Welcome to Azion Docs',
              description: 'Edge growth, scalability, performance, and security.',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Guides',
              description: 'Guides description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Dev Tools',
              description: 'Dev Tools description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Release Notes',
              description: 'Image Processor description here',
              href: '/pt-br/'
            }
          ]
        }
      ]
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      subMenuColumns: [
        {
          label: 'Content',
          icon: '',
          description: 'Application development and deployment',
          href: '/pt-br/produtos/build/',
          items: [
            {
              icon: 'ai ai-application-accelerator',
              label: 'Welcome to Azion Docs',
              description: 'Edge growth, scalability, performance, and security.',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-functions',
              label: 'Guides',
              description: 'Guides description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-edge-cache',
              label: 'Dev Tools',
              description: 'Dev Tools description here',
              href: '/pt-br/'
            },
            {
              icon: 'ai ai-image-processor',
              label: 'Release Notes',
              description: 'Image Processor description here',
              href: '/pt-br/'
            }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pt-br/solucoes/'
    }
  ]
}

export const secondaryMenu = [
  {
    text: 'Contact',
    title: 'Request an Expert',
    link: '/pt-br/lp/emergencia-ataque-cibernetico/',
    target: '_self'
  },
  {
    text: 'Sign In',
    title: 'Sign In',
    link: 'https://console.azion.com/login',
    target: '_blank'
  },
  {
    text: 'Free Acount',
    backgroundColor: 'dark',
    link: 'https://console.azion.com/signup/',
    target: '_self'
  }
]

export const mobileSecondaryMenu = [
  {
    items: [
      {
        label: 'Carreiras',
        tags: ['estamos contratando'],
        url: '/pt-br/carreiras/'
      },
      {
        label: 'Suporte',
        url: '/pt-br/precos/'
      },
      {
        label: 'Política de privacidade',
        url: '/pt-br/documentacao/contratos/politica-de-privacidade/'
      }
    ]
  }
]

export const mobileBottomButtons = [
  {
    label: 'Conta gratuita',
    urlTitle: 'Azion Console Conta Gratuita',
    url: 'https://console.azion.com/singup',
    destak: true
  },
  {
    label: 'Sign In',
    urlTitle: 'Azion Console Sign In',
    url: 'https://console.azion.com/login'
  },
  {
    label: 'Contato',
    url: '/pt-br/contate-vendas/',
    urlTitle: 'Contact Page',
    icon: 'pi pi-chevron-right text-xs'
  },
  
]

export const algoliaIndex = [
  {
    name: `azion-site-ptbr`,
    label: 'site',
    activeIndex: 1
  },
  {
    name: `azion-doc-ptbr`,
    label: 'docs',
    activeIndex: 2
  },
  {
    name: `azion-blog-ptbr`,
    label: 'blog',
    activeIndex: 3
  },
  {
    name: `azion-cases-ptbr`,
    label: 'cases',
    activeIndex: 4
  }
]

export const algoliaModel = [
  { label: 'All' },
  { label: 'Site' },
  { label: 'Docs' },
  { label: 'Blog' },
  { label: 'Cases' }
]

export const communityData = {
  label: 'Join Our Community',
  href: 'https://discord.com/invite/pM8ANzztuB'
}

export const algoliaInputPlaceholder = 'Digite sua busca'
