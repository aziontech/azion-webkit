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

  <div class="w-full">
    <MenuNavigation
      :menuTitle="props.menuTitle"
      :menuItems="props.menuItems"
      :mobileLabel="props.mobileLabel"
    />
    <Divider />
  </div>
</template>

<script setup>
  import Breadcrumb from 'primevue/breadcrumb'
  import Divider from 'primevue/divider'
  import HeroArticle from '../../templates/heroarticle'
  import MenuNavigation from '../../templates/menunavigationblock'

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
    },
    menuTitle: {
      type: String
    },
    mobileLabel: {
      type: String
    },
    menuItems: {
      type: Array
    }
  })
</script>
