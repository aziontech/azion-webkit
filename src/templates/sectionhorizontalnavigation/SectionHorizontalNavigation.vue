<template>
  <ContentSection
    position="right"
    :overline="props.overline"
    :title="props.title"
    :description="props.description"
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
              <a :href="item.link">
                <span class="text-sm">{{ item.label }}</span>
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
                      text
                      size="small"
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
      type: [String, undefined, null]
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
      type: [Object, undefined, null]
    },
    leftSidebar: {
      type: [Array, undefined, null]
    },
    cardContent: {
      type: [Array, undefined, null]
    }
  })
</script>
