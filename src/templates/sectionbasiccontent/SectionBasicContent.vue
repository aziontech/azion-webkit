<template>
  <ContentSection
    position="center"
    isContentCentralized
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :wysisyg="wysisyg"
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
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'

  defineProps({
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      rquired: true
    },
    wysisyg: {
      type: Boolean,
      default: () => false
    },
    description: {
      type: String
    },
    buttons: {
      type: Array,
      default: () => []
    }
  })
</script>
