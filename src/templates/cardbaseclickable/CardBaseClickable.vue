<template>
  <a :href="link" :title="title" class="no-underline flex border-radius cursor-pointer h-full" :target="target" :aria-label="ariaLabel">
    <CardBase v-bind="props">
      <template  v-if="$slots.header" #header>
        <slot name="header" />
      </template>
      <template  v-if="$slots.content" #content>
        <slot name="content" />
      </template>
      <template  v-if="$slots.actions" #actions>
        <slot name="actions" />
      </template>
      <template  v-if="$slots['content-raw']" #content-raw>
        <slot name="content-raw" />
      </template>
    </CardBase>
  </a>
</template>

<script setup>
import CardBase from "../cardbase"

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
    default: 'default',
    options: ['default', 'outlined']
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false
  },
  ariaLabel: {
    type: String,
    required: false
  },
  target: {
    type: String,
    required: false,
    default: '_self',
    options: ['_blank', '_self']
  }
})
</script>
