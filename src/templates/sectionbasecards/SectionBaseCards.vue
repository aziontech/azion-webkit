<template>
  <ContentSection
    :overline="overline"
    :title="title"
    :description="description"
    titleTag="h2"
    isContentCentralized
    position="center"
  >
    <template v-slot:content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <CardBase
          class="min-h-48"
          v-for="card in cards"
          :key="card.title"
        >
          <template v-slot:content>
            <CardTitle>
              {{ card.title }}
            </CardTitle>
            <CardDescription>
              {{ card.description }}
            </CardDescription>
          </template>
        </CardBase>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'

  const props = defineProps({
    overline: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    cards: {
      type: Array,
      required: true
    }
  })
</script>
