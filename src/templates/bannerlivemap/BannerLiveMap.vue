<template>
  <CardBase
    grid
    class="w-full"
  >
    <template #content-raw>
      <div class="flex flex-col md:flex-row gap-8 w-full">
        <div class="lg:p-10 p-6 md:pr-0 md:w-1/2">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-5">
              <Overline :label="overline" />
              <CardTitle titleTag="h3">
                {{ title }}
              </CardTitle>
              <CardDescription>
                {{ description }}
              </CardDescription>
            </div>
            <LinkButton
              class="w-fit"
              :outlined="button.outlined"
              :label="button.label"
              :link="button.link"
              :icon="button.icon"
              iconPos="right"
            />
          </div>
        </div>
        <div
          class="hide-on-light w-full md:w-1/2 md:bg-cover md:bg-[url('https://www.azion.com/assets/pages/products/images/dark/edge-network/live-map.png')] rounded"
        />
        <div
          class="hide-on-dark w-full md:w-1/2 md:bg-cover md:bg-center md:bg-[url('https://www.azion.com/assets/pages/products/images/light/edge-network/live-map.png')] rounded"
        />
      </div>
    </template>
  </CardBase>
</template>

<script setup>
  import Container from '../container'
  import Overline from '../overline'
  import LinkButton from '../linkbutton'
  import CardBase from '../cardbase'
  import CardDescription from '../carddescription'
  import CardTitle from '../cardtitle'

  const props = defineProps({
    overline: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      required: true
    }
  })

  // bg-gradient-to-r from-orange-500 to-orange-400 -> To prevent Tailwind from purging classes in JSON, add a comment in your HTML with those classes to ensure they're recognized.
</script>
