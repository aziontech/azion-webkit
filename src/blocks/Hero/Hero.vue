<template>
  <section class="text-white py-5 px-6">
    <div class="mx-auto flex flex-col text-center gap-5">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-sora leading-tight">
        {{ title }}
      </h1>
      <p class="text-md md:text-md text-neutral-300 font-sora max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
      <template v-if="limitedButtons.length > 0">
        <div class="flex justify-center gap-5">
          <Button
            v-for="button in limitedButtons"
            :size="button.size ?? 'small'"
            :icon="button.icon ?? 'pi pi-angle-right'"
            :type="button.type ?? 'primary'"
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
  type?: 'primary' | 'secondary' | 'link'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}

interface HeroProps {
  title?: string
  subtitle?: string
  buttons?: HeroButtonProps[]
}

const props = withDefaults(defineProps<HeroProps>(), {
  title: 'Designed to Scale your business.',
  subtitle: 'From vibing to enterprise, pay as your business grow.',
  buttons: () => []
})

const limitedButtons = computed(() => {
  return props.buttons?.slice(0, 2) || []
})
</script>
