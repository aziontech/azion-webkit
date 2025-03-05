<template>
  <div class="flex flex-col gap-16">
    <template
      v-for="({ title, items }, index) in props.data"
      :key="index"
    >
      <div class="flex flex-col gap-8">
        <p class="font-medium text-base">{{ title }}</p>
        <UnorderedList
          :severity="severity"
          :data="items"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
  import UnorderedList from '../listunordered'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    severity: {
      type: String,
      default: () => 'default',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    }
  })
</script>
