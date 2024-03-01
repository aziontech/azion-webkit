<template>
  <Card :pt="{
    root: { class: 'w-full shadow-none bg-transparent flex flex-col rounded-md border surface-border overflow-hidden h-full' }
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
        <div class="flex flex-col gap-8" :class="[
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
})
</script>
