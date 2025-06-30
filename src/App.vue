<template>
  <Container class="surface-ground">
    <div class="px-container flex flex-row gap-3">
      <ProductCard v-bind="FEATURE2" />
      <ProductCard v-bind="FEATURE" />
      <ProductCard v-bind="FEATURE2" />
    </div>
  </Container>
</template>

<script setup>
import Container from './templates/container'
import ProductCard from './templates/productcard'

const FEATURE = {
  title: 'Edge Cache',
  description: 'Cache your content at the edge to improve performance.',
  icon: 'pi pi-star',
  links: [
    { label: 'Docs', link: '#', icon: '' },
    { label: 'Get started', link: '#', icon: 'pi pi-arrow-right' }
  ],
  addons: false
}

const FEATURE2 = {
  title: 'Edge Cache',
  description: 'Cache your content at the edge to improve performance.',
  icon: 'pi pi-star',
  links: [
    { label: 'Docs', link: '#', icon: '' },
    { label: 'Get started', link: '#', icon: 'pi pi-arrow-right' }
  ],
  addons: true
}
</script>
