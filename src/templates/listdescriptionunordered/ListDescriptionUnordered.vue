<template>
  <div class="flex flex-col gap-14">
    <template
      v-for="({ title, items }, index) in props.data"
      :key="index"
    >
      <div class="flex flex-col gap-7">
        <p class="font-medium text-base">{{ title }}</p>
        <UnorderedList
          class="!gap-4"
          :severity="severity"
          :direction="direction"
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
    direction: {
      type: String,
      default: () => 'vertical',
      options: ['vertical', 'horizontal']
    },
    severity: {
      type: String,
      default: () => 'default',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    }
  })
</script>
