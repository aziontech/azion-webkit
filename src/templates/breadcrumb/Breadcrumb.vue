<template>
  <div class="h-[24px] -ml-2">
    <Breadcrumb :model="props.data">
      <template #item="{ item, props }">
        <a
          v-if="item.url"
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span class="text-color-secondary">
            {{ item.label }}
          </span>
        </a>
        <p
          v-else
          class="p-menuitem-link"
        >
          <span class="text-color-secondary">
            {{ item.label }}
          </span>
        </p>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
  import Breadcrumb from 'primevue/breadcrumb'
  const props = defineProps({
    data: { type: Array }
  })
</script>
