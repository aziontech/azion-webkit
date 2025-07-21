<template>
  <ContentSection
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
  >
    <template #content>
      <div
        class="transition-all surface-ground grid m-0 p-0 justify-between gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3"
      >
        <CardBase v-for="{ title, description, links } in cards">
          <template #content>
            <CardTitle> {{ title }} </CardTitle>
            <CardDescription> {{ description }}</CardDescription>
            <div class="flex flex-col">
              <LinkButton
                v-for="{ link, label } in links"
                class="w-fit p-button-link hover:underline text-left"
                :label="label"
                :link="link"
                style="padding: 4px 0 !important"
              />
            </div>
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
  import LinkButton from '../linkbutton'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
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
    cards: {
      type: Array,
      required: true
    }
  })
</script>
