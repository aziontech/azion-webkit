<template>
    <PrimeButton outlined class="surface-section w-fit hover:surface-hover whitespace-nowrap" icon="pi pi-circle-fill"
    size="small" :label="label" :pt="{
      root: { class: 'h-8 flex-row items-center' },
      label: { class: 'font-normal text-sm' },
      icon: { style: `color: ${color}`, class: 'text-xs' }
    }" @click="redirectToLink" />
</template>

<script setup>
import PrimeButton from 'primevue/button'
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
  lang: {
    type: String,
    required: true,
  }
})

const { lang } = props

const redirectToLink = () => {
  window.open(this.link, '_blank')
}

const TRANSLATIONS = {
    "All Systems Operational": {
        es: "Todos los sistemas operativos",
        "pt-br": "Todos os sistemas operacionais"
    },
    "Service under Maintenance": {
        es: "Servicio en mantenimiento",
        "pt-br": "Serviço em Manutenção"
    },
    "Partially Degraded Service": {
        es: "Servicio parcialmente degradado",
        "pt-br": "Serviço Parcialmente Degradado"
    },
    "Minor Service Outage": {
        es: "Interrupción Menor del Servicio",
        "pt-br": "Interrupção Menor do Serviço"
    },
    "Partial System Outage": {
        es: "Interrupción Parcial del Sistema",
        "pt-br": "Interrupção Parcial do Sistema"
    },
    "Major System Outage": {
        es: "Interrupción Grave del Sistema",
        "pt-br": "Interrupção Grave do Sistema"
    }
};

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

const status = ref('')
const label = ref('')
const color = ref(STATUS_PAGE_COLORS.none)

onBeforeMount(() => {
  checkComponentStatus()
})

async function checkComponentStatus() {
  try {
    const response = await fetch('https://status.azion.com/api/v2/components.json', {
      method: 'GET',
    })
    const { components } = await response.json()

    const checkComponents = (component) =>
      component.status !== 'operational' && component.status !== 'partial_outage'

    const hasImpactedComponent = components?.some(checkComponents)

    const status = await getStatus(hasImpactedComponent)

    const  translatedStatus = lang == 'pt-br' || lang == 'es' ? { ... status, description: TRANSLATIONS[status.description][lang] } : status

    updateSystemStatus(translatedStatus)


  } catch (error) {
    console.error(error)
  }
}

async function getStatus(checkStatusPage) {
  let status

  if (checkStatusPage) {
    const response = await fetch('https://status.azion.com/api/v2/status.json', {
      method: 'GET',
    })

    status = response.json()
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

