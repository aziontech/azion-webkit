<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-40">
      <ContentSectionBlock
        v-bind="{
            title:'Discover the power of Edge Computing',
            description:'Edge Computing delivers better performance, security, reliability, and efficiency for any workload. Also, it enables innovative mission-critical services required to build the future of e-commerce, entertainment, finance, and applications such as modern IoT, AI, 5G, AR, and VR applications.',
            position:'center',
            isContentCentralized:'true'}"
    >
        <template #main>
            <GridBentoBlock v-bind="{gridType:'3-columns-7-items'}">
                <template #item-0>
                    <Card class="animate-card">
                        <template #content>
                            <div class="p-10">
                            <div class="flex flex-col gap-8">
                                <div class="flex flex-col gap-5">
                                <Overline label="Easy to use"/>
                                <h2 class="font-medium text-2xl text-color">Start building in minutes with our set of templates</h2>
                                </div>
                            </div>
                            </div>
                            <div class="w-full h-[258px] overflow-hidden">  
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-1>
                    <Card>
                        <template #content>
                            <div class="p-10">
                                <div class="flex flex-col gap-8">
                                    <div class="flex flex-col gap-5">
                                    <Overline label="Build once, run anywhere"/>
                                    <h2 class="font-medium text-2xl text-color">Your way to use Azion through UI, CLI or API</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-[258px] overflow-hidden">
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-2>
                    <Card>
                        <template #content>
                            <div class="p-10">
                                <div class="flex flex-col gap-8">
                                    <div class="flex flex-col gap-5">
                                    <Overline label="Highest Level of Protection"/>
                                    <h2 class="font-medium text-2xl text-color">Programmable e-autonomous security</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full h-[258px] overflow-hidden">
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-3>
                    <Card>
                        <template #content>
                            <div class="flex flex-col md:flex-row gap-8">
                                <div class="p-10 md:w-1/2">
                                    <div class="flex flex-col gap-8">
                                        <div class="flex flex-col gap-5">
                                            <Overline label="Service reliability"/>
                                            <h2 class="font-medium text-2xl text-color">100+ Edge Locations, 10Tb/s</h2>
                                            <p class="text-color-secondary text-sm leading-relaxed">Our highly distributed architecture includes edge nodes strategically located within Internet Service Providers (ISPs) around the world, spanning across four continents, guaranteeing the fastest and most reliable connectivity.</p>
                                        </div>
                                        <PrimeButton size="small" outlined label="Azion Network" icon="pi pi-arrow-up-right" icon-pos="right" class="w-fit"/>
                                        </div>
                                    </div>
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-4>
                    <Card>
                        <template #content>
                            <div class="p-10">
                                <div class="flex flex-col gap-8">
                                    <div class="flex flex-col gap-5">
                                        <div class="h-7 w-7 flex items-center justify-center surface-200 rounded-md">
                                        <i class="pi pi-th-large text-sm"></i>
                                        </div>
                                        <h3 class="font-medium text-xl text-color">Discover the Basics of Edge Computing</h3>
                                        <PrimeButton size="small" outlined label="Watch our Explainer" icon="pi pi-play" icon-pos="left" class="w-fit"/>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-5>
                    <Card>
                        <template #content>
                            <div class="p-10">
                                <div class="flex flex-col gap-8">
                                    <div class="flex flex-col gap-5">
                                        <div class="h-7 w-7 flex items-center justify-center surface-200 rounded-md">
                                        <i class="pi pi-cloud text-sm"></i>
                                        </div>
                                        <h3 class="font-medium text-xl text-color">Explore the Evolution of Cloud to Edge</h3>
                                        <PrimeButton size="small" outlined label="Explore the Evolution" icon="pi pi-arrow-up-right" icon-pos="right" class="w-fit"/>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </template>
                <template #item-6>
                    <Card>
                        <template #content>
                            <div class="p-10">
                                <div class="flex flex-col gap-8">
                                <div class="flex flex-col gap-5">
                                    <div class="h-7 w-7 flex items-center justify-center surface-200 rounded-md">
                                    <i class="pi pi-file text-sm"></i>
                                    </div>
                                    <h3 class="font-medium text-xl text-color">Learn about how to use Edge Solutions</h3>
                                    <PrimeButton size="small" outlined label="Download Whitepaper" icon="pi pi-download" icon-pos="left" class="w-fit"/>
                                </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </template>
            </GridBentoBlock>
        </template>
      </ContentSectionBlock>
    </div>
  </div>
</template>

<script setup>
  // Imports Components
  import Card from 'primevue/card'
  import PrimeButton from 'primevue/button'

  // Imports Templates 
  import ContentSectionBlock from './templates/content-section-block/index.vue'
  import GridBentoBlock from './templates/grid-bento-block/index.vue'
  import Overline from './templates/overline/index.vue'
  import ContentQuoteBlock from './templates/content-quote-block/index.vue'
</script>
