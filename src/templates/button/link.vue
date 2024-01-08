<template>
	<a :href="link" :title="label" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-sm min-w-fit no-underline"
      :class="{'p-button-outlined' : outlined }"
  >
		{{ label }}
	</a>
</template>

<script setup>

defineProps({
	label: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
  outlined: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

