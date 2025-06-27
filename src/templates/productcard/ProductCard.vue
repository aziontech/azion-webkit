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
              :icon="item.arrow ? 'pi pi-arrow-right' : undefined"
              :iconPos="item.arrow ? 'right' : undefined"
              class="max-w-fit"
            />
          </li>
        </ul>

        <template v-if="addons && addons.some((addon) => addon.label && addon.label.trim() !== '')">
          <div class="ml-12">
            <Overline label="Add-ons" />
            <div class="flex flex-col gap-2 pt-3 -ml-4">
              <LinkButton
                v-for="{ label, link } in addons.filter(
                  (addon) => addon.label && addon.label.trim() !== ''
                )"
                text
                :label="label"
                :link="link"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="max-w-fit"
              />
            </div>
          </div>
        </template>
      </div>
    </template>
  </CardBase>
</template>

<script setup>
  import CardBase from '../cardbase'
  import LinkButton from '../linkbutton'
  import IconTextSegment from '../icontextsegment'
  import Overline from '../overline'

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
      type: Array,
      required: false,
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
