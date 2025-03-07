<template>
  <a
    :href="link"
    :title="description"
    class="rounded-md focus:outline-[rgba(243,100,43,.624)] no-underline flex group w-full"
    :class="{ 'md:max-w-sm': size == 'default' }"
  >
    <Card
      :pt="{
        root: {
          class:
            'w-full p-6 shadow-none bg-transparent flex flex-col gap-9 rounded-md border surface-border overflow-hidden group-hover:border-current'
        }
      }"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <template v-if="image">
            <div v-html="image" />
          </template>
          <Tag
            :value="tagList"
            severity="info"
          />
        </div>
      </template>
      <template #content>
        <p class="text-body-2 text-color-secondary">{{ description }}</p>
      </template>
    </Card>
  </a>
</template>

<script setup>
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'

  defineProps({
    image: {
      type: String,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    tagList: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'default',
      options: ['large', 'default']
    }
  })
</script>
