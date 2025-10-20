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
    
    <ProductHero
      overline="Edge Computing"
      title="Build Faster with Azion Edge Platform"
      subtitle="Deploy your applications at the edge with unmatched performance, security, and scalability."
      image="https://placehold.co/600x600/1a1a1a/f3652b?text=Product+Image"
      :buttons="[
        { label: 'Start Now', href: '/signup' },
        { label: 'Learn More', href: '/docs' }
      ]"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import ProductHero from './blocks/ProductHero'
</script>
