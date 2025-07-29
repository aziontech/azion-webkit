<template>
  <ContentSection :margin="margin">
    <template #content>
      <CardBase grid>
        <template #content-raw>
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="z-1 lg:p-10 p-6 md:pr-0 md:w-full">
              <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-5">
                  <Overline :label="overline" />
                  <CardTitle titleTag="h3"> {{ title }} </CardTitle>
                  <CardDescription> {{ description }} </CardDescription>
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
            <div class="relative flex justify-end items-center w-full z-0">
              <div
                class="flex max-h-80 lg:max-h-[460px] xl:max-h-80 -mt-32 lg:mt-0 lg:items-center overflow-hidden px-10 py-12 lg:py-6"
              >
                <ul class="relative flex flex-col gap-6 min-w-20 mr-14 hidden lg:flex">
                  <li class="flex items-center gap-6">
                    <span
                      class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14"
                    >
                      <i class="pi pi-cloud text-color-secondary"></i>
                    </span>

                    <Arrow
                      direction="left"
                      borderStyle="dotted"
                      width="140px"
                    />
                  </li>
                  <li class="flex items-center gap-6 justify-end -mr-[1rem3]">
                    <span
                      class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14"
                    >
                      <i class="pi pi-database text-color-secondary"></i>
                    </span>

                    <Arrow
                      direction="left"
                      borderStyle="dotted"
                      width="70px"
                    />
                  </li>
                </ul>

                <Globe class="-mr-28" />
              </div>
            </div>
          </div>
        </template>
      </CardBase>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import Overline from '../overline'
  import LinkButton from '../linkbutton'
  import CardBase from '../cardbase'
  import CardDescription from '../carddescription'
  import CardTitle from '../cardtitle'
  import Arrow from '../arrow'
  import Globe from '../globe'

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
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })

  // bg-gradient-to-r from-orange-500 to-orange-400 -> To prevent Tailwind from purging classes in JSON, add a comment in your HTML with those classes to ensure they're recognized.
</script>
