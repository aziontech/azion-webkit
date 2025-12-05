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

    <SectionCards2Column
      :cards="cards2ColumnData"
      variant="outline"
      bottomSpacing="mb-24"
      id="features-outline"
    />

    <SectionCards2Column
      :cards="cards2ColumnDataDefault"
      variant="default"
      bottomSpacing="mb-24"
      id="features-default"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import SectionCards2Column from './blocks/SectionCards2Column'

  // SectionCards2Column Data - Outline Style (with dots)
  const cards2ColumnData = [
    {
      icon: 'pi pi-bolt',
      title: 'Edge Computing Power',
      descriptionRawMarkdown:
        'Deploy your applications at the **edge** for ultra-low latency and improved user experience. Our global network ensures fast delivery worldwide.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Enterprise Security',
      descriptionRawMarkdown:
        'Protect your infrastructure with **DDoS mitigation**, Web Application Firewall, and real-time threat detection. [Learn more](https://www.azion.com/en/products/edge-firewall/) about our security features.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Real-time Analytics',
      href: "https://www.azion.com/en/products/edge-analytics/",
      descriptionRawMarkdown:
        'Monitor your applications with comprehensive metrics and insights delivered in **real-time**. Make data-driven decisions with our analytics platform.'
    },
    {
      icon: 'pi pi-globe',
      title: 'Global Network',
      descriptionRawMarkdown:
        'Deploy to **100+ edge locations** worldwide. Reach your users with the lowest possible latency from our distributed infrastructure.'
    }
  ]

  // SectionCards2Column Data - Default Style (solid background)
  const cards2ColumnDataDefault = [
    {
      icon: 'pi pi-code',
      title: 'Edge Functions',
      descriptionRawMarkdown:
        'Build **serverless functions** that run at the edge. Deploy in seconds and scale automatically with our platform.'
    },
    {
      icon: 'pi pi-database',
      title: 'Edge Storage',
      href: "https://www.azion.com/en/products/edge-analytics/",
      descriptionRawMarkdown:
        'Store and retrieve data at the edge with **ultra-low latency**. Perfect for dynamic content and user data.'
    },
    {
      icon: 'pi pi-users',
      title: '24/7 Support',
      descriptionRawMarkdown:
        'Expert support team available around the clock. **Priority response** for business and enterprise plans.'
    },
    {
      icon: 'pi pi-cog',
      title: 'Easy Integration',
      descriptionRawMarkdown:
        'Integrate with your existing tools and workflows. Support for **Git**, **CI/CD**, and popular frameworks.'
    }
  ]
</script>
