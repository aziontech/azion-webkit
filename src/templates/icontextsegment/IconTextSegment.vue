<template>
  <a
    :href="href"
    :title="title"
    class="p-3 group hover:surface-hover rounded-md transition-all">
    <IconText v-bind="{ title, description, icon, tag, tagSeverity }" />
  </a>
</template>

<script setup>
  import IconText from "../icontext"

  defineProps({
    href: {
      type: String,
      required: true,
      default: '#'
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: false,
    },
    tagSeverity: {
      type: String,
      required: false,
      default: 'info'
    }
  });
</script>
