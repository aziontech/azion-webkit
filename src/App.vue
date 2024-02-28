<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-40">
      <HeroBlockBase
        v-bind="{
          title:'Edge platform to build, secure, and scale applications anywhere',
          description:'Over 100+ Azion edge locations around the globe, plus your remote devices, on-premises, and cloud infrastructure.',
          isCentralized:true
        }"
      >
            <template #main>
                <div class="flex justify-center items-center border surface-border h-52">
                  Teste
                </div>
            </template>
            <template #actions>
                <LinkButton label="Free Account" link="" />
                <LinkButton label="Talk to an Expert" link="" outlined />
            </template>
      </HeroBlockBase>
      <HeroBlockBase
        v-bind="{
          title:'Encontre, teste e implemente softwares habilitados para o edge que rodam em qualquer lugar.',
          description:'Over 100+ Azion edge locations around the globe, plus your remote devices, on-premises, and cloud infrastructure.',
          isCentralized:false
        }"
      >
            <template #content>
              <ContentLogoBlock
                :is-centralized="false"
                title="Logo title"
                :logos="{0:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},1:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},2:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},3:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},4:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},5:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},6:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},7:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},8:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},9:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},10:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'},11:{imageSrc:'https://www.azion.com/static/images/v3/home/logo-rbs.png',alt:'Item 1'}}"
              />
            </template>
            <template #main>
                <div class="flex justify-center items-center border surface-border h-52">
                  Teste
                </div>
            </template>
            <template #actions>
                <LinkButton label="Free Account" link="" />
                <LinkButton label="Talk to an Expert" link="" outlined />
            </template>
      </HeroBlockBase>
    </div>
  </div>
</template>

<script setup>
  // Imports Components
  import Card from 'primevue/card'

  // Imports Templates 
  import HeroBlockBase from './templates/hero-block-base/index.vue'
  import LinkButton from './templates/button/link.vue'
  import ContentLogoBlock from './templates/content-logo-block/index.vue'
</script>