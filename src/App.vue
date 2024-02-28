<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-0">
      <ContentSectionBlock
            v-bind="{
                overline:'Market Recognition',
                title:'What analysts say about Azion',
                position:'center',
                isContentCentralized:'true'}"
        >
            <template #main>
                <div class="grid gap-6 md:gap-8 grid-cols-2">
                    <Card class="w-fit">
                        <template #content>
                            <ContentQuoteBlock
                            class="p-8 w-fit"
                                :data="{
                                    0:{text:'Azion Named Strong Performer and a good fit for large enterprises seeking to accelerate innovation at the edge with serverless full-stack applications.',
                                    label:'Edge Development Platforms, Q4 2021.',
                                    imageLight:'src/mock/logos/light/forrester-logo.svg',
                                    imageDark:'src/mock/logos/dark/forrester-logo.svg'}
                                }"
                                :is-carousel="false"
                            />
                        </template>
                    </Card>
                    <Card class="w-fit">
                        <template #content>
                            <ContentQuoteBlock
                            class="p-8 w-fit"
                                :data="{
                                    0:{text:'Azion Named a Leader and identified as the only purpose-built edge platform whose capabilities meet all the key criteria described in the report',
                                    label:'GigaOms Radar for Edge Platforms.',
                                    imageLight:'src/mock/logos/light/gigaom-logo.svg',
                                    imageDark:'src/mock/logos/dark/gigaom-logo.svg'}
                                }"
                                :is-carousel="false"
                            />
                        </template>
                    </Card>
                    <Card class="w-fit">
                        <template #content>
                            <ContentQuoteBlock
                            class="p-8 w-fit"
                                :data="{
                                    0:{text:'Gartner clients state that Azion excels in providing a consultative approach toward orchestration and serverless edge application environments.',
                                    label:'Gartner Competitive Landscape for CDN and Edge Services.',
                                    imageLight:'src/mock/logos/light/gartner-logo.svg',
                                    imageDark:'src/mock/logos/dark/gartner-logo.svg'}
                                }"
                                :is-carousel="false"
                            />
                        </template>
                    </Card>
                    <Card class="w-fit">
                        <template #content>
                            <ContentQuoteBlock
                            class="p-8 w-fit"
                                :data="{
                                    0:{text:'Appointed Azion’s serverless edge platform heightens business agility by empowering developers to build and scale their applications.',
                                    label:'Frost & Sullivan Best Practices Award, North.',
                                    imageLight:'src/mock/logos/light/frostandsullivan-logo.svg',
                                    imageDark:'src/mock/logos/dark/frostandsullivan-logo.svg'}
                                }"
                                :is-carousel="false"
                            />
                        </template>
                    </Card>
                </div>
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
  import ContentQuoteBlock from './templates/content-quote-block/index.vue'
</script>
