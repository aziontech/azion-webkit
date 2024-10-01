<template>
  <ContentSection
    titleTag="h2"
    :overline="overline"
    :title="title"
  >
    <template v-if="button" #main>
      <div class="flex justify-end lg:items-end">
        <LinkButton v-bind="button" textLink />
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
      required: true,
    },
    overline: {
      type: String,
      required: false,
    },
    button: {
      type: Object,
      required: false,
    }
  });
</script>
