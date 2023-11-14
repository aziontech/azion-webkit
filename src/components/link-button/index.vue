<template>
	<a :href="link" target="_blank" rel="noopener noreferrer" class="p-button p-component p-button-sm min-w-fit no-underline">
		{{ text }}
	</a>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	}
});

const { text } = props;
</script>
