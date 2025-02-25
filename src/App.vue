<template>
  <div class="px-container">
    <HeroContent v-bind="MOCK" />
  </div>
</template>

<script setup>
  // import Container from './templates/container'
  import HeroContent from './templates/herocontent'

  const MOCK = {
    breadcrumbItems: [
      {
        url: `/en/blog/`,
        target: '_self',
        label: 'Blog'
      },
      {
        url: 'www.azion.com',
        target: '_self',
        label: 'This Article'
      }
    ],
    date: 'JUN 27, 2024 • 15 min read',
    title: 'Azion Edge SQL: enabling access and analysis of structured data at the edge',
    authors: [
      {
        avatar: 'https://www.azion.com/assets/blog/images/uploads/img-prof.png',
        title: 'Mariana Bellorín Aguilera',
        role: 'Technical Writer'
      }
    ],
    description:
      'Explore how Azion Edge SQL enhances database operations with edge computing for high scalability, low latency, and cost-effectiveness.'
  }
</script>
