<template>
  <Button
    :label="label"
    :size="size"
    :icon="icon"
    :class="[buttonClasses, customPadding]"
    :pt="{
      icon: { 
        class: iconClasses
      },
      label: {
        class: labelClasses
      }
    }"
  />
</template>

<script setup>
  import Button from 'primevue/button'
  import { computed } from 'vue'

  const props = defineProps({
    label: String,
    size: {
      type: String,
      options: ['small', 'large'],
      default: 'large'
    },
    type: {
      type: String,
      options: ['primary', 'secondary', 'link'],
      default: 'secondary'
    },
    icon: String,
    customPadding: {
      type: String,
      default: 'px-6 py-4'
    }
  })

  const buttonClasses = computed(() => {
    return {
      primary:
        'h-fit group active:bg-orange-700 dark:active:bg-orange-600 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 duration-300 transition px-6 py-4 rounded-md hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white',
      secondary:
        'h-fit group bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 duration-300 transition rounded-md hover:bg-neutral-300 active:bg-neutral-400 dark:active:bg-neutral-700 border-1 border-neutral-200 dark:border-neutral-400 dark:hover:bg-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100',
      link: 'w-fit bg-orange-900/10 text-orange-600 px-0 py-0'
    }[props.type]
  })

  const iconClasses = computed(() => {
    return {
      primary:
        'group-hover:text-neutral-100 text-neutral-100 dark:text-neutral-900 text-[.625rem] duration-300 transition flex items-center hover:text-neutral-100 mr-2',
      secondary:
        'group-hover:text-neutral-900 text-neutral-900 dark:text-neutral-100 text-[.625rem] duration-300 transition flex items-center hover:text-neutral-900 dark:group-hover:text-neutral-100 mr-2',
      link: 'text-orange-600 text-[.625rem] duration-300 transition flex items-center hover:text-orange-600 leading-1 mr-2'
    }[props.type]
  })

  const labelClasses = computed(() => {
    const textSize =
      props.size === 'large' ? 'text-sm leading-[1.5rem]' : 'text-xs leading-[.625rem]'

    return {
      primary: `font-proto-mono ${textSize}`,
      secondary: `font-proto-mono ${textSize}`,
      link: `font-proto-mono ${textSize}`
    }[props.type]
  })
</script>
