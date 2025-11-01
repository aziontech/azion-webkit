<template>
  <div :class="{ 'flex flex-col gap-4 mb-5': !isLast, 'flex flex-col gap-4': isLast }">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2 w-full">
        <div>
          <span
            :class="{ 'text-color-secondary font-mono': suffix, 'text-color font-mono': !suffix }"
            >{{ path }}</span
          >
          <span class="text-color font-mono">{{ suffix }}</span>
        </div>
        <Tag
          :value="attribute.type"
          severity="info"
          class="text-xs"
        />
      </div>
      <p class="text-color-secondary text-sm">{{ attribute.description }}</p>
    </div>
    <div v-if="attribute.children && attribute.children.length > 0">
      <Accordion
        :header="attribute.name"
        toggleable
        :pt="{
          content: 'p-3 pt-0',
          togglerIcon: 'text-sm'
        }"
      >
        <AccordionTab>
          <template #header>
            <span class="text-xs text-color-secondary">{{ toggleText }}</span>
          </template>
          <AttributePanel
            v-for="(child, index) in attribute.children"
            :key="index"
            :attribute="child"
            :toggle-text="toggleText"
            :isLast="attribute.children.length && index === attribute.children.length - 1"
          />
        </AccordionTab>
      </Accordion>
    </div>
  </div>
  <Divider
    v-if="!isLast"
    class="mb-5"
  />
</template>

<script setup>
  import { defineProps, ref, computed } from 'vue'
  import Accordion from 'primevue/accordion'
  import AccordionTab from 'primevue/accordiontab'
  import Tag from 'primevue/tag'
  import Divider from 'primevue/divider'

  const props = defineProps({
    isLast: {
      type: Boolean,
      required: true
    },
    attribute: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.name === 'string' &&
          typeof value.type === 'string' &&
          typeof value.description === 'string' &&
          (value.children === undefined || Array.isArray(value.children))
        )
      }
    },
    toggleText: {
      type: String,
      default: 'Hide child attributes'
    }
  })

  const attributeName = ref(props.attribute.name || '')

  function splitStringColor(objectPath) {
    const lastDotIndex = computed(() => objectPath.value.lastIndexOf('.'))
    const hasNoSuffix = computed(() => lastDotIndex.value === -1)

    const path = computed(() =>
      hasNoSuffix.value ? objectPath.value : objectPath.value.slice(0, lastDotIndex.value)
    )

    const suffix = computed(() =>
      hasNoSuffix.value ? '' : objectPath.value.slice(lastDotIndex.value)
    )

    return { path, suffix }
  }

  const { path, suffix } = splitStringColor(attributeName)
</script>
