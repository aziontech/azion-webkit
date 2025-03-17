<template>
  <Container>
    <SectionBignumbersLivemap v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionBignumbersLivemap from './templates/sectionbignumberslivemap'

  const MOCK = {
    overline: 'Overline',
    title: 'Teste shim',
    data: {
      jusify: 'center'
    }
  }
</script>
