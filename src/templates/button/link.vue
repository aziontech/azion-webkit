<template>
	<a
    :href="link"
    :title="label"
    :target="target"
    rel="noopener noreferrer"
    class="p-button p-component p-button-sm min-w-fit no-underline justify-center md:justify-start gap-2 px-4"
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
    },
    target: {
      type: String,
      options: ["_blank", "_self"],
      default: "_self",
      required: false
    }
  });
</script>

