<template>
  <Container>
    <SectionBasicContent v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionBasicContent from './templates/sectionbasiccontent'

  const MOCK = {
    titleTag: 'h2',
    // title: "Product</br><i class='text-orange-500 font-mono not-italic font-bold'>LaunchWeek#01</i></br>May 05-06",
    title: 'Construa com a Azion',
    description: 'Atendemos várias das maiores empresas globais. Isso significa que você usa a Azion diariamente, quando compra, se comunica e até mesmo quando trabalha. Procuramos pessoas talentosas que compartilhem nossos valores de inovação, trabalho coletivo e a missão de impulsionar uma economia hiperconectada. ',
    wysisyg: false,
    buttons: [
      {
        label: 'login',
        link: 'https://www.azion.com/',
        outlined: false
      },
      {
        label: 'Conta gratuíta',
        link: 'https://www.azion.com/',
        outlined: true
      }
    ]
  }
</script>
