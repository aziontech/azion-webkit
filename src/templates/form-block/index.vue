<template>
  <div class="flex flex-column">
  <div class="border surface-border rounded-md p-4 md:p-8 flex flex-col gap-8">
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
        <h5 class="text-xl font-medium"> {{ title }} </h5>
        <template v-if="description">
          <p class="text-sm text-color-secondary"> {{ description }} </p>
        </template>
      </div>
      <template v-if="$slots.content">
        <slot name="content" />
      </template>
    </div>
    <div class="flex flex-row gap-3 justify-end">
      <slot name="actions" />
    </div>
  </div>
</div>

</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})
</script>
