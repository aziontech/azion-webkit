///////////////
// MENU MOCK //
///////////////

const menuData = {
  items: [
    {
      label: 'Solutions',
      ref: 'solutionsPanel',
      items: [
        {
          label: 'Industries',
          overline: 'Solutions by industries',
          type: 'solutions',
          items: [
            {
              label: 'Financial Services',
              description: 'Accelerate digital banking with enhanced security and compliance',
              href: '/en/solutions/financial-services/',
              icon: 'pi pi-dollar'
            },
            {
              label: 'Retail',
              description: 'Build high-performance shopping experiences',
              href: '/en/solutions/retail/',
              icon: 'pi pi-shopping-bag'
            },
            {
              label: 'Technology',
              description: 'Build high-performance applications at the edge',
              href: '/en/solutions/technology/',
              icon: 'pi pi-code'
            }
          ]
        },
        {
          label: 'Use Cases',
          overline: 'Solutions by use cases',
          type: 'solutions',
          items: [
            {
              label: 'Application Development',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              href: '/en/solutions/jamstack-websites/',
              icon: 'pi pi-desktop',
              subitems: [
                {
                  label: 'Jamstack Websites',
                  href: '/en/products/application-accelerator/'
                },
                {
                  label: 'Application Modernization',
                  href: '/en/products/edge-cache/'
                },
                {
                  label: 'Microservices Applications',
                  href: '/en/products/tiered-cache/'
                },
                {
                  label: 'View More',
                  href: '/en/products/edge-functions/',
                  isLink: true
                }
              ]
            },
            {
              label: 'Application and Network Security',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              href: '/en/solutions/serverless-applications/',
              icon: 'pi pi-shield',
              subitems: [
                {
                  label: 'Bot Management',
                  href: '/en/products/application-accelerator/'
                },
                {
                  label: 'Security Automation',
                  href: '/en/products/edge-cache/'
                },
                {
                  label: 'Governance, Risk and Compliance',
                  href: '/en/products/tiered-cache/'
                },
                {
                  label: 'View More',
                  href: '/en/products/edge-functions/',
                  isLink: true
                }
              ]
            },
            {
              label: 'Service Performance and Reliability ',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              href: '/en/solutions/application-modernization/',
              icon: 'pi pi-stopwatch',
              subitems: [
                {
                  label: 'Content Delivery',
                  href: '/en/products/application-accelerator/'
                },
                {
                  label: 'Image Processing and Optimization',
                  href: '/en/products/edge-cache/'
                },
                {
                  label: 'Live Streaming Delivery',
                  href: '/en/products/tiered-cache/'
                },
                {
                  label: 'View More',
                  href: '/en/products/edge-functions/',
                  isLink: true
                }
              ]
            },
            {
              label: 'Application and Infraestructure Automation',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              href: '/en/solutions/microservices-applications/',
              icon: 'pi pi-server',
              subitems: [
                {
                  label: 'Application Delivery and Operations',
                  href: '/en/products/application-accelerator/'
                },
                {
                  label: 'Infrastructure Orchestration',
                  href: '/en/products/application-accelerator/'
                }
              ]
            },
            {
              label: 'Artificial Intelligence (AI)',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              href: '/en/solutions/edge-enhanced-applications/',
              icon: 'pi pi-user-edit',
              subitems: [
                {
                  label: 'Azion AI',
                  href: '/en/products/application-accelerator/'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Products',
      ref: 'productsPanel',
      items: [
        {
          label: 'Build',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-application',
              label: 'Edge Application',
              description: 'Build applications at the edge of the network.',
              href: '/en/products/edge-application/',
              overline: 'Add-ons',
              items: [
                {
                  icon: '',
                  label: 'Application Accelerator',
                  description: '',
                  href: '/en/products/application-accelerator/'
                },
                {
                  icon: '',
                  label: 'Edge Cache',
                  description: '',
                  href: '/en/products/edge-cache/'
                },
                {
                  icon: '',
                  label: 'Tiered Cache',
                  description: '',
                  href: '/en/products/tiered-cache/'
                },
                {
                  icon: '',
                  label: 'Edge Functions',
                  description: '',
                  href: '/en/products/edge-functions/'
                },
                {
                  icon: '',
                  label: 'Image Processor',
                  description: '',
                  href: '/en/products/image-processor/'
                },
                {
                  icon: '',
                  label: 'Load Balancer',
                  description: '',
                  href: '/en/products/load-balancer/'
                }
              ]
            },
            {
              icon: 'pi pi-microchip-ai',
              label: 'Edge AI',
              description: 'Execute AI models in a serveless architecture',
              href: '/en/products/edge-ai/'
            }
          ]
        },
        {
          label: 'Store',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-storage',
              label: 'Edge Storage',
              description:
                'Combine the reliability of object storage with enhanced performance of a distributed architecture.',
              href: '/en/products/edge-storage/'
            },
            {
              icon: 'ai ai-edge-kv',
              label: 'Edge KV',
              description:
                'Boosting speed and flexibility: Edge KV enhances key-value stores for distributed systems.',
              href: '/en/products/edge-kv/'
            },
            {
              icon: 'ai ai-edge-sql',
              label: 'Edge SQL',
              description:
                'Scale effortlessly and supercharge your global application performance with our true edge-native SQL.',
              href: '/en/products/edge-sql/'
            }
          ]
        },
        {
          label: 'Secure',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-firewall',
              label: 'Edge Firewall',
              description: 'Protect users, applications, and networks with a modern approach.',
              href: '/en/products/edge-firewall/',
              overline: 'Add-ons',
              items: [
                {
                  icon: '',
                  label: 'Bot Manager',
                  description: '',
                  href: '/en/products/bot-manager/'
                },
                {
                  icon: '',
                  label: 'DDoS Protection',
                  description: '',
                  href: '/en/products/ddos-protection/'
                },
                {
                  icon: '',
                  label: 'Network Layer Protection',
                  description: '',
                  href: '/en/products/network-layer-protection/'
                },
                {
                  icon: '',
                  label: 'Web Application Firewall',
                  description: '',
                  href: '/en/products/web-application-firewall/'
                }
              ]
            },
            {
              icon: 'ai ai-edge-dns',
              label: 'Edge DNS',
              description: 'Improve the availability and security of your applications.',
              href: '/en/products/edge-dns/'
            }
          ]
        },
        {
          label: 'Deploy',
          icon: '',
          items: [
            {
              icon: 'ai ai-edge-orchestrator',
              label: 'Edge Orchestrator',
              description: 'Deploy, control, observe, and automate edge workloads anywhere.',
              href: '/en/products/edge-orchestrator/'
            }
          ]
        },
        {
          label: 'Observe',
          icon: '',
          items: [
            {
              icon: 'ai ai-data-stream',
              label: 'Data Stream',
              description:
                'Power your big data, stream processing, SIEM, and serverless application platforms with near real-time data analytics.',
              href: '/en/products/data-stream/'
            },
            {
              icon: 'ai ai-edge-pulse',
              label: 'Edge Pulse',
              description:
                'Improve the experience of your applications by building deep user insights.',
              href: '/en/products/edge-pulse/'
            },
            {
              icon: 'ai ai-real-time-metrics',
              label: 'Real-Time Metrics',
              description:
                'Powerful real-time visualization of your application performance, and security.',
              href: '/en/products/real-time-metrics/'
            },
            {
              icon: 'ai ai-real-time-events',
              label: 'Real-Time Events',
              description:
                'Query engine in real-time to explore the data generated by applications.',
              href: '/en/products/real-time-events/'
            }
          ]
        },
        {
          label: 'Professional Services',
          href: '/en/professional-services/'
        }
      ],
      rightBlock: {
        label: 'Success Cases',
        type: 'cases',
        items: [
          {
            img: {
              src: '/assets/cases/images/uploads/axur-logo-solutions.png?ims=160x90',
              alt: 'The AXUR logo, consisting of the company name in stylized font.'
            },
            description: 'Axur unlocked the fastest automatic takedown in the market with Edge AI',
            link: {
              href: '/en/success-case/axur-reduced-time-to-takedown-with-ai',
              label: 'Read more'
            }
          },
          {
            img: {
              src: '/assets/blog/images/uploads/magalu.png?ims=160x90',
              alt: 'The Magalu logo, consisting of the company name in stylized font.'
            },
            description:
              'Magalu guarantees high availability for hundred of global-scale applications...',
            link: {
              href: '/en/success-case/magalu/',
              label: 'Read more'
            }
          }
        ]
      }
    },
    {
      label: 'Customers',
      href: '/en/success-case/',
      items: []
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      items: [
        {
          label: 'Documentation',
          items: [
            {
              icon: 'pi pi-play',
              label: 'Azion Docs',
              description:
                'Our documentation page will help you get started with the Azion Web Platform.',
              href: '/en/documentation/'
            },
            {
              icon: 'pi pi-map',
              label: 'Guides',
              description: "Discover our guides that will help you on Azion's web platform.",
              href: '/en/documentation/products/guides/'
            },
            {
              icon: 'pi pi-wrench',
              label: 'Dev Tools',
              description: 'Discover our developer tools.',
              href: '/en/documentation/devtools/'
            },
            {
              icon: 'pi pi-code',
              label: 'API',
              description:
                'Documentation that will guide you on the first steps of using the Azion API.',
              href: 'https://api.azion.com/'
            },
            {
              icon: 'pi pi-list',
              label: 'Release Notes',
              description: 'Discover our latest Release Notes.',
              href: '/en/documentation/products/release-notes/'
            },
            {
              icon: 'pi pi-briefcase',
              label: 'Agreements',
              description: 'Our terms of service, customer agreement, privacy policy and more.',
              href: '/en/documentation/agreements/'
            }
          ]
        },
        {
          label: 'Blog',
          href: '/en/blog/'
        },
        {
          label: 'Learning Center',
          href: '/en/learning/'
        },
        {
          label: 'Resource Hub',
          href: '/en/resource-hub/'
        },
        {
          label: 'Marketplace',
          href: '/en/marketplace/'
        },
        {
          label: 'Our Network',
          href: '/en/products/our-network/'
        },
        {
          label: 'Community',
          href: 'https://discord.gg/pM8ANzztuB',
          external: true,
          icon: 'pi pi-external-link'
        }
      ],
      rightBlock: {
        label: 'Featured',
        type: 'featured',
        items: [
          {
            img: {
              src: '/assets/blog/images/uploads/thumbnailblog-4templatesimproveexperience-440x343px-1.png',
              alt: "Leverage the Power of Edge Computing with Azion's New Set of Templates"
            },
            title: "Leverage the Power of Edge Computing with Azion's New Set of Templates",
            description:
              "Explore Azion's intuitive developer tools. Simplify web application developm...",
            link: {
              href: '/en/blog/azion-new-set-templates-dev/',
              label: 'Read article'
            }
          }
        ]
      }
    },
    {
      label: 'Pricing',
      href: '/en/pricing/',
      items: []
    },
    {
      label: 'About Us',
      href: '/en/about-us/',
      items: [],
      minBreakpoint: 'xl'
    }
  ]
}

