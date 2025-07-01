<template>
  <CardBase :backgroundColor="backgroundColor">
    <template #content>
      <div class="flex flex-col gap-2">
        <IconTextSegment
          class="h-full"
          :href="link"
          :title="title"
          :description="description"
          :icon="icon"
          severity="primary"
        />
        <div
          v-if="hasLinks"
          class="ml-12"
        >
          <Overline
            v-if="addons"
            label="Add-ons"
          />
          <ul :class="['flex flex-col gap-2 -ml-4', addons ? 'pt-3' : '']">
            <li
              v-for="(item, index) in links"
              :key="index"
            >
              <LinkButton
                text
                size="small"
                :label="item.label"
                :link="item.link"
                :icon="item.icon || ''"
                :iconPos="item.icon ? 'right' : undefined"
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
  import { computed } from 'vue'

  import CardBase from '../cardbase'
  import LinkButton from '../linkbutton'
  import IconTextSegment from '../icontextsegment'
  import Overline from '../overline'

  const hasLinks = computed(() => {
    const hasLinks = props.links && props.links.length > 0 && props.links[0].label.length
    return hasLinks
  })

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
    link: {
      type: String,
      required: false
    },
    links: {
      type: Array,
      required: true,
      default: () => []
    },
    addons: {
      type: Boolean,
      required: false,
      default: false
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'outlined',
      options: ['outlined', 'highlighted', 'shape', 'default']
    }
  })
</script>
