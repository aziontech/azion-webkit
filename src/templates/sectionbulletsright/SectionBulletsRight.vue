<template>
  <ContentSection
    :title="title"
    :overline="overline"
    :description="description"
    titleTag="h2"
  >
    <template #actions>
      <template
        v-for="(button, index) in buttons"
        :key="index"
      >
        <LinkButton
          v-if="button.link"
          v-bind="button"
        />
      </template>
    </template>

    <template #main>
      <UnorderedList
        :data="data"
        class="min-w-[40%]"
      />
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
