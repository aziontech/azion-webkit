<template>
  <ContentSection :overline="overline" :title="title" titleTag="h2">
    <template v-if="button" #main>
      <div class="w-full flex lg:justify-end lg:items-end">
        <LinkButton class="min-w-fit" v-bind="button" textLink icon="pi pi-arrow-right" iconPos="right" />
      </div>
    </template>
    <template #principal>
      <div class="grid-cols-1 md:grid-cols-3 gap-6 grid place-content-center m-0">
        <CardBaseClickable v-for="({ logo, tag, description, link }) in cards" backgroundColor="outlined" :link="link"
          disableAction>
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex justify-between items-center">
                <div v-html="logo" />
                <Tag :value="tag" severity="info" />
              </div>
              <CardDescription>{{ description }}</CardDescription>
            </div>
          </template>
        </CardBaseClickable>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
import ContentSection from '../contentsection'
import CardBaseClickable from '../cardbaseclickable'
import CardDescription from '../carddescription'
import LinkButton from '../linkbutton'
import Tag from 'primevue/tag'

defineProps({
  overline: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
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
