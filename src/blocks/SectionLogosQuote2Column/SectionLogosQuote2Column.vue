<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
    >
      <div
        :class="`flex gap-4 md:gap-0 ${title ? 'justify-between flex-col md:flex-row' : 'justify-end flex-row'} mb-6 md:mb-8`"
      >
        <h2
          v-if="title"
          class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 w-full"
        >
          {{ title }}
        </h2>
        <Button
          v-if="link"
          :href="link"
          :label="linkLabel"
          :size="'large'"
          :theme="'dark'"
          type="linkSecondary"
          customClass="px-0 py-0"
        />
      </div>
      <div
        class="m-0 grid mx-auto"
        :class="clientSize.container"
      >
        <div
          :class="`${clientSize.client} p-1 border relative w-full border-neutral-900 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 md:after:block after:hidden`"
        >
          <template v-if="!Array.isArray(clientType)">
            <div class="flex items-center justify-center h-full p-6 md:p-12">
              <img
                :src="clientType.image"
                :alt="clientType.alt"
                class="max-h-full w-auto object-contain"
              />
            </div>
          </template>
          <template v-else>
            <div
              class="h-full w-full p-6 md:p-12 m-0 grid grid-cols-4 grid-rows-3 gap-4 place-items-center before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 before:hidden after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0 md:after:hidden"
            >
              <div
                v-for="(client, index) in clientType"
                :key="index"
                class="flex items-center justify-center h-12 md:h-16"
              >
                <img
                  v-if="client.logo"
                  :src="client.logo"
                  :alt="client.alt || 'Client logo'"
                  class="max-h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </template>
        </div>
        <div
          :class="`${clientSize.quote} p-1 border relative w-full border-neutral-900 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0`"
        >
          <div
            class="h-full w-full p-6 md:p-12 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0"
          >
            <ProductQuote
              v-if="quote"
              :quote="quote"
              :author="author"
              :role="role"
              :logo="logo"
              :logo-alt="logoAlt"
              spacing="none"
            />
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import ProductQuote from '../../components/ProductQuote/ProductQuote.vue'
  import Button from '../../components/Button/Button.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import { computed } from 'vue'

  export interface LogoQuote2Column {
    logo: string
    alt?: string
  }

  export interface ImageType {
    image: string
    alt: string
  }

  interface SectionLogosQuote2ColumnProps {
    clients?: Array<LogoQuote2Column[] | ImageType>
    quote?: string
    author?: string
    role?: string
    logo?: string
    logoAlt?: string
    id?: string
    title?: string
    link?: string
    linkLabel?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    type?: '70x30' | '50x50'
  }

  const props = withDefaults(defineProps<SectionLogosQuote2ColumnProps>(), {
    clients: () => [],
    bottomSpacing: 'mb-24',
    type: '50x50'
  })

  // unfortuantely, cloudcannon doesn't support conditional properties, so we need to check the type of the first element in the array
  const clientType: LogoQuote2Column[] | ImageType = props.clients[0]

  const clientSize = computed(() => {
    const sizeMap: Record<'70x30' | '50x50', { container: string; client: string; quote: string }> =
      {
        '70x30': {
          container: 'grid-cols-10',
          client: 'col-span-3',
          quote: 'col-span-7'
        },
        '50x50': {
          container: 'grid-cols-2',
          client: 'col-span-1',
          quote: 'col-span-1'
        }
      }
    const type: '70x30' | '50x50' = props.type
    return sizeMap[type]
  })
</script>
