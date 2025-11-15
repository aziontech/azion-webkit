<template>
  <a
    :href="link"
    :title="title"
    class="w-full no-underline flex group border-radius focus:outline-[rgba(243,100,43,.624)]"
  >
    <Card
      class="p-0 mt-0"
      :pt="getPTOptions()"
    >
      <template
        #header
        v-if="imgSrc"
      >
        <picture>
          <template v-if="imageType === 'logo'">
            <div
              class="group-hover:bg-neutral-200 aspect-video transition-colors duration-300 w-full"
            >
              <div
                class="flex items-center justify-center overflow-hidden logo-container h-full"
                :style="backgroundImageStyle"
              >
                <div
                  class="group-hover:text-black"
                  v-html="imgSrc"
                />
              </div>
            </div>
          </template>
          <template v-else>
            <img
              height="209"
              width="372"
              loading="lazy"
              :alt="`${imgAlt}`"
              :src="`${imgSrc}?ims=372x209`"
              class="w-full aspect-video group-hover:scale-[1.10] transition-all duration-300"
            />
          </template>
        </picture>
      </template>
      <template #content>
        <div
          class="flex flex-col gap-4"
          :class="{
            'justify-center h-full': direction == 'row',
            'justify-between': direction == 'column'
          }"
        >
          <h2 class="text-heading-1 font-medium text-color">{{ title }}</h2>
          <p class="text-body-1 text-color-secondary max-w-3xl">{{ description }}</p>
          <div
            class="flex"
            :class="{
              'flex-row-reverse gap-2 items-center w-fit': direction === 'row',
              'flex-col gap-4': direction === 'column'
            }"
          >
            <template v-if="date || estimateReadTime">
              <p class="text-body-1 text-color-secondary">
                {{ date }}
                <template v-if="estimateReadTime"> • {{ estimateReadTime }} </template>
              </p>
            </template>
            <div v-if="authors">
              <AvatarGroup>
                <Avatar
                  v-for="({ avatar, role, title }, index) in authors"
                  :ariaLabel="`${title} - ${role}`"
                  :key="index"
                  :image="`${avatar}?ims=40x40`"
                  shape="circle"
                  v-tooltip.bottom="{ value: `${title}`, showDelay: 200 }"
                />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </a>
</template>

<script setup>
  import Card from 'primevue/card'
  import Avatar from 'primevue/avatar'
  import AvatarGroup from 'primevue/avatargroup'

  const props = defineProps({
    imgSrc: {
      type: String,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    authors: {
      type: Object,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    estimateReadTime: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: false,
      default: 'column',
      options: ['column', 'row']
    },
    imageType: {
      type: String,
      required: false,
      default: 'default',
      options: ['default', 'logo']
    }
  })

  const getPTOptions = () => {
    const headerStyle =
      props.imageType === 'logo'
        ? 'overflow-hidden'
        : 'rounded border surface-border overflow-hidden'
    const response = {
      root: 'w-full shadow-none bg-transparent gap-6 flex flex-col',
      header: headerStyle,
      content: 'h-full'
    }

    if (props.direction === 'row') {
      response.root = `${response.root} md:flex-row gap-6`
      response.header = `${response.header} md:max-w-72 w-full`
      response.body = 'w-full'
    }

    return response
  }

  const backgroundImageStyle = `
        background-image: 
          linear-gradient(to top, transparent 0%, transparent 100%),
          radial-gradient(circle, rgba(206, 201, 201, 0.1) 1px, #0000 0);
        background-size: 100% 100%, 12px 12px;
        background-repeat: no-repeat, repeat;
        background-position: 0 0, 0 0;
      `
</script>

<style scoped>
  .logo-container :deep(svg) {
    width: 100%;
    min-height: 40px;
    object-fit: contain;
  }
</style>
