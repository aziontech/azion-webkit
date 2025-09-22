<template>
  <template v-if="href">
    <a :href="href">
      <Button
        :label="label"
        :size="size"
        :icon="icon"
        :class="[customClass, buttonClasses[theme]]"
        :pt="{
          icon: { 
            class: iconClasses
          },
          label: {
            class: labelClasses
          }
        }"
      />
    </a>
  </template>
  <template v-else>
    <Button
        :label="label"
        :size="size"
        :icon="icon"
        :class="[customClass, buttonClasses[theme]]"
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
    href: String,
    icon: String,
    theme: {
      type: String,
      default: 'dark'
    },
    customClass: {
      type: String,
      default: 'px-6 py-4'
    }
  })

  const buttonClasses = computed(() => {
    return {
      primary: {
        dark: 'h-fit group border-none active:bg-orange-700 dark:active:bg-orange-600 bg-neutral-800 text-neutral-100 dark:text-neutral-900 duration-300 transition px-6 py-4 rounded-md hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white',
        light: 'h-fit group border-none active:bg-orange-700 active:bg-orange-600 bg-neutral-100 text-neutral-900 duration-300 transition px-6 py-4 rounded-md hover:bg-orange-600 hover:bg-orange-600 hover:text-white hover:text-white'
      },
      secondary: {
        dark: 'h-fit group bg-neutral-800 text-neutral-100 duration-300 transition rounded-md active:bg-neutral-900 border-1 border-[#353040] hover:bg-neutral-900 hover:text-neutral-100',
        light: 'h-fit group bg-neutral-300 text-neutral-100 duration-300 transition rounded-md active:bg-neutral-700 border-1 border-[#353040] hover:bg-neutral-600 hover:text-neutral-100',     
      },
      tertiary:
        'group bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 duration-300 transition rounded-md hover:bg-neutral-300 active:bg-neutral-400 dark:active:bg-neutral-700 border-1 border-neutral-200 dark:border-neutral-400 dark:hover:bg-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100',
      link: 'w-fit bg-orange-900/10 text-orange-600 px-0 py-0'
    }[props.type]
  })

  const iconClasses = computed(() => {
    return {
      primary:
        'h-fit group-hover:text-neutral-100 text-neutral-100 text-[.625rem] duration-300 transition flex items-center hover:text-neutral-900 mr-2',
      secondary:
        'h-fit group-hover:text-neutral-900 text-neutral-900 dark:text-neutral-100 text-[.625rem] duration-300 transition flex items-center hover:text-neutral-900 dark:group-hover:text-neutral-100 mr-2',
      tertiary: 'group-hover:text-neutral-100 text-neutral-100 dark:text-neutral-100 text-[.625rem] duration-300 transition flex items-center hover:text-neutral-100 dark:group-hover:text-neutral-100 mr-2',
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
