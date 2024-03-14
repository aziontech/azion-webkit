<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
      <div class="flex flex-wrap w-full gap-4 items-center justify-center">
        <!-- <Quote
          :data="{0:{text:'”A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.”',label:'Largest entertainment company in Brazil',imageLight:'https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png',imageDark:'https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png'}}"
          isCarousel
        /> -->
        <QuoteCarousel
          text='“A Azion acelera a entrega de conteúdo para a maior empresa de entretenimento do Brasil.”'
          label="Largest entertainment company in Brazil"
          imageLight="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          imageDark="https://www.azion.com/assets/pages/products/images/edge-application/omelete-co-logo-white.png"
          alt="Alternative text for image"
          direction="row"
          :display="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import QuoteCarousel from './fragments/quote/index.vue';
</script>
