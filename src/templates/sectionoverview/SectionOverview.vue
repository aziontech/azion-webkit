<template>
  <ContentSection
    :titleTag="titleTag"
    :title="title"
    :overline="overline"
    :description="description"
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
      <DescriptionUnorderedList
        :severity="severity"
        :data="data"
        class="min-w-[40%]"
      />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import DescriptionUnorderedList from '../listdescriptionunordered'

  defineProps({
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttons: {
      type: Array,
      default() {
        return []
      }
    },
    severity: {
      type: String,
      default: () => 'primary',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  })
</script>
