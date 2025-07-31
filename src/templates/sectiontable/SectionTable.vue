<template>
  <ContentSection
    :isContentCentralized="isContentCentralized"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
    :margin="margin"
  >
    <template #content>
      <Table
        :title="table.title"
        :columns="table.columns"
        :rows="table.rows"
        :data="table.data"
      />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection/ContentSection'
  import Table from '../table/Table'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    isContentCentralized: {
      type: Boolean,
      default: () => true
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
    table: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value &&
          Array.isArray(value.columns) &&
          Array.isArray(value.rows) &&
          Array.isArray(value.data) &&
          (value.title === undefined || typeof value.title === 'string')
        )
      }
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
