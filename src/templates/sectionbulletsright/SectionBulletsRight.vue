<template>
  <ContentSection
    :title="title"
    :overline="overline"
    :description="description"
    titleTag="h2"
  >
    <template #actions>
      <LinkButton
        v-for="{ link, label, outlined } in buttons"
        :link="link"
        :label="label"
        :outlined="outlined"
      />
    </template>
    <template #main>
      <UnorderedList :data="data" />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import UnorderedList from '../listunordered'

  defineProps({
    buttons: {
      type: Array,
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
    description: {
      type: String,
      required: true
    },
    data: {
      required: false
    }
  })
</script>
