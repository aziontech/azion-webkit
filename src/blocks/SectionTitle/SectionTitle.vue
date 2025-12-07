<template>
  <LayoutContainer>
    <div
      :class="`flex flex-col gap-3 ${bottomSpacing} ${align === 'default' ? 'text-left' : 'text-center'}`"
    >
      <Overline v-if="overline"> {{ overline }} </Overline>
      <div
        class="grid m-0 w-full"
        :class="
          align === 'default'
            ? 'grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'
            : 'grid-cols-1 flex-col text-center gap-3'
        "
      >
        <component
          :is="titleTag"
          class="display-2-mobile md:display-2 text-balance font-sora text-neutral-50"
          >{{ title }}</component
        >
      <p
        v-if="description"
        class="font-sora text-neutral-200 text-balance"
      >
        {{ description }}
      </p>
    </div>
    <div
      v-if="buttons && buttons.length > 0"
      class="flex gap-4 mt-6"
      :class="align === 'center' ? 'justify-center' : 'justify-start'"
    >
      <Button
        v-for="(button, index) in buttons"
        :key="index"
        :label="button.label"
        :href="button.href"
        :variant="button.variant || button.type"
        :size="button.size || 'medium'"
        :icon="button.icon"
      />
    </div>
    </div>
  </LayoutContainer>
</template>

<script setup>
  import Overline from '../../components/overline/Overline.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import Button from '../../components/Button/Button.vue'

  const props = defineProps({
    overline: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      options: ['default', 'center'],
      default: 'default'
    },
    titleTag: {
      type: String,
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h2'
    },
    bottomSpacing: {
      type: String,
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      default: 'mb-24'
    },
    buttons: {
      type: Array,
      default: () => []
    }
  })
</script>
