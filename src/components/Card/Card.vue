<template>
  <template v-if="href">
    <a
      :href="href"
      :target="target"
      class="group transition-colors cursor-pointer"
    >
      <Card
        unstyled
        :pt="ptWithHover[theme]"
      >
        <template #content>
          <div class="flex flex-col p-3 md:p-6 gap-3 h-full">
            <div class="flex flex-col gap-2 font-sora flex-grow">
              <p :class="innerStyleWithHover[theme].title">{{ title }}</p>
              <p :class="innerStyleWithHover[theme].description">{{ description }}</p>
            </div>
            <Button
              v-if="label"
              :label="label"
              size="small"
              type="primary"
              theme="dark"  
              customClass="px-0"
              icon="pi pi-angle-right"
            />
          </div>
        </template>
      </Card>
    </a>
  </template>
  <template v-else>
    <Card
      unstyled
      :pt="pt[theme]"
    >
      <template #content>
        <div class="flex flex-col p-3 md:p-6 gap-3 h-full">
          <div class="flex flex-col gap-2 font-sora flex-grow">
            <p :class="innerStyle[theme].title">{{ title }}</p>
            <p :class="innerStyle[theme].description">{{ description }}</p>
          </div>
        </div>
      </template>
    </Card>
  </template>
</template>

<script setup>
  import Card from 'primevue/card'
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
      title: 'text-md text-[#FAFAFA]',
      description: 'text-sm text-[#A3A3A3]'
    }
  }

  const innerStyleWithHover = {
    default: {
      title: 'text-md text-[#FAFAFA] group-hover:text-[#B5B1F4]',
      description: 'text-sm text-[#A3A3A3]'
    }
  }

  const pt = {
    default: {
      root: {
        class: 'w-full h-full bg-[#171717] rounded-md flex flex-col'
      }
    }
  }

  const ptWithHover = {
    default: {
      root: {
        class:
          'w-full h-full bg-[#171717] rounded-md group-hover:bg-[#13131a] transition-colors flex flex-col'
      }
    }
  }
</script>
