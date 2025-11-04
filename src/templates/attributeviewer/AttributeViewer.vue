<template>
  <div class="attribute-viewer">
    <div
      v-for="(attribute, index) in attributes"
      :key="index"
      class="mb-4"
    >
      <div class="flex flex-col gap-2 mb-5">
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-semibold text-color font-mono">{{ attribute.name }}</h3>
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
          class=""
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
              v-for="(child, childIndex) in attribute.children"
              :key="childIndex"
              :attribute="child"
              :toggle-text="toggleText"
              :isLast="attribute.children.length && childIndex === attribute.children.length - 1"
            />
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import Tag from 'primevue/tag'
  import Accordion from 'primevue/accordion'
  import AccordionTab from 'primevue/accordiontab'
  import AttributePanel from './AttributePanel.vue'

  defineProps({
    attributes: {
      type: Array,
      required: true,
      default: () => []
    },
    toggleText: {
      type: String,
      default: 'Hide child attributes'
    }
  })
</script>
