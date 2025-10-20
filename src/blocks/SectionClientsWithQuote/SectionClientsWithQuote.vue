<template>
  <section
    :id="id"
    class="text-white relative max-w-xl xxxl:max-w-xxl mx-auto py-12 px-6 md:px-0"
  >
    <div class="flex flex-col md:flex-row justify-between mb-6 md:mb-8">
      <h2 v-if="title" class="display-2 font-normal tracking-tight text-gray-200 w-full">
        {{ title }}
      </h2>
      <Button v-if="link" :href="link"
      :label="linkLabel"
      :size="'large'"
      :theme="'dark'"
      type="linkSecondary"
      customClass="px-0 py-0"
      />
    </div>
    <div class="mx-auto flex flex-col md:flex-row">
      <div
        v-if="clients && clients.length > 0"
        class="p-1 border relative w-full md:w-1/2 border-neutral-900 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0 md:after:block after:hidden"
      >
        <div class="h-full w-full p-12 flex gap-y-4 md:gap-y-0 flex-wrap items-center justify-items-center before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 before:hidden after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0 md:after:hidden">
          <div
            v-for="(client, index) in clients"
            :key="index"
            class="flex items-center justify-center h-12 md:h-16 w-1/4"
          >
            <img
              :src="client.logo"
              :alt="client.alt || 'Client logo'"
              class="max-h-full w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      <div class="p-1 border relative w-full md:w-1/2 border-neutral-900 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0">
        <div class="h-full w-full p-12 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0">
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
  </section>
</template>

<script setup lang="ts">
  import ProductQuote from '../../components/ProductQuote/ProductQuote.vue'
  import Button from '../../components/Button/Button.vue'

  export interface ClientLogo {
    logo: string
    alt?: string
  }

  interface SectionClientsWithQuoteProps {
    clients?: ClientLogo[]
    quote?: string
    author?: string
    role?: string
    logo?: string
    logoAlt?: string
    id?: string
    title?: string,
    link?: string,
    linkLabel?: string,
  }

  const props = withDefaults(defineProps<SectionClientsWithQuoteProps>(), {
    clients: () => []
  })
</script>
