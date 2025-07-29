<template>
  <ContentSection
    position="center"
    :overline="props.overline"
    :titleTag="props.titleTag"
    :title="props.title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
    :margin="props.margin"
  >
    <template #main>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center m-0">
        <ProductCard
          v-for="{ title, icon, description, link, addons, links } in props.list"
          :key="title"
          :title="title"
          :icon="icon"
          :description="description"
          :link="link"
          :links="links"
          :addons="addons"
          :class="[!grid && addons && 'row-span-2']"
        />
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import ProductCard from '../productcard'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
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
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    list: {
      type: Array,
      default: () => []
    },
    grid: {
      type: Boolean,
      default: () => false
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
