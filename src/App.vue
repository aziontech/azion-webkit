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
    
    <SectionProductGridCards
      :cards="[
        {
          title: 'Bullet benefit',
          description: 'Melhore a performance, segurança e escalabilidade dos seus sites e aplicações web'
        },
        {
          title: 'Bullet benefit',
          description: 'Melhore a performance, segurança e escalabilidade dos seus sites e aplicações web'
        },
        {
          title: 'Bullet benefit',
          description: 'Melhore a performance, segurança e escalabilidade dos seus sites e aplicações web'
        }
      ]"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import SectionProductGridCards from './blocks/SectionProductGridCards'
</script>
