<template>
  <div
    class="max-w-screen-lg w-full m-0 grid-cols-1 md:grid-cols-2 grid place-content-center gap-10"
  >
    <CardBase
      v-for="({ overline, title, list, pricing, action }, index) in TRANSLATIONS[lang]"
      :key="index"
      spacing="relaxed"
      grid
    >
      <template #content>
        <div class="flex flex-col lg:gap-10 gap-6">
          <div class="flex flex-col gap-3">
            <Overline :label="overline" />
            <CardTitle> {{ title }} </CardTitle>
          </div>
          <div class="flex flex-col gap-4">
            <div
              v-for="({ icon, title, severity }, index) in list"
              :key="index"
              class="flex flex-row gap-2"
            >
              <div class="min-w-6">
                <Tile :severity="severity"> <i :class="icon" /> </Tile>
              </div>
              <p
                class="font-medium"
                :class="{ 'text-orange-500': severity === 'primary' }"
              >
                {{ title }}
              </p>
            </div>
          </div>
          <div
            v-if="pricing"
            class="flex flex-col"
          >
            <p class="text-7xl font-semibold leading-tight">{{ pricing.value }}</p>
            <CardDescription> {{ pricing.description }}</CardDescription>
          </div>
        </div>
      </template>
      <template #actions>
        <LinkButton
          class="w-fit"
          v-bind="action"
        />
      </template>
    </CardBase>
  </div>
</template>

<script setup>
  import CardBase from '../cardbase'
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Tile from '../tile'
  import LinkButton from '../linkbutton'

  defineProps({
    lang: {
      type: String,
      required: true,
      default: 'en',
      options: ['en', 'es', 'pt-br']
    }
  })

  const TRANSLATIONS = {
    en: [
      {
        overline: 'Enhance your experience',
        title: 'Enhance the experience of building your applications',
        list: [
          { icon: 'pi pi-credit-card', title: 'No credit card required' },
          { icon: 'pi pi-tags', title: 'Access to all products' },
          {
            icon: 'pi pi-dollar',
            title: 'Earn credit to start with the platform',
            severity: 'primary'
          }
        ],
        pricing: {
          value: '$300',
          description: 'Free credits to test your applications'
        },
        action: {
          label: 'Create a free account',
          link: 'https://console.azion.com/signup/'
        }
      },
      {
        overline: 'become a partner',
        title:
          'Bring your solutions to the Azion Marketplace and promote them to the edge community:',
        list: [
          {
            icon: 'pi pi-globe',
            title:
              'Present your solutions to the edge community: ISVs, software developers and open source communities.'
          },
          { icon: 'pi pi-shopping-cart', title: 'Quickly distribute your edge-enabled software' },
          { icon: 'pi pi-users', title: 'Gain access to thousands of active buyers' }
        ],
        action: {
          label: 'Become a partner',
          link: '/en/marketplace/become-a-partner/',
          severity: 'secondary'
        }
      }
    ],
    es: [
      {
        overline: 'MEJORA TU EXPERIENCIA',
        title: 'Mejora la experiencia de construcción de tus aplicaciones',
        list: [
          { icon: 'pi pi-credit-card', title: 'No necesita tarjeta de crédito' },
          { icon: 'pi pi-tags', title: 'Acceso a todos los productos' },
          {
            icon: 'pi pi-dollar',
            title: 'Recibe créditos de servicio para comenzar a usar la plataforma',
            severity: 'primary'
          }
        ],
        pricing: {
          value: '300 USD',
          description: 'Gratis para probar tus aplicaciones'
        },
        action: {
          label: 'Crear cuenta gratis',
          link: 'https://console.azion.com/signup/'
        }
      },
      {
        overline: 'CONVIÉRTETE EN SOCIO',
        title: 'Trae tus soluciones al Azion Marketplace y promociónalas en la comunidad edge',
        list: [
          {
            icon: 'pi pi-globe',
            title:
              'Presenta tus soluciones a la comunidad edge: ISVs, desarrolladores de software y comunidades open source'
          },
          {
            icon: 'pi pi-shopping-cart',
            title: 'Distribuye de forma ágil tus softwares habilitados para el edge'
          },
          { icon: 'pi pi-users', title: 'Accede a miles de compradores activos' }
        ],
        action: {
          label: 'Conviértete en socio',
          link: '/es/marketplace/ser-socio/',
          severity: 'secondary'
        }
      }
    ],
    'pt-br': [
      {
        overline: 'Aprimore sua experiência ',
        title: 'Aprimore a experiência de construção das suas aplicações',
        list: [
          { icon: 'pi pi-credit-card', title: 'Não precisa de cartão de crédito' },
          { icon: 'pi pi-tags', title: 'Acesso a todos os produtos' },
          {
            icon: 'pi pi-dollar',
            title: 'Ganhe crédito para iniciar com a plataforma',
            severity: 'primary'
          }
        ],
        pricing: {
          value: 'US$ 300',
          description: 'Grátis para testar suas aplicações'
        },
        action: {
          label: 'Experimente grátis',
          link: 'https://console.azion.com/signup/'
        }
      },
      {
        overline: 'seja um parceiro',
        title: 'Traga suas soluções para o Azion Marketplace e divulgue para toda comunidade',
        list: [
          {
            icon: 'pi pi-globe',
            title:
              'Apresente suas soluções para a comunidade edge: ISVs, desenvolvedores de software e comunidades Open Source.'
          },
          {
            icon: 'pi pi-shopping-cart',
            title: 'Distribuia de forma ágil seus softwares habilitados para o edge'
          },
          { icon: 'pi pi-users', title: 'Tenha acesso a milhares de compradores ativos' }
        ],
        action: {
          label: 'Seja um parceiro',
          link: '/pt-br/marketplace/seja-um-parceiro/',
          severity: 'secondary'
        }
      }
    ]
  }
</script>
