<template>
  <ContentSection
    titleTag="h2"
    :overline="overline"
    :title="title"
    :isContentCentralized="data.justify === 'center' ? true : false"
  >
    <template
      v-if="button"
      #main
    >
      <div class="w-full flex lg:justify-end lg:items-end">
        <LinkButton
          v-bind="button"
          textLink
          iconPos="right"
          icon="pi pi-arrow-right"
        />
      </div>
    </template>

    <template #principal>
      <BigNumbers v-bind="data" />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import BigNumbers from '../bignumbers'
  import LinkButton from '../linkbutton'

  defineProps({
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    overline: {
      type: String,
      required: false
    },
    button: {
      type: Object,
      required: false
    }
  })
</script>
