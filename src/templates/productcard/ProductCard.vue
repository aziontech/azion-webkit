<template>
  <CardBase :backgroundColor="backgroundColor">
    <template #content>
      <div class="flex flex-col gap-6">
        <IconTextSegment
          class="h-full"
          :href="link"
          :title="title"
          :description="description"
          :icon="icon"
          severity="primary"
        >
          <template #icon>
            <slot name="icon" />
          </template>
        </IconTextSegment>
        <ul class="flex flex-col gap-2 ml-12">
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
    </template>
  </CardBase>
</template>

<script setup>
  import CardBase from '../cardbase'
  import LinkButton from '../linkbutton'
  import IconTextSegment from '../icontextsegment'

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
    backgroundColor: {
      type: String,
      required: false,
      default: 'outlined',
      options: ['outlined', 'highlighted', 'shape', 'default']
    }
  })
</script>
