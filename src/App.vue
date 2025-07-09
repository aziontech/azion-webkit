<template>
  <Container>
    <SectionHorizontalCardNavigation
      overline="Developer Resources"
      titleTag="h1"
      title="Explore Azion Platform"
      description="Comprehensive documentation and tools to help you build, deploy, and scale your applications at the edge."
      :buttons="navigationButtons"
      :leftSidebar="sidebarNavigation"
      :items="contentSections"
    />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionHorizontalCardNavigation from './templates/sectionhorizontalcardnavigation/SectionHorizontalCardNavigation.vue'

  // Navigation buttons
  const navigationButtons = [
    {
      link: 'https://console.azion.com',
      label: 'Access Console'

    },
    {
      link: 'https://www.azion.com/contact/',
      label: 'Contact Sales',
      outlined: true
    }
  ]

  // Left sidebar navigation
  const sidebarNavigation = [
    {
      label: 'Getting Started',
      link: '#getting-started'
    },
    {
      label: 'Products',
      link: '#products'
    },
    {
      label: 'Solutions',
      link: '#solutions'
    },
    {
      label: 'Developer Tools',
      link: '#developer-tools'
    },
    {
      label: 'Support',
      link: '#support'
    }
  ]

  // Content sections with cards
  const contentSections = [
    {
      titleTag: 'h2',
      title: 'Start Here',
      id: 'getting-started',
      description: 'Get up and running with Azion in minutes',
      cards: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Azion in minutes',
          link: 'https://www.azion.com/docs/quickstart/',
          action: {
            label: ''
          }
        },
        {
          title: 'Documentation',
          description: 'Complete guides and API reference',
          link: 'https://www.azion.com/docs/',
          action: {
            label: ''
          }
        },
        {
          title: 'First Steps Tutorial',
          description: 'Learn the basics with hands-on examples',
          link: 'https://www.azion.com/tutorials/first-steps/',
          action: {
            label: ''
          }
        },
        {
          title: 'SDK & CLI',
          description: 'Development tools and command line interface',
          link: 'https://www.azion.com/docs/cli/',
          action: {
            label: ''
          }
        }
      ]
    },
    {
      titleTag: 'h2',
      title: 'Core Platform',
      description: 'Core platform services for building and deploying applications at the edge',
      id: 'products',
      cards: [
        {
          title: 'Edge Application',
          description: 'Build and deploy applications at the edge',
          link: 'https://www.azion.com/products/edge-application/',
          action: {
            label: ''
          }
        },
        {
          title: 'Edge Functions',
          description: 'Run serverless functions at the edge',
          link: 'https://www.azion.com/products/edge-functions/',
          action: {
            label: ''
          }
        },
        {
          title: 'Edge Firewall',
          description: 'Advanced security and protection',
          link: 'https://www.azion.com/products/edge-firewall/',
          action: {
            label: ''
          }
        },
        {
          title: 'Data Stream',
          description: 'Real-time data analytics and monitoring',
          link: 'https://www.azion.com/products/data-stream/',
          action: {
            label: ''
          }
        }
      ]
    },
    {
      titleTag: 'h2',
      title: 'Industry Solutions',
      description: 'Industry-specific solutions for e-commerce, gaming, and more',
      id: 'solutions',
      cards: [
        {
          title: 'E-commerce',
          description: 'Optimize online shopping experiences',
          link: 'https://www.azion.com/solutions/ecommerce/',
          action: {
            label: ''
          }
        },
        {
          title: 'Gaming',
          description: 'Low-latency gaming infrastructure',
          link: 'https://www.azion.com/solutions/gaming/',
          action: {
            label: ''
          }
        },
        {
          title: 'Media & Entertainment',
          description: 'Content delivery and streaming solutions',
          link: 'https://www.azion.com/solutions/media/',
          action: {
            label: ''
          }
        },
        {
          title: 'FinTech',
          description: 'Secure and scalable financial services',
          link: 'https://www.azion.com/solutions/fintech/',
          action: {
            label: ''
          }
        }
      ]
    },
    {
      titleTag: 'h2',
      title: 'Development',
      description: 'Development tools and resources for building and deploying applications at the edge',
      id: 'developer-tools',
      cards: [
        {
          title: 'API Reference',
          description: 'Complete REST API documentation',
          link: 'https://www.azion.com/docs/api/',
          action: {
            label: ''
          }
        },
        {
          title: 'GraphQL',
          description: 'Query and manipulate data with GraphQL',
          link: 'https://www.azion.com/docs/graphql/',
          action: {
            label: ''
          }
        },
        {
          title: 'SDKs',
          description: 'Software development kits for multiple languages',
          link: 'https://www.azion.com/docs/sdks/',
          action: {
            label: ''
          }
        },
        {
          title: 'Webhooks',
          description: 'Real-time event notifications',
          link: 'https://www.azion.com/docs/webhooks/',
          action: {
            label: ''
          }
        }
      ]
    },
    {
      titleTag: 'h2',
      title: 'Help & Resources',
      description: 'Get help and resources for building and deploying applications at the edge',
      id: 'support',
      cards: [
        {
          title: 'Community Forum',
          description: 'Connect with other developers',
          link: 'https://www.azion.com/community/',
          action: {
            label: ''
          }
        },
        {
          title: 'Support Center',
          description: 'Get help from our expert team',
          link: 'https://www.azion.com/support/',
          action: {
            label: ''
          }
        },
        {
          title: 'Status Page',
          description: 'Monitor platform status and incidents',
          link: 'https://status.azion.com/',
          action: {
            label: ''
          }
        },
        {
          title: 'Blog',
          description: 'Latest news and technical articles',
          link: 'https://www.azion.com/blog/',
          action: {
            label: ''
          }
        }
      ]
    }
  ]
</script>

<style scoped>
  /* Component-specific styles can be added here if needed */
</style>
