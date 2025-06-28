<template>
  <ContentSection
    position="center"
    :overline="props.overline"
    :title="props.title"
    :titleTag="props.titleTag"
  >
    <template #main>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid place-content-center m-0"
      >
        <ProductCard
          v-for="{ title, icon, description, link, addons } in props.list"
          :key="title"
          :title="title"
          :icon="icon"
          :description="description"
          :link="link"
          :links="addons || []"
          :addons="addons && addons.length > 0"
          backgroundColor="default"
          :class="[
            addons &&
              addons.some((addon) => addon.label && addon.label.trim() !== '') &&
              'row-span-2'
          ]"
        />
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import ProductCard from '../productcard'

  const props = defineProps({
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    overline: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      default: () => []
    }
  })
</script>
