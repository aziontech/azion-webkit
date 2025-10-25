<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto md:p-12 p-6 mb-40"
  >
    <div class="flex flex-col items-start text-left gap-8 md:gap-12">
      <div class="flex flex-col gap-10">
        <h2 v-if="title" class="display-1 font-normal tracking-tight text-orange-500">
          {{ title }}
        </h2>
      </div>

      <div v-if="buttons && buttons.length > 0" class="flex flex-row gap-4">
        <Button
          v-for="(button, index) in buttons"
          :key="index"
          :href="button.href"
          :label="button.label"
          :type="'primary'"
          size="small"
          :theme="button.theme || 'dark'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Button from '../../components/Button'

  export interface CallToActionButton {
    label: string
    href: string
    type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal' | 'linkSecondary'
    theme?: 'dark' | 'light'
  }

  interface SectionCallToActionProps {
    title?: string
    buttons?: CallToActionButton[]
    id?: string
  }

  const props = withDefaults(defineProps<SectionCallToActionProps>(), {
    buttons: () => []
  })
</script>
