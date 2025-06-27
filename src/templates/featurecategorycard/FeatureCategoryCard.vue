<template>
  <CardBase :backgroundColor="backgroundColor">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex gap-4 items-start">
          <Tile severity="primary">
            <slot name="icon" />
          </Tile>
          <div class="flex flex-col gap-1">
            <CardTitle>
              <slot name="title">{{ title }}</slot>
            </CardTitle>
            <CardDescription>
              <slot name="description">{{ description }}</slot>
            </CardDescription>
          </div>
        </div>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(item, index) in links"
            :key="index"
          >
            <LinkButton
              textLink
              size="small"
              icon="pi pi-arrow-up-right"
              icon-pos="right"
              :label="item.label"
              :link="item.link"
            />
          </li>
        </ul>
      </div>
    </template>
  </CardBase>
</template>

<script setup>
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Tile from '../tile'
  import LinkButton from '../linkbutton'

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
    links: {
      type: Array,
      required: true,
      default: () => []
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'outlined',
      options: ['outlined', 'highlighted', 'shape', 'default']
    }
  })
</script>
