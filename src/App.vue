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

    <!-- Section 1: Title + Bullets on left, Image on right -->
    <SectionStickyContent
      title="Framework compatibility and development environment"
      :bullets="[
        'The platform provides support for modern frameworks including Next.js, Vue, React, Angular, Gatsby, and Astro.',
        'Functions provides comprehensive observability with execution traces and performance metrics for optimization.',
        'The system supports WebAssembly execution, Node.js APIs, and WinterTC compatibility for flexible development.'
      ]"
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
      alt="Development environment"
      height="default"
      variant="titleBulletsImage"
    />

    <!-- Section 2: Title on left, Bullets on right, Large image -->
    <SectionStickyContent
      title="Code execution and runtime processing"
      :bullets="[
        'Functions Rust-based runtime processes <span class=\'font-bold text-neutral-200\'>JavaScript</span> and <span class=\'font-bold text-neutral-200\'>TypeScript</span> code directly at edge locations with zero cold starts.',
        'The system <span class=\'font-bold text-neutral-200\'>automatically handles function instantiation</span> and resource allocation across Azion\'s distributed infrastructure.',
        'Advanced request routing directs traffic to appropriate function instances based on execution rules and geographic proximity.'
      ]"
      image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop"
      alt="Code execution"
      height="large"
      variant="titleImage"
    />

    <!-- Section 3: Image only (full width) -->
    <SectionStickyContent
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
      alt="Full width visualization"
      height="large"
      variant="imageOnly"
    />
  </div>
</template>

<script setup>
  import Container from './templates/container'
  import AzionLogo from './templates/azionlogo'
  import SectionStickyContent from './blocks/SectionStickyContent/SectionStickyContent.vue'
</script>
