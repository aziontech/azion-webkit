<template>
  <div class="relative w-full bottom-[288px] flex justify-end mb-8">
    <Button
      severity="secondary"
      class="text-xs w-fit focus:shadow-none btn-filter btn-filter-all"
      label="Mês Completo"
      @click="filter.allMonth($event)"
    />
  </div>

  <div
    class="timeline-content"
    :class="'absolute z-10 left-0 !-bottom-[60px] w-full !h-[172px] overflow-x-scroll overflow-y-hidden'"
  >
    <div
      class="relative min-w-[1000px]"
      ref="divTimelineWrap"
    >
      <div
        v-if="SHOW_TIMELINE"
        class="filter-content"
      >
        <ul
          class="filter-list"
          :class="'flex p-0 relative h-[2rem]'"
        >
          <li
            class="filter-content-day"
            v-for="day in totalDaysMonth"
          >
            <button
              v-if="day <= currentDay"
              :id="`btnFilter${day}`"
              @click="filter.dayEvent($event)"
              class="btn btn-filter"
            >
              {{ day }}
            </button>
            <button
              v-else
              disabled
              :id="`btnFilter${day}`"
              @click="filter.dayEvent($event)"
              class="btn btn-filter"
            >
              {{ day }}
            </button>
          </li>
        </ul>
      </div>

      <v-frappe-chart
        type="bar"
        is-navigable
        :height="175"
        :class="`chart-${props.activeGlobe} z-[1000] min-w-[1000px]`"
        :labels="CHARTDATA.labels"
        :data="[{ values: CHARTDATA.values }]"
        :colors="['#333333']"
        :barOptions="{
          spaceRatio: 0
        }"
        @data-select="ui.clickBar"
        :tooltipOptions="{
          formatTooltipX: (d) => dateHelper(d),
          formatTooltipY: (d) => unitHelper(props.activeGlobe, d)
        }"
        v-if="CHARTDATA.values.length && CHARTDATA.labels.length"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted, onUpdated } from 'vue'
  import { VFrappeChart } from 'vue-frappe-chart'
  import { dateHelper, unitHelper } from './helper/formatter'
  import Button from 'primevue/button'

  /////////////////////
  //    CONFIG       //
  /////////////////////

  const props = defineProps({
    activeGlobe: String
  })
  let divTimelineWrap = ref(null)

  let SHOW_TIMELINE = ref(true)
  let CHARTDATA = reactive({
    values: [],
    labels: []
  })

  let currentGlobe = null
  let totalDaysMonth = ref(0)
  let currentDay = ref(0)

  ///////////////////////
  //  VUE LOAD EVENTS  //
  ///////////////////////

  onMounted(async () => {
    SHOW_TIMELINE.value = true
    currentGlobe = props.activeGlobe

    currentDay.value = date.curretDay()
    totalDaysMonth.value = date.totalDaysInMonth()

    await ui.loadTimeline()
    filter.firstActivate()
  })

  onUpdated(async () => {
    if (props.activeGlobe === currentGlobe) {
      return
    }

    // hide timeline in edges globe visualization
    props.activeGlobe === 'edges' ? (SHOW_TIMELINE.value = false) : (SHOW_TIMELINE.value = true)

    if (SHOW_TIMELINE) {
      await ui.loadTimeline(props.activeGlobe)
      filter.firstActivate()
    }
  })

  /////////////////
  //  EMMITERS  //
  ////////////////

  const emit = defineEmits(['timelineLoaded', 'clickNavigation'])

  let emmiters = {
    loaded: (data) => {
      currentGlobe = props.activeGlobe
      timeline.setData(data)
      emit('timelineLoaded', data.epochtime)
    },
    clickNavigation: (epochtime) => {
      emit('clickNavigation', epochtime)
    }
  }

  ////////////
  // FILTER //
  ////////////

  let filter = {}

  filter.day = (day) => {
    let d = new Date()
    let month = d.getMonth() + 1
    let year = d.getFullYear()

    let dayMidnight = new Date(`${month}/${day}/${year}`)
    let dayStartEpoch = dayMidnight.getTime()
    let dayEndEpoch = new Date(`${month}/${day}/${year}`).setHours(23, 55, 0, 0) // presuming candles of 5 minutes

    let epochs = {
      startEpoch: dayStartEpoch / 1000, // 00:00
      endEpoch: dayEndEpoch / 1000 // 23:55
    }

    return epochs
  }

  filter.dayEvent = (args) => {
    let day = args.target.innerHTML.trim()
    let epochs = filter.day(day)

    filter.setCurrent(day)
    ui.loadTimeline(props.activeGlobe, epochs)
  }

  filter.today = () => {
    return filter.day(date.curretDay())
  }

  filter.allMonth = (args) => {
    let btn = args.target

    if (btn.classList.contains('current')) {
      filter.resetCurrent()
      ui.loadTimeline()
      filter.firstActivate()

      return
    }

    let epochs = {
      startEpoch: filter.day(1).startEpoch,
      endEpoch: 0
    }

    ui.loadTimeline(props.activeGlobe, epochs)
    filter.resetCurrent()

    divTimelineWrap.value.classList.add('disabled-day-filter')

    args.target.classList.add('current')
    args.target.innerHTML = 'Voltar para dia atual'
  }

  filter.firstActivate = () => {
    const curretDay = date.curretDay()
    filter.setCurrent(curretDay)
  }

  filter.setCurrent = (day) => {
    filter.resetCurrent()

    const btn = document.querySelector(`#btnFilter${day}`)
    if (btn) btn.classList.add('current')
  }

  filter.resetCurrent = () => {
    const btn = document.querySelector(`.timeline-content .btn-filter.current`)
    const btnAllMonth = document.querySelector(`.btn-filter.btn-filter-all`)

    divTimelineWrap.value.classList.remove('disabled-day-filter')

    if (btn) btn.classList.remove('current')
    if (btnAllMonth) btnAllMonth.innerHTML = 'Mês Completo'
  }

  //////////////////
  // DATE HELPERS //
  //////////////////

  let date = {}

  date.totalDaysInMonth = (year, month) => {
    const date = new Date()
    const currentYear = year ? year : date.getFullYear()
    const currentMonth = month ? month : date.getMonth() + 1
    const totalDaysInMonth = new Date(currentYear, currentMonth, 0).getDate()

    return totalDaysInMonth
  }

  date.curretDay = () => {
    return new Date().getDate()
  }

  /////////////////////
  // EXTRACTING DATA //
  /////////////////////

  let extract = {}

  extract.timeline = (data) => {
    data = !data || !Array.isArray(data) ? [] : data
    let parsedData = []

    data.forEach((listitem) => {
      listitem = !listitem || !Array.isArray(listitem) ? [] : listitem

      parsedData.push({
        timestamp: listitem[0],
        total: {
          req: {
            mob: listitem[1][0],
            desk: listitem[1][1],
            sales: {
              mob: listitem[1][2],
              desk: listitem[1][3]
            },
            blocked: {
              mob: listitem[1][6],
              desk: listitem[1][7]
            }
          },
          bytes: {
            mob: listitem[1][4],
            desk: listitem[1][5],
            ims_economize: {
              mob: listitem[1][8],
              desk: listitem[1][9]
            },
            cache: {
              mob: listitem[1][10],
              desk: listitem[1][11]
            }
          },
          hosts: {
            mob: listitem[1][12],
            desk: listitem[1][13]
          }
        }
      })
    })

    return parsedData
  }

  //////////
  // LOAD //
  //////////

  let load = {}

  load.timeline = (start = 0, end = null) => {
    let qs = `/?start=${start}`
    qs += end ? `&finish=${end}` : ''
    let url = `https://o6y84w32t0.map.azionedge.net//timeline${qs}`

    return fetch(url)
      .then((response) => {
        return response.json().catch((error) => {
          console.error(error)
          return []
        })
      })
      .catch((error) => {
        console.error(error)
        return []
      })
  }

  //////////////////////////
  // TIMELINE MANIPULATION //
  //////////////////////////

  let timeline = {}

  timeline.sales = (tline) => {
    // up number: timestamp
    // down number: timeslice.total.req.sales.mob + timeslice.total.req.sales.desk
    let labels = []
    let values = []
    let timelineData = {}

    tline.forEach((timeslice) => {
      labels.push(timeslice.timestamp)
      values.push(timeslice.total.req.sales.mob + timeslice.total.req.sales.desk)
    })
    timelineData = {
      labels: labels,
      values: values
    }

    return timelineData
  }

  timeline.traffic = (tline) => {
    // up number: timestamp
    // down number: timeslice.total.bytes.mob + timeslice.total.bytes.desk
    // offload indicator: count(ims_enomize + sent_enomize)
    let labels = []
    let values = []
    let timelineData = []

    tline.forEach((timeslice) => {
      labels.push(timeslice.timestamp)
      values.push(timeslice.total.bytes.mob + timeslice.total.bytes.desk)
    })

    timelineData = {
      labels: labels,
      values: values
    }

    return timelineData
  }

  timeline.attacks = (tline) => {
    // up: timestamp
    // down: timeslice.total.req.blocked.mob + timeslice.total.req.blocked.desk
    let labels = []
    let values = []
    let timelineData = []

    tline.forEach((timeslice) => {
      labels.push(timeslice.timestamp)
      values.push(timeslice.total.req.blocked.mob + timeslice.total.req.blocked.desk)
    })

    timelineData = {
      labels: labels,
      values: values
    }

    return timelineData
  }

  timeline.edges = () => {
    return
  }

  timeline.setData = (data) => {
    if (!data.timeline) {
      return
    }

    CHARTDATA.labels = data.timeline.labels
    CHARTDATA.values = data.timeline.values
  }

  // timeline.setWidthWrap = (multiple) => {
  //     divTimelineWrap.value.style.width = `${window.innerWidth * multiple}px`;
  // }

  //////////////////////
  // USER INTERFACE  //
  /////////////////////

  let ui = {}

  ui.loadTimeline = async (functionName, epochs) => {
    if (!functionName) {
      console.warn(`No valid timeline param. Timeline sales will be loaded!`)
    }

    let epochstime = {
      start:
        epochs && typeof epochs.startEpoch === 'number'
          ? epochs.startEpoch
          : filter.today().startEpoch,
      end: epochs && typeof epochs.endEpoch === 'number' ? epochs.endEpoch : 0
    }
    let timelineData = await load.timeline(epochstime.start, epochstime.end)
    let parsedTimelineData = extract.timeline(timelineData)
    let tline = await timeline[functionName || 'sales'](parsedTimelineData)
    let lastCandleIndex = timelineData.length - 1
    let lastEpochCandle = timelineData[lastCandleIndex][0]

    emmiters.loaded({
      epochtime: lastEpochCandle,
      timeline: tline
    })
  }

  ui.clickBar = (args) => {
    // prevents double event generation
    if (args.type === 'data-select') {
      let timestamp = args.label
      emmiters.clickNavigation(timestamp)
    }
  }
