<template>
  <div class="bg-black min-h-screen">
    <Container>
      <AzionLogo
        href="https://www.azion.com/"
        hrefTitle="Azion Technologies"
        target="_self"
        version="min"
      />
    </Container>
    
    <SectionCardCarousel
      title="Explore Our Solutions"
      :cards="[
        {
          tag: 'Product',
          title: 'Edge Application',
          description: 'Build and deploy modern applications at the edge with serverless functions and real-time data processing.',
          link: '/products/edge-application',
          linkLabel: 'Learn more'
        },
        {
          tag: 'Product',
          title: 'Edge Firewall',
          description: 'Protect your applications with advanced security features including DDoS protection and WAF.',
          link: '/products/edge-firewall',
          linkLabel: 'Learn more'
        },
        {
          tag: 'Product',
          title: 'Edge Functions',
          description: 'Run serverless code at the edge to customize and enhance your application behavior.',
          link: '/products/edge-functions',
          linkLabel: 'Learn more'
        },
        {
          tag: 'Product',
          title: 'Edge Storage',
          description: 'Store and retrieve data at the edge with low latency and high availability.',
          link: '/products/edge-storage',
          linkLabel: 'Learn more'
        }
      ]"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import SectionCardCarousel from './blocks/SectionCardCarousel'
</script>
