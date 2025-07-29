<template>
  <ContentSection
    titleTag="h2"
    :overline="overline"
    :title="title"
    position="left"
    :isContentCentralized="data.justify === 'center' ? true : false"
    :id="id"
    :margin="margin"
  >
    <template
      v-if="button"
      #main
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
      <div class="flex flex-col gap-10">
        <BigNumbers
          v-bind="data"
          class="w-full"
        />

        <div class="relative w-full !h-[calc(100vh-56px)]">
          <Livemap :lang="lang" />
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import BigNumbers from '../bignumbers'
  import Livemap from '../livemap'
  import LinkButton from '../linkbutton'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    overline: {
      type: String
    },
    lang: {
      type: String,
      default: 'pt-br'
    },
    button: {
      type: Object
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
