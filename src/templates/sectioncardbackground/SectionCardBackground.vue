<template>
  <ContentSection
    position="center"
    :isContentCentralized="true"
    :overline="props.overline"
    :titleTag="props.titleTag"
    :title="props.title"
    :description="props.description"
    :descriptionRawHtml="props.descriptionRawHtml"
    :id="id"
    :margin="props.margin"
  >
    <template #actions>
      <template v-if="props.buttons[0] && props.buttons[0].label">
        <LinkButton
          v-for="{ link, label, outlined } in props.buttons"
          :link="link"
          :label="label"
          :outlined="outlined"
        />
      </template>
    </template>

    <template #main>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardBase v-for="{ label, title, description, buttons, image, alt } in props.cards">
          <template #content-raw>
            <CardBgImage
              :alt="alt"
              :image="image"
            >
              <template #content>
                <div class="flex flex-col gap-5 z-20">
                  <Overline :label="label" />
                  <CardTitle>
                    {{ title }}
                  </CardTitle>
                  <CardDescription>
                    {{ description }}
                  </CardDescription>
                  <LinkButton
                    v-for="{ link, label, outlined } in buttons"
                    :link="link"
                    :label="label"
                    :outlined="outlined"
                    severity="secondary"
                  />
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
  import CardDescription from '../carddescription'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    buttons: {
      type: Array,
      default: () => []
    },
    cards: {
      type: Array,
      default: () => []
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