const menuSecondary = [
  {
    text: 'Under Attack?',
    title: 'Under Attack?',
    link: '/en/lp/under-attack-mitigation/',
    destak: false,
    outlined: false,
    target: '_self',
    minBreakpoint: 'xl'
  },
  {
    text: 'Contact',
    title: 'Contact Sales',
    link: '/en/contact-sales/',
    destak: false,
    outlined: true,
    target: '_self',
    minBreakpoint: 'lg'
  },
  {
    text: 'Sign in',
    title: 'Azion SSO Login',
    link: 'https://console.azion.com/login',
    destak: false,
    outlined: true,
    target: '_blank',
    minBreakpoint: 'lg'
  },
  {
    text: 'Free account',
    title: 'Azion Free Account',
    link: 'https://console.azion.com/signup/',
    destak: true,
    target: '_blank',
    minBreakpoint: 'lg'
  }
]

const menuSecondaryMobile = [
  {
    items: [
      {
        label: 'Carreers',
        tags: ["we're hiring!"],
        url: '/en/careers/jobs/'
      },
      {
        label: 'Support',
        url: '/en/pricing/'
      },
      {
        label: 'Privacy policy',
        url: '/en/documentation/agreements/privacy-policy/'
      }
    ]
  }
]

const bottomButtonsMobile = [
  {
    label: 'Free Account',
    urlTitle: 'Azion Console Free Account',
    url: 'https://console.azion.com/singup',
    destak: true
  },
  {
    label: 'Sign In',
    urlTitle: 'Azion Console Sign In',
    url: 'https://console.azion.com/login'
  },
  {
    label: 'Contact',
    url: '/en/contact-sales/',
    urlTitle: 'Contact Page',
    icon: 'pi pi-chevron-right text-xs'
  }
]

const algoliaIndex = [
  {
    name: `azion-site-en`,
    label: 'site',
    activeIndex: 1
  },
  {
    name: `azion-doc-en`,
    label: 'docs',
    activeIndex: 2
  },
  {
    name: `azion-blog-en`,
    label: 'blog',
    activeIndex: 3
  },
  {
    name: `azion-cases-en`,
    label: 'cases',
    activeIndex: 4
  }
]

const algoliaModel = [
  { label: 'All' },
  { label: 'Site' },
  { label: 'Docs' },
  { label: 'Blog' },
  { label: 'Cases' }
]

const algoliaInputPlaceholder = 'Type to search'

export default {
  menuData,
  menuSecondary,
  menuSecondaryMobile,
  bottomButtonsMobile,
  algoliaIndex,
  algoliaModel,
  algoliaInputPlaceholder
}
