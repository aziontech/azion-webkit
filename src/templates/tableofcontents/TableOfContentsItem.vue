<template>
  <ul class="flex flex-col gap-2">
    <li v-for="{ slug, text, children } in data" class="flex flex-col gap-2 overflow-hidden">
      <a class="rounded hover:underline text-color-secondary text-sm truncate max-w-full" :href="`#${slug}`">
        {{ text }}
      </a>
      <template v-if="children.length > 0">
        <TableOfContentsItem class="ml-2" :data="children" />
      </template>
    </li>
  </ul>
</template>

<script setup>
  defineProps({
    data: {
      type: Array,
      required: true,
    }
  })
</script>
