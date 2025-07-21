<template>
  <ContentSection
    position="center"
    :isContentCentralized="true"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
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
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    cards: {
      type: Array,
      required: true,
      default: () => []
    }
  })
</script>
