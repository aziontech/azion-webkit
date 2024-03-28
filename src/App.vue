<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
      <div class="flex flex-col w-full gap-20 items-center justify-center">
        <QuoteCarousel
          text='“A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil. A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.  A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.  ”'
          label="Largest entertainment company in Brazil"
          imageLight="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          imageDark="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          alt="Alternative text for image"
          direction="row"
        />
        <QuoteCarousel
          text='“A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.”'
          label="Largest entertainment company in Brazil"
          imageLight="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          imageDark="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          alt="Alternative text for image"
          direction="row"
          display
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import QuoteCarousel from './fragments/quote/index.vue';
</script>
