<template>
  <LinkButton
    outlined
    class="surface-section w-fit hover:surface-hover whitespace-nowrap h-8 flex-row items-center"
    icon="pi pi-circle-fill"
    iconPos="left"
    size="small"
    link="https://status.azion.com/"
    target="_blank"
    :label="label"
    :customIconStyle="`color: ${color}`"
  />
</template>

<script setup>
  import { onBeforeMount, ref } from 'vue'
  import LinkButton from '../linkbutton/LinkButton.vue'

  const props = defineProps({
    lang: {
      type: String,
      required: true
    }
  })

  const { lang } = props

  const TRANSLATIONS = {
    'All Systems Operational': {
      es: 'Todos los sistemas operativos',
      'pt-br': 'Todos os sistemas operacionais'
    },
    'Service under Maintenance': {
      es: 'Servicio en mantenimiento',
      'pt-br': 'Serviço em Manutenção'
    },
    'Partially Degraded Service': {
      es: 'Servicio parcialmente degradado',
      'pt-br': 'Serviço Parcialmente Degradado'
    },
    'Minor Service Outage': {
      es: 'Interrupción Menor del Servicio',
      'pt-br': 'Interrupção Menor do Serviço'
    },
    'Partial System Outage': {
      es: 'Interrupción Parcial del Sistema',
      'pt-br': 'Interrupção Parcial do Sistema'
    },
    'Major System Outage': {
      es: 'Interrupción Grave del Sistema',
      'pt-br': 'Interrupção Grave do Sistema'
    }
  }

  const STATUS_PAGE = {
    none: 'operational',
    minor: 'minor-outage',
    major: 'partial-outage',
    critical: 'major-outage',
    maintenance: 'maintenance'
  }

  const STATUS_PAGE_COLORS = {
    none: '#8bc249',
    minor: '#fec111',
    major: '#f3652b',
    critical: '#ff4141',
    maintenance: '#6e7cf7'
  }

  const OPERATIONAL_STATUS = {
    indicator: 'none',
    description: 'All Systems Operational'
  }

  const LABEL_INITIAL_VALUE =
    lang !== 'en'
      ? TRANSLATIONS[OPERATIONAL_STATUS.description][lang]
      : OPERATIONAL_STATUS.description

  const status = ref(OPERATIONAL_STATUS.indicator)
  const label = ref(LABEL_INITIAL_VALUE)
  const color = ref(STATUS_PAGE_COLORS['none'])

  onBeforeMount(() => {
    checkComponentStatus()
  })

  async function checkComponentStatus() {
    try {
      const response = await fetch('https://status.azion.com/api/v2/components.json', {
        method: 'GET'
      })
      const { components } = await response.json()
      const checkComponents = (component) =>
        component.status !== 'operational' && component.status !== 'partial_outage'
      const hasImpactedComponent = components?.some(checkComponents)
      const status = await getStatus(hasImpactedComponent)
      const translatedStatus =
        lang == 'pt-br' || lang == 'es'
          ? { ...status, description: TRANSLATIONS[status.description][lang] }
          : status

      updateSystemStatus(translatedStatus)
    } catch (error) {
      console.error(error)
    }
  }

  async function getStatus(checkStatusPage) {
    let status

    if (checkStatusPage) {
      const response = await fetch('https://status.azion.com/api/v2/status.json', {
        method: 'GET'
      })

      const normalizedResponse = await response.json()
      status = normalizedResponse.status
    } else {
      status = OPERATIONAL_STATUS
    }

    return status
  }

  function updateSystemStatus({ indicator, description }) {
    status.value = STATUS_PAGE[indicator]
    color.value = STATUS_PAGE_COLORS[indicator]
    label.value = description
  }
</script>
