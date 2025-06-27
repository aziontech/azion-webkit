<template>
  <a
    :href="link"
    :title="label"
    :target="target"
    rel="noopener noreferrer"
    class="p-button p-component p-button-sm w-fit no-underline justify-center gap-2 px-4"
    :class="[
      { 'p-button-outlined hover:surface-hover': outlined },
      { 'p-button-text hover:surface-hover': text },
      { 'p-button-secondary': severity === 'secondary' },
      { 'p-button-info': severity === 'info' },
      { 'p-button-sm': size === 'small' },
      { 'flex flex-row-reverse': finalIconPos === 'left' },
      { 'p-button-icon-only': finalIconPos === 'center' },
      { 'md:justify-start': finalIconPos !== 'center' },
      { 'p-button-link pl-0 pr-0 hover:underline': textLink }
    ]"
  >
    <template v-if="label">
      {{ capitalizeLetter(String(label).trim()) }}
    </template>

    <span
      v-if="finalIconPos"
      :style="customIconStyle"
      :class="`pi p-button-icon ${finalIcon}`"
      data-pc-section="icon"
    />
  </a>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    icon: {
      type: String,
      required: false
    },
    customIconStyle: {
      type: String,
      required: false
    },
    iconPos: {
      type: String,
      required: false,
      options: ['left', 'right', 'center']
    },
    arrow: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false
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
      options: ['_blank', '_self'],
      default: '_self',
      required: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      options: ['small', 'medium']
    },
    textLink: {
      type: Boolean,
      required: false
    }
  })

  const finalIcon = computed(() => {
    if (props.icon) return props.icon
    return props.arrow ? 'pi pi-arrow-right' : undefined
  })

  const finalIconPos = computed(() => {
    if (props.iconPos) return props.iconPos
    return props.arrow ? 'right' : undefined
  })

  function capitalizeLetter(word) {
    return word.replace(word[0], word.charAt(0).toUpperCase())
  }
</script>
