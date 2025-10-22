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

    <SectionImageContent2Column
      title="Build and deploy at the edge"
      contentHtml="<p>Deploy applications closer to your users with our <strong>global edge network</strong>.</p>
                   <p>Reduce latency and improve performance with <em>edge computing</em>.</p>
                   <p>Scale automatically based on demand without <mark>infrastructure management</mark>.</p>"
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
      alt="Edge computing visualization"
      variant="titleBulletsImage"
      height="large"
    />

    <SectionImageContent2Column
      title="Real-time data processing"
      contentHtml="<p>Process data at the edge for <strong>instant insights</strong> and faster decision making.</p>
                   <p>Reduce bandwidth costs by filtering and aggregating data before transmission.</p>
                   <p>Enable <em>real-time analytics</em> and monitoring across your entire infrastructure.</p>"
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
  import SectionImageContent2Column from './blocks/SectionImageContent2Column'
</script>
