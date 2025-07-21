<template>
  <ContentSection
    :titleTag="titleTag"
    :title="title"
    :overline="overline"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :position="position"
    :id="id"
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
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
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
    buttons: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      options: ['left', 'right'],
      default: () => 'left'
    }
  })
</script>
