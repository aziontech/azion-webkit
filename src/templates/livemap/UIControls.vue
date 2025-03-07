<template>
  <div
    :class="getToggleControlBox() ? 'w-[100%] max-w-[380px] !h-auto' : 'w-[32px] !h-[36px]'"
    class="absolute left-0 flex flex-col z-20 top-24 transition-[width, height] duration-[350ms] ease-in-out]"
  >
    <div
      :class="getToggleControlBox() ? '!p-6 border surface-border' : '!p-0'"
      class="rounded-md bg-[var(--surface-50)]"
    >
      <div
        v-if="getWindowSize() < 768"
        :class="getToggleControlBox() ? '!p-6' : '!p-0'"
        class="flex justify-end absolute top-0 right-0"
      >
        <Button
          outlined
          aria-label="Minimize/Maximize"
          :icon="getToggleControlBox() ? 'pi pi-arrow-left' : 'pi pi-arrow-right'"
          @click="toggleControl()"
        />
      </div>

      <div
        class="transition-[width, height, opacity] duration-[50ms] ease-in-out]"
        :class="getToggleControlBox() ? 'opacity-100 w-auto h-auto' : 'w-0 h-0 opacity-0'"
      >
        <div class="mb-8">
          <Overline label="Ao vivo" />
          <h2 class="text-color text-3xl font-medium">Azion Live Map</h2>
        </div>
        <div
          class="relative overflow-hidden transition-[width, height] ease-in-out duration-[350ms]"
        >
          <div class="controls flex flex-row gap-0 md:gap-2">
            <Button
              label="Vendas"
              class="text-xs focus:shadow-none w-fit"
              :text="activeGlobe !== 'sales'"
              :severity="activeGlobe === 'sales' ? 'secondary' : null"
              @click="changeGlobe('sales')"
            />
            <Button
              label="Tráfego"
              class="text-xs focus:shadow-none w-fit"
              :text="activeGlobe !== 'traffic'"
              :severity="activeGlobe === 'traffic' ? 'secondary' : null"
              @click="changeGlobe('traffic')"
            />
            <Button
              label="Ataques"
              class="text-xs focus:shadow-none w-fit"
              :text="activeGlobe !== 'attacks'"
              :severity="activeGlobe === 'attacks' ? 'secondary' : null"
              @click="changeGlobe('attacks')"
            />
            <Button
              label="Edge Network"
              class="text-xs focus:shadow-none w-fit text-nowrap"
              :text="activeGlobe !== 'edges'"
              :severity="activeGlobe === 'edges' ? 'secondary' : null"
              @click="changeGlobe('edges')"
            />
          </div>

          <div class="my-8">
            <p
              class="text-xs text-color-secondary"
              v-show="activeGlobe === 'sales'"
            >
              O mapa apresenta cidades ativas no processo de checkout em 44 dos 50 maiores
              ecommerces do Brasil. São mais de 100 mil lojas na América Latina.
            </p>
            <p
              class="text-xs text-color-secondary"
              v-show="activeGlobe === 'traffic'"
            >
              Veja o tráfego do mundo que está passando pela Edge da Azion para as lojas de
              Ecommerce.
            </p>
            <p
              class="text-xs text-color-secondary"
              v-show="activeGlobe === 'attacks'"
            >
              Edge Computing promove a segurança da infra-estrutura do Ecommerce. Os dados passam
              por uma camada de Web Application Firewall (WAF), quando identificado uma requisição
              maliciosa ela automaticamente será bloqueada.
            </p>
            <p
              class="text-xs text-color-secondary"
              v-show="activeGlobe === 'edges'"
            >
              Cidades onde a Azion possui Edge Nodes - servidores que atendem requisições de
              usuários. O usuário acessa o Edge Node mais próximo para ter uma resposta imediata da
              aplicação.
              <a
                href="https://www.azion.com/pt-br/produtos/edge-network/"
                target="_blank"
                title="Saiba mais sobre Azion Edge Network"
                >Saiba mais.</a
              >
            </p>
          </div>

          <form
            class="platform-filter"
            v-if="activeGlobe !== 'edges'"
          >
            <fieldset class="p-0 m-0 block">
              <label
                class="mb-[0.725rem] block hover:cursor-pointer flex flex-row gap-1 items-center"
                for="checkboxDesktop"
              >
                <input
                  name="platform-filter"
                  type="radio"
                  value="desktop"
                  id="checkboxDesktop"
                  v-on:change="filter.platform($event)"
                />
                <span></span>
                <small class="text-color"> Desktop </small>
              </label>

              <label
                class="mb-[0.725rem] block hover:cursor-pointer flex flex-row gap-1 items-center"
                for="checkboxMobile"
              >
                <input
                  name="platform-filter"
                  type="radio"
                  value="mobile"
                  id="checkboxMobile"
                  v-on:change="filter.platform($event)"
                />
                <span></span>
                <small class="text-color"> Mobile </small>
              </label>

              <label
                class="mb-[0.725rem] block hover:cursor-pointer flex flex-row gap-1 items-center"
                for="checkboxAll"
              >
                <input
                  checked
                  name="platform-filter"
                  type="radio"
                  value="all"
                  id="checkboxAll"
                  v-on:change="filter.platform($event)"
                />
                <span></span>
                <small class="text-color"> Todos dispositivos </small>
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div
    class="!absolute text-right right-0 !bottom-64"
    v-show="epochtime !== 0"
  >
    <div class="data-content">
      <div
        v-show="activeGlobe === 'sales'"
        v-if="status"
      >
        <strong
          class="md:text-7xl text-5xl font-semibold w-fit leading-tight flex flex-col gap-3 md:gap-5"
        >
          <div class="flex flex-col items-end">
            <Tile severity="primary">
              <i class="ai ai-marketplace text-xs"></i>
            </Tile>
          </div>

          <span class="block">
            {{ noLabelunitHelper(activeGlobe, status).replace('lhões', '') }}
          </span>
        </strong>
        <!-- <BigNumbers :items="[{title: }]" /> -->
        <p class="text-sm text-color-secondary mt-3">Acessos ao carrinho</p>
      </div>

      <div
        class="text-sm"
        v-show="activeGlobe === 'traffic'"
        v-if="status"
      >
        <strong
          class="md:text-7xl text-5xl font-semibold w-fit leading-tight flex flex-col gap-3 md:gap-5"
        >
          <div class="flex flex-col items-end">
            <Tile severity="primary">
              <i class="ai ai-network-lists text-xs"></i>
            </Tile>
          </div>

          <span class="block">
            {{ noLabelunitHelper(activeGlobe, status) }}
          </span>
        </strong>
        <!-- <BigNumbers :items="[{title: noLabelunitHelper(activeGlobe, status)}]" /> -->
        <p class="text-sm text-color-secondary mt-3">
          <span class="block"> Dados trafegados </span>
          <span class="block">
            {{ unitHelper('traffic-offload', offload) }}
          </span>
        </p>
      </div>

      <div
        class="text-sm text-color-secondary"
        v-show="activeGlobe === 'attacks'"
        v-if="status"
      >
        <strong
          class="md:text-7xl text-5xl font-semibold w-fit leading-tight flex flex-col gap-3 md:gap-5"
        >
          <div class="flex flex-col items-end">
            <Tile severity="primary">
              <i class="ai ai-secure-pillar text-xs"></i>
            </Tile>
          </div>

          <span class="block">
            {{ noLabelunitHelper(activeGlobe, status).replace('lhões', '') }}
          </span>
        </strong>
        <!-- <BigNumbers :items="[{title: noLabelunitHelper(activeGlobe, status)}]" /> -->
        <p class="text-sm text-color-secondary mt-3">Ataques bloqueados</p>
      </div>

      <div v-show="activeGlobe === 'edges'">
        <strong
          class="md:text-7xl text-5xl font-semibold w-fit leading-tight flex flex-col gap-3 md:gap-5"
        >
          <div class="flex flex-col items-end">
            <Tile severity="primary">
              <i class="pi pi-map-marker text-xs"></i>
            </Tile>
          </div>
          <span class="block"> +100 </span>
        </strong>
        <!-- <BigNumbers :items="[{title: '+100'}]" /> -->
        <p class="text-sm text-color-secondary mt-3x">Edge Locations</p>
      </div>
    </div>

    <div>
      <p class="text-sm text-color-secondary">
        <span class="block">Desde: 01/11/2022</span>
        Atualização: {{ dateHelper(epochtime) }}
      </p>
    </div>
  </div>

  <Timeline
    :activeGlobe="activeGlobe"
    @timelineLoaded="handlerTimestampUpdate"
    @clickNavigation="handlerTimestampUpdate"
  />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import Timeline from './Timeline.vue'
  import { dateHelper, noLabelunitHelper, unitHelper } from './helper/formatter'

  import Button from 'primevue/button'
  import Overline from '../overline'
  import Tile from '../tile'
  // import BigNumbers from "../bignumbers"

  ///////////////////
  // HANDLE PROPS //
  //////////////////

  let epochtime = ref(0)
  const windowSize = ref(0)

  ////////////
  // EVENTS //
  ////////////

  const emit = defineEmits(['updateGlobeView', 'updateTimestamp', 'updateFilter'])
  const activeGlobe = ref('sales')
  const platform = ref('all')
  const status = ref(null)
  const offload = ref(null)
  const toggleControlBox = ref(true)

  const changeGlobe = (globeId) => {
    activeGlobe.value = globeId

    status.value = ''
    offload.value = ''

    if (document.body.offsetWidth < 768) toggleControl()

    emit('updateGlobeView', activeGlobe.value)
  }

  const handlerTimestampUpdate = (epoch) => {
    if (activeGlobe.value === 'edges') {
      return
    }

    epochtime.value = epoch

    load.status(epoch).then((newTimestamp) => {
      emit('updateTimestamp', newTimestamp)
    })
  }

  const getWindowSize = () => {
    return windowSize.value
  }

  const getToggleControlBox = () => {
    return toggleControlBox.value
  }

  const toggleControl = () => {
    toggleControlBox.value = !toggleControlBox.value
  }

  const uiControlRenderByViewSize = () => {
    windowSize.value = window.innerWidth

    if (!getToggleControlBox() && window.innerWidth > 768) toggleControl()
    if (getToggleControlBox() && window.innerWidth < 768) toggleControl()
  }

  ////////////////////
  // INITIAL EVENTS //
  ////////////////////

  onMounted(() => {
    uiControlRenderByViewSize()

    window.addEventListener('resize', function () {
      uiControlRenderByViewSize()
    })
  })

  /////////////
  // METHODS //
  /////////////

  async function dataFetch(type, epoch) {
    let url = `https://o6y84w32t0.map.azionedge.net/${type}?timestamp=${epoch}`
    let response = await fetch(url).catch((error) => {
      console.error(error)
    })
    let data = await response.json().catch((error) => {
      console.error(error)
    })

    return data
  }

  ///////////
  // LOADS //
  ///////////

  let load = {}

  load.status = async (epochtime) => {
    return dataFetch('agregacao', epochtime).then((response) => {
      extract[activeGlobe.value](response)
      return epochtime
    })
  }

  /////////////
  // EXTRACT //
  /////////////

  let extract = {
    parse: (data) => {
      return {
        req: {
          mob: data[0],
          desk: data[1],
          sales: {
            mob: data[2],
            desk: data[3]
          },
          blocked: {
            mob: data[6],
            desk: data[7]
          }
        },
        bytes: {
          mob: data[4],
          desk: data[5],
          ims_economize: {
            mob: data[8],
            desk: data[9]
          },
          cache: {
            mob: data[10],
            desk: data[11]
          },
          offload: data[14]
        },
        hosts: {
          mob: data[12],
          desk: data[13]
        }
      }
    }
  }

  extract.sales = (data) => {
    let parsedData = extract.parse(data)
    status.value =
      platform.value === 'all'
        ? parsedData.req.sales.mob + parsedData.req.sales.desk
        : platform.value === 'mobile'
          ? parsedData.req.sales.mob
          : parsedData.req.sales.desk
  }

  extract.traffic = (data) => {
    let parsedData = extract.parse(data)

    offload.value = parsedData.bytes.offload
    status.value =
      platform.value === 'all'
        ? parsedData.bytes.mob + parsedData.bytes.desk
        : platform.value === 'mobile'
          ? parsedData.bytes.mob
          : parsedData.bytes.desk
  }

  extract.attacks = (data) => {
    let parsedData = extract.parse(data)
    status.value =
      platform.value === 'all'
        ? parsedData.req.blocked.mob + parsedData.req.blocked.desk
        : platform.value === 'mobile'
          ? parsedData.req.blocked.mob
          : parsedData.req.blocked.desk
  }

  extract.edges = () => {
    status.value = '+100'
  }

  //////////////
  // FILTERS //
  ////////////

  let filter = {}

  filter.platform = (event) => {
    const whitelist = ['all', 'mobile', 'desktop']
    platform.value = event.target.value.toLowerCase()

    let hasOnWhitelist = whitelist.indexOf(platform.value)

    if (hasOnWhitelist === -1) {
      console.info(`Filter value has not configured`)
      return
    }

    load.status(epochtime.value)

    emit('updateFilter', platform.value)
  }
</script>
