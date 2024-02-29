<template>
  <Card :pt="{
    root: { class: 'w-full shadow-none bg-transparent flex flex-col rounded-md border surface-border overflow-hidden h-full' }
  }">
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="px-8 pt-8 flex flex-col gap-3" :class="[{ 'pb-8' : !image}]">
          <template v-if="overline">
            <Overline :label="overline"/>
          </template>
          <template v-if="title">
            <p class="text-base">{{ title }}</p>
          </template>
          <template v-if="description">
            <p class="text-sm text-color-secondary">{{ description }}</p>
          </template>
        </div>
        <template v-if="image">
          <div class="pl-8">
              <img class="w-full" :src="image" />
          </div>
        </template>
      </div>
  </template>
  </Card>
</template>

<script setup>
import { Overline } from "../../index.js"
import Card from "primevue/card"

defineProps({
  overline: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  }
})

</script>
