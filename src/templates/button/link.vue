<template>
	<a
    :href="link"
    :title="label"
    target="_blank"
    rel="noopener noreferrer"
    class="p-button p-component p-button-sm min-w-fit no-underline flex gap-2"
    :class="{'p-button-outlined' : outlined }">

    <span
      v-if="iconPos === 'left'"
      :class="`pi p-button-icon ${icon}`"
      data-pc-section="icon"></span>

    {{ label }}

    <span
      v-if="iconPos === 'right'"
      :class="`pi p-button-icon ${icon}`"
      data-pc-section="icon"></span>
	</a>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      required: false
    },
    iconPos: {
      type: String,
      required: false
    },
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

