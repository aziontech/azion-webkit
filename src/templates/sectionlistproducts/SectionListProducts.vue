<template>
  <ContentSection
    position="center"
    :overline="props.overline"
    :title="props.title"
    :titleTag="props.titleTag"
  >
    <template #main>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center m-0"
      >
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
    list: {
      type: Array,
      default: () => []
    },
    grid:{
      type: Boolean,
      default: () => false
    }
  })
</script>
