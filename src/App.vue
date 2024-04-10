<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
      <div class="flex flex-col w-full gap-20 items-center justify-center">
        <SectionBlock :banner-news="{ description: 'Azion ganha o Prêmio de Inovação 2023 da Frost & Sullivan na categoria edge serveless dasuhdh uashdu ashu duhau hdhuashu asuhadsuhas uhsda.', cta: { label: 'Confira!', link: 'https://www.azion.com/pt-br/blog/azion-premio-frost-sullivan/' } }"
               :title="'Quando nossos clientes tem sucesso, nós temos sucesso'"
               :overline="'Resultados com a Azion'"
               :title-tag="'h1'"
               isContentCentralized="true"
               position="center">
               <template v-slot:content>
                 <BigNumbers :items="itens" :border="true" />
              </template>
        </SectionBlock>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SectionBlock from './templates/content-section-block/index.vue';
  import BigNumbers from './templates/big-numbers/index.vue';

  const itens = [
    { title: '80%', description: 'Melhor TCO' },
    { title: '20%', description: 'Implantações mais rápidas' },
    { title: '100%', description: 'De disponibilidade, garantida por SLA' },
    { title: '10x', description: 'Aplicações mais rápidas' },
    { title: '15ms', description: 'Tempo de resposta' },
    // Adicione mais itens conforme necessário
  ];

</script>
