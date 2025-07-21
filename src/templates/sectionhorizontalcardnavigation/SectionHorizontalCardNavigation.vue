<template>
  <ContentSection position="right">
    <template #main>
      <div class="w-full max-w-80">
        <div class="hidden md:block lg:top-20 lg:sticky">
          <Menu
            :model="props.leftSidebar"
            class="w-full"
            :pt="{
              menu: { class: 'flex flex-col gap-2' },
              content: { class: 'p-2' }
            }"
          >
            <template #item="{ item }">
              <a
                href="javascript: void(0)"
                :title="item.label"
                class="block text-sm"
                @click="scrollTo(item.link)"
              >
                {{ item.label }}
              </a>
            </template>
          </Menu>
        </div>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-10 lg:gap-20">
        <div
          :id="id"
          class="flex flex-col gap-6"
          v-for="{ id, titleTag, title, description, descriptionRawHtml, cards } in props.items"
        >
          <ContentSection
            :title="title"
            :titleTag="titleTag"
            :description="description"
            :descriptionRawHtml="descriptionRawHtml"
          >
            <template #principal>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center m-0">
                <CardBaseClickable
                  grid
                  :link="card.link"
                  :action="card.action"
                  :key="index"
                  v-for="(card, index) in cards"
                >
                  <template #content>
                    <CardTitle>
                      {{ card.title }}
                    </CardTitle>
                    <template v-if="card.description">
                      <CardDescription>
                        {{ card.description }}
                      </CardDescription>
                    </template>
                  </template>
                </CardBaseClickable>
              </div>
            </template>
          </ContentSection>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardBaseClickable from '../cardbaseclickable'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Menu from 'primevue/menu'

  const props = defineProps({
    leftSidebar: {
      type: [Array, undefined, null]
    },
    items: {
      type: [Array, undefined, null]
    }
  })

  function scrollTo(id) {
    const element = document.querySelector(id)

    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
</script>
