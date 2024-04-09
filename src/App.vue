<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
      <div class="flex flex-col w-full gap-20 items-center justify-center">
        <HeroBlock :banner-news="{ description: 'Azion ganha o Prêmio Norte-Americano de Inovação 2023 da Frost & Sullivan.', cta: { label: 'Confira!', link: 'https://www.azion.com/pt-br/blog/azion-premio-frost-sullivan/' } }"
               :title="'Edge Computing platform to build, secure, and scale applications anywhere'"
               :title-tag="'h1'"
               :description="'Over 100+ Azion edge locations around the globe, plus your remote devices, on-premises, and cloud infrastructure.'"
               isCentralized="true"
               isDisplay="true">
      </HeroBlock>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeroBlock from './templates/hero-block-base/index.vue';
</script>
