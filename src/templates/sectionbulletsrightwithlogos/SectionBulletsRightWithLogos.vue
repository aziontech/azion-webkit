<template>
  <ContentSection
    titleTag="h2"
    :title="title"
    :id="id"
  >
    <template v-slot:actions>
      <template v-if="button && button.label">
        <LinkButton
          v-bind="button"
          outlined
        />
      </template>
    </template>

    <template v-slot:content>
      <ContentLogoBlock :logos="logos" />
    </template>

    <template v-slot:main>
      <UnorderedList
        class="w-full"
        :severity="severity"
        :data="list"
      />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import ContentLogoBlock from '../contentlogo'
  import LinkButton from '../linkbutton'
  import UnorderedList from '../listunordered'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    // gap: {
    //   type: String,
    //   default: () => 'default',
    //   options: ['small', 'default']
    // },
    title: {
      type: String,
      required: true
    },
    button: {
      type: Object
    },
    logos: {
      type: Array
    },
    severity: {
      type: String,
      default: () => 'primary',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    },
    list: {
      type: Array
    }
  })
</script>
