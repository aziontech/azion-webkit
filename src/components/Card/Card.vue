<template>
  <template v-if="href">
    <a
      :href="href"
      :target="target"
      class="group transition-colors cursor-pointer"
    >
      <div :class="cardClassesWithHover[theme]">
        <div class="flex flex-col p-3 md:p-6 gap-3 h-full">
          <div class="flex flex-col gap-2 font-sora flex-grow">
            <h5 :class="innerStyleWithHover[theme].title">{{ title }}</h5>
            <p :class="innerStyleWithHover[theme].description">{{ description }}</p>
          </div>
          <div>
            <Button
              v-if="label"
              :label="label"
              size="small"
              type="tertiary"
              theme="dark"  
              customClass="px-0 bg-transparent"
              icon="pi pi-angle-right"
            />
          </div>
        </div>
      </div>
    </a>
  </template>
  <template v-else>
    <div :class="cardClasses[theme]">
      <div class="flex flex-col p-3 md:p-6 gap-3 h-full">
        <div class="flex flex-col gap-2 font-sora flex-grow">
          <p :class="innerStyle[theme].title">{{ title }}</p>
          <p :class="innerStyle[theme].description">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
  import Button from '../Button/Button.vue'

  const props = defineProps({
    label: {
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
    href: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      options: ['default'],
      default: 'default'
    },
    target: {
      type: String,
      options: ['_blank', '_self'],
      default: '_self'
    }
  })

  const innerStyle = {
    default: {
      title: 'display-3 text-neutral-100',
      description: 'text-xs text-neutral-400'
    }
  }

  const innerStyleWithHover = {
    default: {
      title: 'display-3 text-neutral-100 group-hover:text-violet-300',
      description: 'text-xs text-neutral-400'
    }
  }

  const cardClasses = {
    default: 'w-full h-full bg-neutral-900 rounded-md flex flex-col'
  }

  const cardClassesWithHover = {
    default: 'w-full h-full bg-neutral-900 rounded-md group-hover:bg-neutral-800 transition-colors flex flex-col'
  }
</script>
