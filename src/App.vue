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

    <SectionStickyContent
      title="Build and deploy at the edge"
      :bullets="[
        'Deploy applications closer to your users with our global edge network',
        'Reduce latency and improve performance with edge computing',
        'Scale automatically based on demand without infrastructure management'
      ]"
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
      alt="Edge computing visualization"
      variant="titleBulletsImage"
      height="large"
    />

    <SectionStickyContent
      title="Real-time data processing"
      :bullets="[
        'Process data at the edge for instant insights and faster decision making',
        'Reduce bandwidth costs by filtering and aggregating data before transmission',
        'Enable real-time analytics and monitoring across your entire infrastructure'
      ]"
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
      alt="Data processing"
      variant="titleImage"
      height="default"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import SectionStickyContent from './blocks/SectionStickyContent'
</script>
