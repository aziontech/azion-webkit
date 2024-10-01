<template>
  <ContentSection
    :overline="overline"
    :title="title"
    :description="description"
    titleTag="h2"
  >
    <template #main>
      <div class="w-full flex lg:justify-end lg:items-end">
        <LinkButton
          class="min-w-fit !px-0 !pr-0 !pl-0"
          v-bind="button"
          textLink
          icon="pi pi-arrow-right"
          iconPos="right"
        />
      </div>
    </template>
    <template #principal>
      <div class="grid md:grid-cols-3 gap-8">
        <CardBase
          v-for="{ overline, title, description } in cards"
          backgroundColor="outlined"
        >
          <template #content>
            <Tile severity="primary">
              <i class="pi pi-check-square" />
            </Tile>
            <Overline :label="overline"> </Overline>
            <CardTitle> {{ title }} </CardTitle>
            <CardDescription> {{ description }} </CardDescription>
          </template>
        </CardBase>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import CardBase from '../cardbase'
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Tile from '../tile'

  defineProps({
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    button: {
      type: Object,
      required: false
    },
    cards: {
      type: Array,
      required: true
    }
  })
</script>
