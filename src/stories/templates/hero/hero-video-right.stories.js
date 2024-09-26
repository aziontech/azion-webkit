import HeroBlockBase from '../../../templates/herobase/HeroBase'
import BaseModal from "../../../templates/basemodal/Modal"
import CardBaseClickable from "../../../templates/cardbaseclickable"
import CardTitle from "../../../templates/cardtitle/CardTitle"
import CardDescription from "../../../templates/carddescription"
import Tile from "../../../templates/tile/Tile"
import Container from '../../../templates/container/Container'
import Rules from '../../rules'

export default {
  title: 'Blocks/Hero/hero-video-right',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Content rules
${Rules.hero.overline}
${Rules.hero.title}
${Rules.hero.description}
${Rules.hero.imageVideo}
${Rules.hero.cards}
        `,
      },
    },
  },
};

const HeroDisplay = `
<Container class="surface-section">
  <HeroBlockBase
    :overline="args.hero.overline"
    justify="center"
    :title="args.hero.title"
    :description="args.hero.description"
  >
    <template #main>
      <BaseModal backgroundColor="outlined">
        <template #action>
          <div class="relative flex items-center justify-center group">
            <img class="hide-on-light" alt="Image of a globe illustrating Azion's connections" width="auto" height="340" fetchpriority="high" src="https://www.azion.com/assets/pages/about/globe-about.png" />
            <img class="hide-on-dark" alt="Image of a globe illustrating Azion's connections" width="auto" height="340" fetchpriority="high" src="https://www.azion.com/assets/pages/about/globe-about-light.png" />
            <div class="absolute opacity-50 transition-all ease group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 45 45">
                <g id="play button">
                  <g id="Subtract">
                    <mask id="path-1-inside-1_8160_2062">
                      <path fill-rule="evenodd" d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z" clip-rule="evenodd"/>
                    </mask>
                    <path fill-rule="evenodd" d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z" clip-rule="evenodd"/>
                    <path d="m19 33.3 2 2.3-2-2.3ZM31 23l2 2.3-2-2.3Zm0-1.5-1.9 2.3 2-2.3ZM19 11.3 21 9l-2 2.3Zm22.8 11.1c0 10.8-8.6 19.4-19.4 19.4v6c14 0 25.4-11.3 25.4-25.4h-6ZM22.4 3c10.8 0 19.4 8.7 19.4 19.4h6C47.8 8.4 36.5-3 22.4-3v6ZM3 22.4C3 11.7 11.7 3 22.4 3v-6C8.4-3-3 8.4-3 22.4h6Zm19.4 19.4A19.4 19.4 0 0 1 3 22.4h-6c0 14 11.4 25.4 25.4 25.4v-6Zm-2-9.2V12h-6v20.5h6ZM17 31a2 2 0 0 1 3.4 1.5h-6a4 4 0 0 0 6.6 3L17 31Zm12.1-10.4L17.1 31l3.9 4.5 12-10.3-3.9-4.6Zm0 3a2 2 0 0 1 0-3l4 4.6a4 4 0 0 0-.1-6.1l-4 4.7Zm-12-10 12 10 3.9-4.5L21 9l-4 4.6Zm3.3-1.6a2 2 0 0 1-3.3 1.5L20.9 9a4 4 0 0 0-6.5 3h6Z" mask="url(#path-1-inside-1_8160_2062)"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </template>
        <template #content>
          <div class="md:aspect-video lg:h-[480px] md:h-[400px] h-[220px] rounded">
            <iframe
              class="h-full w-full rounded"
              allowfullscreen
              height="480"
              :src="args.video.src"
              :title="args.video.title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </template>
      </BaseModal>
    </template>
  </HeroBlockBase>
</Container>`


const template2 = `
<Container class="surface-section">
  <HeroBlockBase
    :overline="args.hero.overline"
    justify="center"
    :title="args.hero.title"
    :description="args.hero.description"
  >
    <template #main>
      <BaseModal backgroundColor="outlined">
        <template #action>
          <div class="relative flex items-center justify-center group">
            <img class="hide-on-light" alt="Image of a globe illustrating Azion's connections" width="auto" height="340" fetchpriority="high" src="https://www.azion.com/assets/pages/about/globe-about.png" />
            <img class="hide-on-dark" alt="Image of a globe illustrating Azion's connections" width="auto" height="340" fetchpriority="high" src="https://www.azion.com/assets/pages/about/globe-about-light.png" />
            <div class="absolute opacity-50 transition-all ease group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 45 45">
                <g id="play button">
                  <g id="Subtract">
                    <mask id="path-1-inside-1_8160_2062">
                      <path fill-rule="evenodd" d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z" clip-rule="evenodd"/>
                    </mask>
                    <path fill-rule="evenodd" d="M22.4 44.8a22.4 22.4 0 1 0 0-44.8 22.4 22.4 0 0 0 0 44.8Zm-5-32.7v20.5a1 1 0 0 0 1.6.7L31 23a1 1 0 0 0 0-1.5L19 11.3a1 1 0 0 0-1.6.8Z" clip-rule="evenodd"/>
                    <path d="m19 33.3 2 2.3-2-2.3ZM31 23l2 2.3-2-2.3Zm0-1.5-1.9 2.3 2-2.3ZM19 11.3 21 9l-2 2.3Zm22.8 11.1c0 10.8-8.6 19.4-19.4 19.4v6c14 0 25.4-11.3 25.4-25.4h-6ZM22.4 3c10.8 0 19.4 8.7 19.4 19.4h6C47.8 8.4 36.5-3 22.4-3v6ZM3 22.4C3 11.7 11.7 3 22.4 3v-6C8.4-3-3 8.4-3 22.4h6Zm19.4 19.4A19.4 19.4 0 0 1 3 22.4h-6c0 14 11.4 25.4 25.4 25.4v-6Zm-2-9.2V12h-6v20.5h6ZM17 31a2 2 0 0 1 3.4 1.5h-6a4 4 0 0 0 6.6 3L17 31Zm12.1-10.4L17.1 31l3.9 4.5 12-10.3-3.9-4.6Zm0 3a2 2 0 0 1 0-3l4 4.6a4 4 0 0 0-.1-6.1l-4 4.7Zm-12-10 12 10 3.9-4.5L21 9l-4 4.6Zm3.3-1.6a2 2 0 0 1-3.3 1.5L20.9 9a4 4 0 0 0-6.5 3h6Z" mask="url(#path-1-inside-1_8160_2062)"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </template>
        <template #content>
          <div class="md:aspect-video lg:h-[480px] md:h-[400px] h-[220px] rounded">
            <iframe
              class="h-full w-full rounded"
              allowfullscreen
              height="480"
              :src="args.video.src"
              :title="args.video.title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </template>
      </BaseModal>
    </template>
    <template #principal>
      <div class="grid m-0 md:grid-cols-4 gap-4">
        <template v-for="item in args.cards">
          <CardBaseClickable v-bind="item.cta">
            <template #content>
              <div class="flex flex-col gap-8">
                <Tile>  <i class="text-xs pi pi-check" /> </Tile>
                <div class="flex flex-col gap-3">
                  <CardTitle> {{ item.title }} </CardTitle>
                  <CardDescription> {{ item.description }} </CardDescription>
                </div>
              </div>
            </template>
          </CardBaseClickable>
        </template>
      </div>
    </template>
  </HeroBlockBase>
</Container>`

const MOCK = {
  hero: {
    "overline": "About us",
    "title": "Our mission is to power the hyper-connected economy",
    "description": "From the beginning, our goal has been to create technologies that unlock new possibilities."
  },
  "video": {
    "src": "https://www.youtube.com/embed/rk4apN50IpU?si=sjBGRDja95BUqoNx",
    "title": "Move to the Edge with Azion",
  },
  "cards": [
    {
      title: "Release",
      description: "Release conidently and consistently.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Target",
      description: "Deliver personalized experiences",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Remediate",
      description: "Find and fix issues faster.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    },
    {
      title: "Experiment",
      description: "Continuously measure and optimize.",
      cta: {
        link: "",
        action: {
          label: "Learn more"
        }
      }
    }
  ]
}

const Template = (args) => ({
  components: { HeroBlockBase, BaseModal, Container},
  setup() {
    return { args }
  },
  template: HeroDisplay
})

const Template2 = (args) => ({
  components: { HeroBlockBase, BaseModal, CardBaseClickable, CardDescription, CardTitle, Tile, Container},
  setup() {
    return { args }
  },
  template: template2
})

export const Default = Template.bind({})
Default.args = MOCK

Default.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: HeroDisplay } },
};


export const WithCards = Template2.bind({})
WithCards.args = MOCK

WithCards.parameters = {
  docs: {
    description: {
      story: ''
    },
    source: { code: template2 } },
};
