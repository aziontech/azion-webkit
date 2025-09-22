<template>
  <template v-if="href">
    <a :href="href" class="flex gap-2 items-center">
      <span class="text-[#B5B1F4] font-proto-mono uppercase">{{ label }}</span>  
      <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.80443 8.20812L6.79667 4.45914C6.79667 4.39704 6.78115 4.35047 6.7501 4.31943C6.70353 4.27285 6.63885 4.29096 6.55605 4.37376L2.88469 8.04512C2.68288 8.24693 2.44485 8.35043 2.17059 8.3556C1.89634 8.35043 1.65314 8.24176 1.44098 8.0296C1.24434 7.83297 1.14603 7.59494 1.14603 7.31551C1.14603 7.03608 1.24434 6.79805 1.44098 6.60142L5.06577 2.97662C5.14857 2.89383 5.16927 2.83173 5.12787 2.79034C5.09682 2.75929 5.05025 2.74376 4.98815 2.74376L1.26245 2.74376C0.993377 2.74376 0.76052 2.64545 0.563886 2.44881C0.367252 2.25218 0.271522 2.00639 0.276697 1.71144C0.287046 1.41131 0.393125 1.16034 0.594934 0.958533C0.786393 0.767074 1.02184 0.671344 1.30126 0.671344L7.65048 0.671344C7.98165 0.619598 8.27919 0.725677 8.54309 0.989581C8.75525 1.20174 8.86133 1.44753 8.86133 1.72696L8.86909 8.20812C8.86909 8.4772 8.76043 8.72041 8.54309 8.93774C8.33094 9.1499 8.09032 9.25598 7.82124 9.25598C7.55216 9.24563 7.31154 9.13437 7.09938 8.92222C6.90275 8.72558 6.80443 8.48755 6.80443 8.20812Z" fill="#FE601F"/>
      </svg>
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
