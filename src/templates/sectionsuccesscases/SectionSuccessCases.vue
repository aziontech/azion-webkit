<template>
  <ContentSection
    :overline="overline"
    :title="title"
    titleTag="h2"
    :id="id"
  >
    <template
      #main
      v-if="button"
    >
      <div class="w-full flex lg:justify-end lg:items-end">
        <LinkButton
          class="min-w-fit !px-0 !pl-0 !pr-0"
          v-bind="button"
          textLink
          icon="pi pi-arrow-right"
          iconPos="right"
        />
      </div>
    </template>

    <template #principal>
      <div class="grid-cols-1 md:grid-cols-3 gap-6 grid place-content-center m-0">
        <CardBaseClickable
          v-for="{ logo, tag, description, link, action } in cards"
          backgroundColor="outlined"
          :action="action"
          :link="link"
          :pt="{
            prime: {
              body: 'h-full',
              content: 'h-full'
            },
            content: 'h-full'
          }"
        >
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex justify-between items-center">
                <div v-html="logo"></div>
                <Tag
                  :value="tag"
                  severity="info"
                />
              </div>
              <CardDescription>
                {{ description }}
              </CardDescription>
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
    id: {
      type: String,
      default: () => ''
    },
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
