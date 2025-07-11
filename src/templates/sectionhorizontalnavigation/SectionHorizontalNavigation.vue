<template>
  <ContentSection
    position="right"
    :overline="props.overline"
    :titleTag="props.titleTag"
    :title="props.title"
    :description="props.description"
    :descriptionRawHtml="props.descriptionRawHtml"
  >
    <template #actions>
      <LinkButton
        v-for="{ link, label } in props.buttons"
        severity="secondary"
        :link="link"
        :label="label"
      />
    </template>

    <template #main>
      <div class="w-full max-w-80">
        <div class="hidden lg:block lg:top-20 lg:sticky">
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
      <div class="flex flex-col gap-10 lg:gap-20 mt-12">
        <div
          v-for="{ overline, id, cards } in props.cardContent"
          :id="id"
          class="flex flex-col gap-6"
        >
          <Overline :label="overline" />
          <CardBase
            v-for="{ title, text, links, image, alt } in cards"
            class="w-full"
            spacing="compact"
          >
            <template #content>
              <div class="flex flex-col lg:flex-row gap-8 lg:gap-3">
                <div class="lg:w-1/12">
                  <img
                    width="60"
                    height="60"
                    :src="image"
                    :alt="alt"
                  />
                </div>
                <div
                  class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 m-0 lg:w-11/12"
                >
                  <CardTitle>
                    {{ title }}
                  </CardTitle>
                  <div class="order-2 flex flex-col justify-end gap-3">
                    <LinkButton
                      v-for="{ link, label } in links"
                      textLink
                      class="!p-0"
                      size="small"
                      icon-pos="right"
                      icon="pi pi-arrow-up-right"
                      :link="link"
                      :label="label"
                    />
                  </div>
                  <CardDescription class="xl:col-span-2 lg:row-span-2">
                    {{ text }}
                  </CardDescription>
                </div>
              </div>
            </template>
          </CardBase>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Overline from '../overline'
  import LinkButton from '../linkbutton'
  import Menu from 'primevue/menu'

  const props = defineProps({
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
    buttons: {
      type: [Object, undefined, null]
    },
    leftSidebar: {
      type: [Array, undefined, null]
    },
    cardContent: {
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
