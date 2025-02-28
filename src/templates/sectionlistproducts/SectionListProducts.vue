<template>
  <ContentSection
  isContentCentralized
  textCenter
  position="center"
  :overline="props.overline"
  :title="props.title"
  :titleTag="props.titleTag"
  >
    <template #main>
      <div
        class="gap-4 grid place-content-center m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,_33%)]"
      >
        <CardBase
          v-for="{ title, icon, description, link, addons } in props.list"
          spacing="compact"
          backgroundColor="default"
          :class="[addons && 'row-span-2']"
        >
          <template #content>
            <div class="flex flex-col w-full gap-2 justify-end">
              <IconTextSegment
                class="h-full"
                :href="link"
                :title="title"r
                :description="description"
                :icon="icon"
                severity="primary"
              />
              <div
                class="ml-12"
                v-if="addons"
              >
                <Overline label="Add-ons" />
                <div class="flex flex-col gap-2 pt-3 -ml-4">
                  <LinkButton
                    v-for="{ label, link } in addons"
                    text
                    :label="label"
                    :link="link"
                    class="max-w-fit"
                    icon="pi pi-arrow-right"
                    iconPos="rigth"
                  />
                </div>
              </div>
            </div>
          </template>
        </CardBase>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import CardBase from '../cardbase'
  import IconTextSegment from '../icontextsegment'
  import Overline from '../overline'

  const props = defineProps({
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    overline: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array
    },
  })
</script>
