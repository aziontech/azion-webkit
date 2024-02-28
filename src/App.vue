<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-20">
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
