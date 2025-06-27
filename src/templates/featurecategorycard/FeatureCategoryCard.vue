<template>
  <CardBase backgroundColor="outlined">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex gap-4 items-start">
          <Tile severity="primary">
            <i :class="icon" />
          </Tile>
          <div class="flex flex-col">
            <h4 class="m-0 font-semibold">{{ title }}</h4>
            <p class="m-0 text-color-secondary">{{ description }}</p>
          </div>
        </div>
        <div class="ml-12">
          <ul class="flex flex-col gap-2">
            <li
              v-for="(item, index) in links"
              :key="index"
            >
              <LinkButton
                text
                size="small"
                :label="item.label"
                :link="item.link"
                class="max-w-fit"
              />
            </li>
          </ul>
        </div>
      </div>
    </template>
  </CardBase>
</template>

<script setup>
  import CardBase from '../cardbase'
  import LinkButton from '../linkbutton'
  import Tile from '../tile'

  const props = defineProps({
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    links: {
      type: Array,
      required: true,
      default: () => []
    }
  })
</script>