</script>

<style lang="scss">
  $color-dark-theme: var(--azc-dark-theme, #1e1e1e); // gray almost black
  $color-super-light-theme: var(--azc-super-light-theme, #ffffff); // white
  $color-primary: var(--azc-primary, #f3652b); // orange
  $color-primary-variant: var(--azc-primary-variant, #cc5500); // orange stronger

  $color-gray-800: var(--az-gray-800, #333333);
  $color-gray-600: var(--az-gray-600, #666666);
  $color-gray-300: var(--az-gray-300, #b2b2b2);

  ///////////////////////
  // TYPOGRAPHY COLORS //
  ///////////////////////

  $text-super-light: var(--azc-text-super-light, $color-super-light-theme);
  $text-dark: var(--azc-text-dark, $color-dark-theme);
  $text: var(--azc-text, $color-gray-600);

  .timeline-content {
    .disabled-day-filter {
      .filter-content-day {
        display: none;
      }

      .filter-list {
        justify-content: end;
      }
    }

    .filter-list {
      // justify-content: space-around;
      justify-content: center;

      .btn-filter {
        color: $text;
        min-width: 32px;
        min-height: 32px;
        padding: 0;

        &.current {
          background-color: $color-primary;
          color: $text-dark;
        }

        &:hover {
          color: $text-super-light;
        }

        &:disabled {
          color: $color-gray-800;
          cursor: initial;
        }
      }
    }

    .chart-sales,
    .chart-attacks,
    .chart-traffic {
      position: relative;
      // top: 42px;
    }

    // hack to dom be found
    .chart-edges {
      opacity: 0;
      visibility: hidden;
    }

    .bar {
      pointer-events: all;
      stroke: #313030;

      &:hover {
        cursor: pointer;
        fill: $color-primary !important;
      }
    }

    .data-point-list {
      > li {
        border-top: 4px solid $color-primary !important;
      }
    }

    .frappe-chart {
      .y.axis,
      .x.axis {
        .line-vertical,
        .line-horizontal,
        text {
          display: none;
        }
      }

      .legend {
        display: none;
      }
    }
  }
</style>
