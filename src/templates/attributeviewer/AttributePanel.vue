<template>
    <div :class="{'flex flex-col gap-4 mb-5': !isLast, 'flex flex-col gap-4': isLast}">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2 w-full">
        <div>
          <span :class="{'text-color-secondary font-mono': suffix, 'text-white font-mono': !suffix}">{{ path }}</span>
          <span class="text-white font-mono">{{ suffix }}</span>
        </div>
        <Tag
          :value="attribute.type"
          severity="info"
          class="text-xs"
        />
      </div>
      <p class="text-color-secondary text-sm">{{ attribute.description }}</p>
      </div>
      <div
        v-if="attribute.children && attribute.children.length > 0"
      >
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
    <Divider v-if="!isLast" class="mb-5"/>
</template>

<script setup>
  import { defineProps, ref } from 'vue'
  import Accordion from 'primevue/accordion'
  import AccordionTab from 'primevue/accordiontab'
  import Tag from 'primevue/tag'
  import { splitStringColor } from '../../helpers/splitStringColor'
  import Divider from 'primevue/divider';

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
  const { path, suffix } = splitStringColor(attributeName)
</script>
