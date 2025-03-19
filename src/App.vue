<template>
  <Container>
    <FeaturedCards :cards="cards" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import FeaturedCards from './templates/featuredcards'

  const cards = [
    {
      image: {
        src: 'https://images.unsplash.com/photo-1724963950078-8378a0b46793?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Logo Renner'
      },
      tag: 'Edge Functions',
      description: 'Integração com a plataforma de e-commerce Renner',
      button: {
        label: 'Saiba mais',
        link: 'https://www.azion.com/edge-functions/renner'
      }
    }
  ]
</script>
