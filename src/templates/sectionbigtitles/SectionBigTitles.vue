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
      <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
        <div class="flex flex-col gap-4" v-for="{ title, description, icon } in data">
            <Tile severity="primary">
              <i :class="icon" />
            </Tile>
            <div class="flex flex-col gap-2">
              <p class="text-7xl font-semibold"> {{ title }} </p>
              <CardDescription> {{ description }} </CardDescription>
            </div>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
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
    data: {
      type: Array,
      required: true
    }
  })
</script>
