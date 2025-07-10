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
                :href="item.link"
                :title="item.label"
                class="block"
              >
                <span class="text-sm">{{ item.label }}</span>
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
          v-for="{ id, titleTag, title, description, cards } in props.items"
        >
          <TitleSection
            :tag="titleTag"
            :title="title"
          />
          <template v-if="descriptionRawHtml && descriptionRawHtml.trim().length">
            <div
              v-html="descriptionRawHtml"
              class="text-color-secondary text-base leading-relaxed text-balance prose max-w-none"
            ></div>
          </template>
          <template v-else-if="description && description.trim().length">
            <p class="text-color-secondary text-body-3 leading-relaxed text-balance">
              {{ description }}
            </p>
          </template>
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
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import TitleSection from '../titlesection'
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
</script>
