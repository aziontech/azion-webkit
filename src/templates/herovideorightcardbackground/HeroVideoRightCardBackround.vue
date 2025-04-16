<template>
  <HeroBlockBase
    justify="center"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
  >
    <template #main>
      <BaseModal backgroundColor="outlined">
        <template #action>
          <div class="relative flex items-center justify-center group">
            <img
              class="hide-on-light"
              width="auto"
              height="340"
              fetchpriority="high"
              :alt="video.image.alt"
              :src="video.image.dark.src"
            />

            <img
              class="hide-on-dark"
              width="auto"
              height="340"
              fetchpriority="high"
              :alt="video.image.alt"
              :src="video.image.light.src"
            />

            <div class="absolute opacity-50 transition-all ease group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="currentColor"
                viewBox="0 0 45 45"
              >
                <g id="play button">
                  <g id="Subtract">
                    <mask id="path-1-inside-1_8160_2062">
                      <path
                        fill-rule="evenodd"
                        d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z"
                        clip-rule="evenodd"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z"
                      clip-rule="evenodd"
                    />
                    <path
                      d="m19 33.3 2 2.3-2-2.3ZM31 23l2 2.3-2-2.3Zm0-1.5-1.9 2.3 2-2.3ZM19 11.3 21 9l-2 2.3Zm22.8 11.1c0 10.8-8.6 19.4-19.4 19.4v6c14 0 25.4-11.3 25.4-25.4h-6ZM22.4 3c10.8 0 19.4 8.7 19.4 19.4h6C47.8 8.4 36.5-3 22.4-3v6ZM3 22.4C3 11.7 11.7 3 22.4 3v-6C8.4-3-3 8.4-3 22.4h6Zm19.4 19.4A19.4 19.4 0 0 1 3 22.4h-6c0 14 11.4 25.4 25.4 25.4v-6Zm-2-9.2V12h-6v20.5h6ZM17 31a2 2 0 0 1 3.4 1.5h-6a4 4 0 0 0 6.6 3L17 31Zm12.1-10.4L17.1 31l3.9 4.5 12-10.3-3.9-4.6Zm0 3a2 2 0 0 1 0-3l4 4.6a4 4 0 0 0-.1-6.1l-4 4.7Zm-12-10 12 10 3.9-4.5L21 9l-4 4.6Zm3.3-1.6a2 2 0 0 1-3.3 1.5L20.9 9a4 4 0 0 0-6.5 3h6Z"
                      mask="url(#path-1-inside-1_8160_2062)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </template>

        <template #content>
          <div class="md:aspect-video lg:h-[480px] md:h-[400px] h-[220px] rounded">
            <iframe
              :src="video.src"
              :title="video.title"
              class="h-full w-full rounded"
              allowfullscreen
              height="480"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </div>
        </template>
      </BaseModal>
    </template>

    <template #principal>
      <div
        v-if="cards[0] && cards[0].title"
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <CardBase v-for="{ label, title, description, buttons, image, alt } in cards">
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
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import BaseModal from '../basemodal'
  import LinkButton from '../linkbutton'
  import CardBase from '../cardbase'
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import CardBgImage from '../cardbgimage'
  import CardDescription from '../carddescription'

  defineProps({
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      rquired: true,
      type: String
    },
    description: {
      type: String
    },
    video: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          ['title', 'src', 'image'].every((key) => key in value) &&
          ['alt', 'dark', 'light'].every((key) => key in value.image) &&
          ['src'].every((key) => key in value.image.dark && key in value.image.light)
        )
      }
    },
    cards: {
      type: Array
    }
  })
</script>
