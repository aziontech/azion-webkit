<template>
	<a
    :href="link"
    :title="label"
    :target="target"
    rel="noopener noreferrer"
    class="p-button p-component p-button-sm w-fit no-underline justify-center md:justify-start gap-2 px-4"
    :class="[
      {'p-button-outlined hover:surface-hover' : outlined },
      {'p-button-text hover:surface-hover': text },
      {'p-button-secondary' : severity === 'secondary'},
      {'p-button-info' : severity === 'info'},
      {'p-button-sm' : size === 'small' },
      {'flex flex-row-reverse' : iconPos === 'left'},
    ]">

    {{ label }}

    <span
      v-if="iconPos" :style="customIconStyle"
      :class="`pi p-button-icon ${icon}`"
      data-pc-section="icon" />
	</a>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      required: false
    },
    customIconStyle: {
      type: String,
      required: false,
      options: ['left', 'right']
    },
    iconPos: {
      type: String,
      required: false,
      options: ['left', 'right']
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
    },
    text: {
      type: Boolean,
      required: false,
      default: false
    },
    severity: {
      type: String,
      required: false,
      options: ['secondary', 'info']
    },
    target: {
      type: String,
      options: ["_blank", "_self"],
      default: "_self",
      required: false
    },
    size: {
      type: String,
      required: false,
      options: ['small']
    }
  });
</script>
