<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
      <div class="flex flex-wrap w-full gap-4 items-center justify-center text-5xl">
        <i class="ai ai-twitter"></i>
        <i class="ai ai-column"></i>
        <i class="ai ai-home"></i>
        <i class="ai ai-marketplace"></i>
        <i class="ai ai-domains"></i>
        <i class="ai ai-edge-application"></i>
        <i class="ai ai-build-pillar"></i>
        <i class="ai ai-variables"></i>
        <i class="ai ai-secure-pillar"></i>
        <i class="ai ai-edge-firewall"></i>
        <i class="ai ai-edge-dns"></i>
        <i class="ai ai-deploy-pillar"></i>
        <i class="ai ai-edge-nodes"></i>
        <i class="ai ai-observe-pillar"></i>
        <i class="ai ai-data-stream"></i>
        <i class="ai ai-edge-pulse"></i>
        <i class="ai ai-real-time-metrics"></i>
        <i class="ai ai-real-time-events"></i>
        <i class="ai ai-real-time-purge"></i>
        <i class="ai ai-edge-libraries"></i>
        <i class="ai ai-edge-functions"></i>
        <i class="ai ai-edge-services"></i>
        <i class="ai ai-digital-certificates"></i>
        <i class="ai ai-network-lists"></i>
        <i class="ai ai-waf-rules"></i>
        <i class="ai ai-store"></i>
        <i class="ai ai-edge-storage"></i>
        <i class="ai ai-edge-sql"></i>
        <i class="ai ai-edge-kv"></i>
        <i class="ai ai-edge-orchestrator"></i>

      </div>
      <ContentSectionBlock
          v-bind="{
              overline:'Get Started',
              title:'Sign-up and get U$300 to use for 12 months',
              description:'All products and features, no upfront commitment required—cancel anytime.',
              position:'center',
              isContentCentralized:'true'}"
      >
        <template #actions>
            <LinkButton label="Free Account" link="" />
            <LinkButton label="Talk to an Expert" link="" outlined />
        </template>
      </ContentSectionBlock>
      <ContentSectionBlock
                v-bind="{
                    overline:'Results with Azion',
                    title:'Our customers succeed, we succeed',
                    position:'center',
                    isContentCentralized:'true'}"
        >
            <template #main>
                <Card>
                    <template #content>
                        <div class="flex flex-wrap gap-8 justify-center md:flex-row lg:justify-between w-full py-10 md:px-10 px-4">
                            <Stats
                                v-bind="{
                                    bigNumber:'80%',
                                    description:'Better TCO',
                                    isCentralized:true
                                }"
                            />
                            <Stats
                                v-bind="{
                                    bigNumber:'20%',
                                    description:'Faster Deployments',
                                    isCentralized:true
                                }"
                            />
                            <Stats
                                v-bind="{
                                    bigNumber:'100%',
                                    description:'Availability',
                                    isCentralized:true
                                }"
                            />
                            <Stats
                                v-bind="{
                                    bigNumber:'10x',
                                    description:'Faster Applications',
                                    isCentralized:true
                                }"
                            />
                            <Stats
                                v-bind="{
                                    bigNumber:'15m',
                                    description:'Response Time',
                                    isCentralized:true
                                }"
                            />
                        </div>
                    </template>
                </Card>
            </template>
        </ContentSectionBlock>
  </div>
    <div class="px-container w-full flex flex-col gap-40">
      <HeroBlockBase
        v-bind="{
          overline:'teste de overline',
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
          overline:'teste de overline',
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
  import ContentSectionBlock from './templates/content-section-block/index.vue'
  import LinkButton from './templates/button/link.vue';
  import Stats from './templates/stats/index.vue';
</script>
