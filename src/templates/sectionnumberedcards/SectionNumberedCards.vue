<template>
  <ContentSection
    :title="title"
    :overline="overline"
    :description="description"
    position="center"
    titleTag="h1"
    isContentCentralized
    textCenter
  >
    <template #main>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
          <CardBase
            v-for="(card, index) in cards"
            :key="index"
            grid
          >
            <template #content>
              <Tile> {{ index + 1 }} </Tile>
              <CardTitle> {{ card.title }} </CardTitle>
              <CardDescription> {{ card.description }} </CardDescription>
            </template>
            <template
              v-if="card.button"
              #actions
            >
              <LinkButton
                :label="card.button.label"
                :link="card.button.link"
                :outlined="card.button.outlined"
              />
            </template>
          </CardBase>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Tile from '../tile'
  import LinkButton from '../linkbutton'

  defineProps({
    overline: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    cards: {
      type: Array
    }
  })
</script>
