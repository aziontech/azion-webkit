<template>
  <HeroArticle
    :date="props.date"
    :title="props.title"
    :description="props.description"
    :authors="props.authors"
  >
    <template #breadcrumbs>
      <Breadcrumb
        :model="props.breadcrumbItems"
        class="-ml-1 lg:col-start-2"
      />
    </template>
  </HeroArticle>
</template>

<script setup>
  import Breadcrumb from 'primevue/breadcrumb'
  import HeroArticle from '../../templates/heroarticle'

  const props = defineProps({
    breadcrumbItems: {
      type: Array // url, target, label
    },
    date: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    authors: {
      type: Array // avatar, title, role
    },
    description: {
      type: String
    }
  })
</script>
