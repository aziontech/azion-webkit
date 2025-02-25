<template>
  <ContentSection
    titleTag="h2"
    position="center"
    isContentCentralized
    textCenter
    :title="props.title"
    :description="props.description"
  >
    <template #actions>
      <LinkButton
        v-for="{ link, label, outlined } in props.buttons"
        :link="link"
        :label="label"
        :outlined="outlined"
      />
    </template>

    <template #main>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CardBase v-for="{ label, title, image, alt } in props.cards">
          <template #content-raw>
            <CardBgImage
              :alt="alt"
              :image="image"
            >
              <template #content>
                <div class="flex flex-col gap-5 z-20">
                  <Overline :label="label" />
                  <CardTitle>{{ title }}</CardTitle>
                </div>
              </template>
            </CardBgImage>
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
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import CardBgImage from '../cardbgimage'

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    buttons: {
      type: Array
    },
    cards: {
      type: Array
    }
  })
</script>
