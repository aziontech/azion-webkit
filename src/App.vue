<template>
  <Container>
    <SectionImageRight v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionImageRight from './templates/sectionimageright'

  const MOCK = {
    overline: 'Compliance Expertise',
    title:
      'We are committed to ensuring that our global customers and partners can meet diverse compliance requirements.',
    description:
      'Security and Compliance are shared responsibilities between Azion and the customer. This shared model can help relieve the customer’s operational burden as Azion operates, manages and controls the components from the operating system and virtualization layer, including updates and security patches, down to the physical security of the facilities in which the service operates.',
    buttons: [
      {
        link: 'https://www.azion.com/en/documentation/shared-responsibility/',
        label: 'Visit Shared Responsibility Model'
      }
    ]
  }
</script>
