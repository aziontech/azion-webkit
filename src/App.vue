<template>
  <Container class="surface-ground">
    <SectionQuoteAvatar v-bind="MOCK" />
    <ProductCard
      v-bind="FEATURE"
      class="mt-8"
    />
    <FeatureCategoryCard
      class="mt-8"
      v-bind="FEATURE_CATEGORY"
    />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionQuoteAvatar from './templates/sectionquoteavatar'
  import ProductCard from './templates/productcard'
  import FeatureCategoryCard from './templates/featurecategorycard'

  const MOCK = {
    data: [
      {
        text: `”Azion accelerates content delivery for Brazil's largest entertainment company.”`,
        image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
        author: 'Rafael Umann, Chief Executive Officer, Azion Technologies',
        button: {
          link: 'https://www.azion.com/en/success-case/axur-reduced-time-to-takedown-with-ai/',
          label: 'See success case'
        }
      },
      {
        text: `”Azion accelerates content delivery for Brazil's largest entertainment company.”`,
        image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
        author: 'Rafael Umann, Chief Executive Officer, Azion Technologies',
        button: {
          link: 'https://www.azion.com/en/success-case/axur-reduced-time-to-takedown-with-ai/',
          label: 'See success case'
        }
      },
      {
        text: `”Azion accelerates content delivery for Brazil's largest entertainment company.”`,
        image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
        author: 'Rafael Umann, Chief Executive Officer, Azion Technologies',
        button: {
          link: 'https://www.azion.com/en/success-case/axur-reduced-time-to-takedown-with-ai/',
          label: 'See success case'
        }
      }
    ]
  }

  const FEATURE = {
    title: 'Edge Cache',
    description: 'Cache your content at the edge to improve performance.',
    icon: 'pi pi-star',
    links: [
      { label: 'Docs', link: '#', arrow: true },
      { label: 'Get started', link: '#', arrow: true }
    ],
    addons: true
  }

  const FEATURE_CATEGORY = {
    title: 'Edge Functions',
    description: 'Run serverless functions close to your users.',
    icon: 'pi pi-bolt',
    links: [
      { label: 'Docs', link: '#' },
      { label: 'Get started', link: '#' }
    ]
  }
</script>
