<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :title="title"
    :class="['p-3 group rounded-md transition-all', href ? 'hover:surface-hover' : '']"
  >
    <IconText v-bind="{ title, description, icon, tag, tagSeverity, severity }">
      <template #icon>
        <slot name="icon" />
      </template>
    </IconText>
  </component>
</template>

<script setup>
  import IconText from '../icontext'

  defineProps({
    href: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    tagSeverity: {
      type: String,
      required: false,
      default: 'info'
    },
    severity: {
      type: String,
      required: false,
      default: 'default',
      options: ['default', 'primary']
    }
  })
</script>
