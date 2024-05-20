<template>
  <Card class="w-full shadow-none bg-transparent flex flex-col rounded-md border surface-border group focus:outline-[rgba(243,100,43,.624)]" :pt="{
    root: { class: [[{ 'flex flex-col h-full' : grid}]] },
    body: { class: [{ 'flex flex-col grow' : grid}] },
    content: { class: [{ 'flex flex-col grow' : grid}] }
  }">
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
        ]">
          <div class="flex flex-col gap-3">
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

defineProps({
  spacing: {
    type: String,
    required: false,
    options: ['compact', 'relaxed', 'base'],
    default: 'base'
  },
  grid: {
    type: Boolean,
    required: false
  }
})
</script>
