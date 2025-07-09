<template>
  <ContentSection
    :position="props.position"
    :overline="props.overline"
    :titleTag="props.titleTag"
    :title="props.title"
    :description="props.description"
    :descriptionRawHtml="props.descriptionRawHtml"
  >
    <template #actions>
      <LinkButton
        v-for="{ link, label, outlined } in props.buttons"
        severity="secondary"
        :link="link"
        :label="label"
        :outlined="outlined"
      />
    </template>

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
          :id="id"
          class="flex flex-col gap-6"
          v-for="{ titleTag, title, id, cards } in props.items"
        >
          <template v-if="title">
            <h1
              v-if="titleTag === 'h1'"
              class="leading-loose font-medium text-heading-2 text-balance"
              style="line-height: 125% !important"
            >
              {{ title }}
            </h1>
            <h2
              v-if="titleTag === 'h2'"
              class="text-heading-2 leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h2>
            <h3
              v-if="titleTag === 'h3'"
              class="text-heading-2 leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h3>
            <h4
              v-if="titleTag === 'h4'"
              class="text-heading-2 leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h4>
            <h5
              v-if="titleTag === 'h5'"
              class="text-heading-2 leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h5>
            <h6
              v-if="titleTag === 'h6'"
              class="text-heading-2 leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h6>
          </template>
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
  import CardBaseClickable from '../cardbaseclickable'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Overline from '../overline'
  import LinkButton from '../linkbutton'
  import Menu from 'primevue/menu'

  const props = defineProps({
    position: {
      type: String,
      default: () => 'right',
      validator: (value) => ['left', 'right'].includes(value)
    },
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
    items: {
      type: [Array, undefined, null]
    }
  })
</script>
