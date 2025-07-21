<template>
  <div class="p-4 space-y-4 px-continer">
    <h1 class="text-2xl font-bold mb-6">Message Component Examples</h1>

    <!-- Success Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Success Message</h2>
      <Message severity="success">
        Operation completed successfully
        <a
          href="https://www.azion.com/"
          class="text-link"
          >https://www.azion.com/</a
        >!
      </Message>
    </div>

    <!-- Info Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Info Message</h2>
      <Message severity="info"> Here's some useful information for you. </Message>
    </div>

    <!-- Warning Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Warning Message</h2>
      <Message severity="warn"> Please be careful with this action. </Message>
    </div>

    <!-- Error Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Error Message</h2>
      <Message severity="error"> An error occurred while processing your request. </Message>
    </div>

    <!-- Secondary Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Secondary Message</h2>
      <Message severity="secondary"> This is a secondary message with neutral styling. </Message>
    </div>

    <!-- Contrast Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Contrast Message</h2>
      <Message severity="contrast"> High contrast message for better visibility. </Message>
    </div>

    <!-- Closable Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Closable Message</h2>
      <Message
        severity="info"
        :closable="true"
        @close="handleMessageClose"
      >
        This message can be closed by clicking the X button.
      </Message>
    </div>

    <!-- Non-sticky Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Auto-close Message</h2>
      <Message
        severity="success"
        :sticky="false"
        :life="2000"
      >
        This message will disappear after 2 seconds.
      </Message>
    </div>

    <!-- Custom Icon Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Custom Icon Message</h2>
      <Message
        severity="info"
        icon="pi pi-star"
      >
        Message with a custom star icon.
      </Message>
    </div>

    <!-- Custom Class Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Custom Styled Message</h2>
      <Message
        severity="info"
        custom-class="custom-message-style"
      >
        This message has custom styling applied.
      </Message>
    </div>

    <!-- Size Examples -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Message Sizes</h2>
      <Message
        size="small"
        severity="info"
        icon="pi pi-send"
      >
        Small message with icon
      </Message>
      <Message
        severity="success"
        icon="pi pi-user"
      >
        Normal message with icon
      </Message>
      <Message
        size="large"
        severity="warn"
        icon="pi pi-check"
      >
        Large message with icon
      </Message>
    </div>
  </div>
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
      description:
        'Development tools and resources for building and deploying applications at the edge',
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
