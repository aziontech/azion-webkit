<template>
  <Container>
    <SectionBaseCards v-bind="mock" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import SectionBaseCards from './templates/sectionbasecards'

  const mock = {
    overline: 'capacidades adicionais',
    title:
      'Potencialize sua edge application habilitando qualquer uma ou todas as nossas funcionalidades avançadas.',
    description: '',
    cards: [
      {
        title: 'Construir um modelo de segurança Zero Trust no edge',
        description: 'Proteja sua aplicação contra ataques sofisticados, como BGP Hijacking e DDoS.'
      },
      {
        title: 'Entregar aplicações edge serverless',
        description: 'Forneça uma experiência personalizada para todos os clientes.'
      },
      {
        title: 'Criar sites no edge',
        description:
          'Processe diretamente em nossos Edge Nodes sem acessar qualquer infraestrutura de origem.'
      },
      {
        title: 'Acelerar a entrega',
        description:
          'Entregue conteúdo de streaming de vídeo de alta resolução para sua aplicação armazenando-o mais perto de seus usuários'
      }
    ]
  }
</script>
