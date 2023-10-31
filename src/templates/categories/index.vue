<template>
  <div>
    <p class="tracking-widest"> CATEGORIES </p>
    <div>
      <Button v-for="({ label, size, severity, rounded}) in props.categories" :key="label" :size="size" :label="label" :severity="severity" class="m-1" :rounded="rounded" />
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button"

// interface Category {
//   size: "small" | "medium" | "large",
//   label: String,
//   severity: "primary" | "secondary",
//   rounded: Boolean,
// }

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true
  }
})
</script>
