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
        :htmlTable="table.htmlTable"
      />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import Table from '../table'

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
        if (!value) {
          console.error('SectionTable: table prop is required')
          return false
        }

        if (typeof value.htmlTable !== 'string') {
          console.error('SectionTable: table.htmlTable must be a string')
          return false
        }

        if (value.title !== undefined && typeof value.title !== 'string') {
          console.error('SectionTable: table.title must be a string if provided')
          return false
        }

        return true
      }
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
