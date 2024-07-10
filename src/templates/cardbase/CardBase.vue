<template>
  <Card class="w-full shadow-none flex flex-col rounded-md border group"
    :class="[
      { 'hover:border-[var(--primary-color)]' : hover == 'default' },
      { 'hover:bg-[var(--surface-0)] hover:border-[var(--primary-color)]' : hover == 'outlined' },
      { 'hover:transform hover:-translate-y-6  transition-transform duration-300' : hover == 'slide-up'},
      { 'bg-[var(--surface-0)] surface-border focus:outline-[rgba(243,100,43,.624)]' : backgroundColor == 'outlined'},
      { 'bg-[var(--surface-50)] border-transparent focus:outline-[rgba(243,100,43,.624)]' : backgroundColor == 'shape'},
      { 'bg-[var(--surface-50)] border-[#F3652B] focus:outline-[rgba(243,100,43,.624)]' : backgroundColor == 'highlighted'},
      { 'bg-transparent surface-border focus:outline-[rgba(243,100,43,.624)]' : backgroundColor == 'default'}
    ]"
    :pt="definePTPrime()"
  >
    <template v-if="$slots.header" #header>
      <div class="flex flex-col gap-8" :class="[
          {'p-4 md:p-6' : spacing === 'compact'},
          {'p-5 md:p-8' : spacing === 'base'},
          {'p-6 md:p-10' : spacing === 'relaxed'},
        ]">
        <slot name="header" />
      </div>
    </template>
    <template #content>
      <template v-if="$slots.content || $slots.actions">
        <div class="flex flex-col gap-8 justify-between grow" :class="[
          {'p-4 md:p-6' : spacing === 'compact'},
          {'p-5 md:p-8' : spacing === 'base'},
          {'p-6 md:p-10' : spacing === 'relaxed'},
          defineComponentPT()
        ]">
          <div class="flex flex-col gap-3 grow">
            <slot name="content"/>
          </div>
          <template v-if="$slots.actions">
            <div class="flex flex-col md:flex-row flex-wrap gap-2">
              <slot name="actions" />
            </div>
          </template>
        </div>
      </template>
      <template v-if="$slots['content-raw']">
        <slot name="content-raw" />
      </template>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card"

const props = defineProps({
  spacing: {
    type: String,
    required: false,
    options: ['compact', 'relaxed', 'base'],
    default: 'base'
  },
  grid: {
    type: Boolean,
    required: false
  },
  backgroundColor: {
    type: String,
    required: false,
    default: 'default',
    options: ['outlined', 'shape', 'default']
  },
  hover: {
    type: String,
    required: false,
    options: ['default', 'outlined', 'slide-up']
  },
  pt: {
    type: Object,
    required: false,
  }
})

function definePTPrime() {
  if (props.grid) {
    return {
      root: { class: [[{ 'flex flex-col h-full' : props.grid}]] },
      body: { class: [{ 'flex flex-col grow' : props.grid}] },
      content: { class: [{ 'flex flex-col grow' : props.grid}] }
    }
  }

  if (!props.pt) return

  if (props.pt.prime) {
    return {...props.pt.prime}
  }

  return {}
}

function defineComponentPT() {
  if (!props.pt) return

  if (props.pt.content) {
    return props.pt.content
  }

  return ''
}
</script>
