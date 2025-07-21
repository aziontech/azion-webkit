<template>
  <ContentSection
    :pt="{ content: 'surface-50 py-8 lg:py-16 px-5 lg:px-10 rounded' }"
    :overline="overline"
    titleTag="h2"
    :id="id"
    position="full"
  >
    <template #title>
      <h2 v-html="title" />
    </template>
    <template #content>
      <div class="flex flex-col md:flex-row gap-3 md:justify-end md:min-w-fit md:items-end">
        <LinkButton
          class="md:w-fit w-full"
          v-for="({ link, label, outlined }, index) in buttons"
          :key="index"
          :link="link"
          :label="label"
          :outlined="outlined"
        />
      </div>
    </template>
    <template #main>
      <div class="flex flex-col md:flex-row gap-3 justify-between">
        <div
          v-for="({ icon, text }, index) in items"
          :key="index"
          class="flex gap-3"
        >
          <Tile>
            <i
              :class="icon"
              class="text-sm"
            />
          </Tile>
          <p class="font-medium">{{ text }}</p>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import LinkButton from '../linkbutton'
  import ContentSection from '../contentsection'
  import Tile from '../tile'

  defineProps({
    id: {
      type: String,
      required: false
    },
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    buttons: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  })

  // bg-gradient-to-r from-orange-500 to-orange-400 -> To prevent Tailwind from purging classes in JSON, add a comment in your HTML with those classes to ensure they're recognized.
</script>
