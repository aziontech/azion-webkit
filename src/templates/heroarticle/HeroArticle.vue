<template>
  <div
    itemscope
    itemtype="http://schema.org/BlogPosting"
    class="flex gap-6 lg:gap-8 flex-col w-full"
  >
    <div class="flex flex-col gap-5 lg:gap-6">
      <template v-if="$slots.breadcrumbs">
        <slot name="breadcrumbs" />
      </template>
      <meta
        itemprop="name"
        :content="title"
      />
      <h1
        itemprop="headline"
        class="text-3xl lg:text-4xl font-medium text-color"
        id="overview"
      >
        {{ title }}
      </h1>
      <template v-if="description">
        <meta
          itemprop="alternateName"
          :content="description"
        />
        <h2
          itemprop="alternativeHeadline"
          class="font-normal text-xl lg:text-2xl text-color-secondary"
        >
          {{ description }}
        </h2>
      </template>
    </div>
    <template v-if="date">
      <p
        itemprop="datePublished"
        class="font-normal text-xs text-color-secondary"
      >
        {{ date }}
      </p>
    </template>
    <template v-if="authors">
      <div class="flex flex-col md:flex-row gap-4 md:gap-8">
        <template
          v-for="({ avatar, title, role }, index) in authors"
          :key="index"
        >
          <div class="flex gap-3 md:max-w-56 items-center">
            <div class="w-8 flex items-center">
              <Avatar
                size="xlarge"
                :image="`${avatar}?ims=40x40`"
                :ariaLabel="`${title} - ${role}`"
                shape="circle"
              />
            </div>
            <div itemprop="author">
              <p class="font-normal text-sm">
                {{ title }}
              </p>
              <p class="font-normal text-xs text-color-secondary">
                {{ role }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
  import Avatar from 'primevue/avatar'

  const props = defineProps({
    date: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    authors: {
      type: Object,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  })

  const { date, title, authors } = props
</script>
