<template>
  <Container compact>
    <!-- Basic Example -->
    <SectionListCardClickable
      overline="Getting Started"
      title="Choose Your Path"
      description="Select from our available options to get started with Azion."
      :cards="basicCards"
    />

    <!-- Products Section -->
    <SectionListCardClickable
      overline="Our Products"
      title="Azion Products"
      title-tag="h2"
      description="Discover our comprehensive suite of edge computing solutions."
      :cards="productCards"
    />

    <!-- Solutions Section -->
    <SectionListCardClickable
      overline="Solutions"
      title="Industry Solutions"
      title-tag="h2"
      description-raw-html="<p>Tailored solutions for <strong>different industries</strong> and use cases.</p>"
      :cards="solutionCards"
    />

    <!-- Resources Section -->
    <SectionListCardClickable
      overline="Resources"
      title="Learn More"
      title-tag="h2"
      description="Access our documentation, tutorials, and community resources."
      :cards="resourceCards"
    />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionListCardClickable from './templates/sectionlistcardclickable/SectionListCardClickable.vue'

  // Basic cards example
  const basicCards = [
    {
      title: 'Documentation',
      description: 'Complete guides and API reference',
      link: 'https://www.azion.com/docs/',
      action: {
        label: ''
      }
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      link: 'https://www.azion.com/tutorials/',
      action: {
        label: ''
      }
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      link: 'https://www.azion.com/community/',
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
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      link: 'https://www.azion.com/tutorials/',
      action: {
        label: ''
      }
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      link: 'https://www.azion.com/community/',
      action: {
        label: ''
      }
    }
  ]

  // Product cards example
  const productCards = [
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
      title: 'Data Stream',
      description: 'Real-time data analytics and monitoring',
      link: 'https://www.azion.com/products/data-stream/',
      action: {
        label: ''
      }
    }
  ]

  // Solution cards example
  const solutionCards = [
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
      description: 'Content delivery and streaming',
      link: 'https://www.azion.com/solutions/media/',
      action: {
        label: ''
      }
    }
  ]

  // Resource cards example
  const resourceCards = [
    {
      title: 'Blog',
      description: 'Latest news and technical articles',
      link: 'https://www.azion.com/blog/',
      action: {
        label: ''
      }
    },
    {
      title: 'Webinars',
      description: 'Live and recorded educational sessions',
      link: 'https://www.azion.com/webinars/',
      action: {
        label: ''
      }
    },
    {
      title: 'Support',
      description: 'Get help from our expert team',
      link: 'https://www.azion.com/support/',
      action: {
        label: ''
      }
    }
  ]
</script>

<style scoped>
  .space-y-8 > * + * {
    margin-top: 2rem;
  }
</style>
