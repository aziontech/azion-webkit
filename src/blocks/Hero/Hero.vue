<template>
  <section
    :id="id"
    class="text-white"
    :class="padding[spacing ?? 'default']"
  >
    <div class="mx-auto flex flex-col text-center gap-2 md:gap-5">
      <h1 class="text-4xl md:display-1 font-sora leading-tight">
        {{ title }}
      </h1>
      <p class="text-md md:text-md text-neutral-300 font-sora max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
      <template v-if="limitedButtons.length > 0">
        <div class="flex justify-center gap-2 md:gap-5 flex-col md:flex-row">
          <Button
            v-for="button in limitedButtons"
            :size="button.size ?? 'small'"
            :icon="button.icon"
            :type="button.type ?? 'primary'"
            :theme="button.theme ?? 'dark'"
            v-bind="button"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import Button from '../../components/Button/Button.vue'

  export interface HeroButtonProps {
    label: string
    size?: 'small' | 'large'
    type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
    href: string
    icon?: string
    theme?: string
    customClass?: string
  }

  interface HeroProps {
    title?: string
    subtitle?: string
    buttons?: HeroButtonProps[]
    spacing?: 'none' | 'small' | 'default' | 'large'
    id?: string
  }

  const props = withDefaults(defineProps<HeroProps>(), {
    title: '',
    subtitle: '',
    buttons: () => []
  })

  const limitedButtons = computed(() => {
    return props.buttons?.slice(0, 2) || []
  })

  const padding = {
    none: 'py-0',
    small: 'py-5 lg:py-10 xl:py-16 2xl:py-20',
    default: 'py-10 lg:py-20 xl:py-30 2xl:py-40',
    large: 'py-14 lg:py-30 xl:py-40 2xl:py-48'
  }
</script>
