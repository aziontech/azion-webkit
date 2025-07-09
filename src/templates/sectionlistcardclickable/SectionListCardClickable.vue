<template>
  <ContentSection
    position="center"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
  >
    <template #main>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center m-0">
        <CardBaseClickable
          grid
          :link="card.link"
          :action="card.action"
          :key="index"
          v-for="(card, index) in cards"
        >
          <template #content>
            <CardTitle>
              {{ card.title }}
            </CardTitle>
            <template v-if="card.description">
              <CardDescription>
                {{ card.description }}
              </CardDescription>
            </template>
          </template>
        </CardBaseClickable>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardBaseClickable from '../cardbaseclickable'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'

  const props = defineProps({
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      required: true,
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array //{ overline, id, cards}
    }
  })
</script>
