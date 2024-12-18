<template>
  <Container>
    <ContentSection
      titleTag="h1"
      overline="Report"
      title="Azion Netinfo"
    >
      <template #principal>
        <Netinfo />
      </template>
    </ContentSection>
  </Container>
</template>

<script setup>
  import Container from './templates/container/Container.vue'
  import ContentSection from './templates/contentsection/ContentSection.vue'
  import Netinfo from './templates/netinfo/Netinfo.vue'
</script>
