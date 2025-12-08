<template>
  <LayoutContainer>
    <div
      :id="id"
      class="flex flex-wrap gap-2 gap-y-4 w-full justify-center"
    >
      <a
        v-for="{ url, name, role, image } in props.avatars"
        class="flex flex-col gap-5 w-40 items-center group"
        target="_blank"
        :href="url"
      >
        <img
          class="rounded filter grayscale group-hover:grayscale-0"
          loading="lazy"
          width="80"
          height="80"
          :src="image"
        />
        <div class="flex flex-col gap-1 text-center">
          <p class="text-neutral-200">{{ name }}</p>
          <p class="text-neutral-400 text-xs text-balance">
            {{ role }}
          </p>
        </div>
      </a>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'

  interface Avatar {
    image: string
    name: string
    role: string
    url: string
  }

  interface Props {
    id?: string
    avatars: Avatar[]
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  const props = withDefaults(defineProps<Props>(), {
    id: '',
    avatars: () => [
      {
        image: 'https://www.azion.com/assets/pages/about/perfil-6.png',
        name: 'Rafael Umann',
        role: 'Chief Executive Officer',
        url: 'https://www.url.com/in/rafaelumann/'
      },
      {
        image: 'https://www.azion.com/assets/pages/about/perfil.png',
        name: 'Alessandro Cauduro',
        role: 'Chief Artificial Intelligence Officer',
        url: 'https://www.url.com/in/alessandrocauduro/'
      },
      {
        image: 'https://www.azion.com/assets/pages/about/perfil-2.png',
        name: 'Fabiano Fraçao',
        role: 'Chief Revenue Officer',
        url: 'https://www.url.com/in/fabiano-fração-5b19632/'
      },
      {
        image: 'https://www.url.com/in/gabrielmadureira/',
        name: 'Gabriel Madureira',
        role: 'Chief Marketing Officer',
        url: 'https://www.url.com/in/gabrielmadureira/'
      },
      {
        image: 'https://www.azion.com/assets/pages/about/perfil-3.png',
        name: 'Júlio Silvello',
        role: 'Chief Product Officer',
        url: 'https://www.url.com/in/juliosilvello/'
      },
      {
        image: 'https://www.azion.com/assets/pages/about/perfil-4.png',
        name: 'Marcus Grando',
        role: 'Chief Technology Officer',
        url: 'https://www.url.com/in/marcusgrando/'
      },
      {
        image: 'https://www.azion.com/assets/pages/about/perfil-5.png',
        name: 'Mauricio Pegoraro',
        role: 'Chief Information Security Officer',
        url: 'https://www.url.com/in/mauriciowp/'
      }
    ],
    bottomSpacing: 'mb-24'
  })
</script>
