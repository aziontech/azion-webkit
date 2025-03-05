<template>
  <Container>
    <SectionOverview v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionOverview from './templates/sectionoverview'

  const MOCK = {
    overline: 'Marketplace',
    title: 'What is the Azion Marketplace?',
    description:
      'The Azion Marketplace is a digital catalog that makes it easy to find, test, and deploy edge-enabled software that runs anywhere. The Marketplace brings together a wide range of solutions that you can use to enhance, compose, or customize your applications.',
    buttons: [
      {
        label: 'Try it for freet',
        link: 'https://console.azion.com/signup'
      },
      {
        label: 'Become Partner',
        link: 'https://console.azion.com/signup',
        outlined: 'true'
      }
    ],
    data: [
      {
        icon: 'pi pi-bolt',
        // title: 'Agile',
        description:
          'Run code and deploy in minutes. From prototype to enterprise scale with NoOps, just code.'
      },
      {
        icon: 'pi pi-arrow-right-arrow-left',
        // title: 'Diverse use cases',
        description:
          'Fraud detection, authentication and authorization, bot mitigation, and facial recognition, using technologies such as visual computing and artificial intelligence executed at the edge.'
      },
      {
        icon: 'pi pi-dollar',
        // title: 'Cost-effective',
        description: 'Pricing is based on the edge resources and/or private edge locations in use.'
      }
    ]
  }
</script>
