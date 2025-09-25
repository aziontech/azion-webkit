<template>
    <div :class="['p-6 flex flex-col justify-between h-full min-w-[18.5rem] text-black', popular ? 'bg-orange-600' : 'bg-neutral-300', !buttonHidden ? 'rounded-t-xl md:rounded-xl pb-2' : 'rounded-xl']">
      <div class="flex flex-col gap-2 mb-5 pt-4">
        <h3 class="text-xl font-medium">{{ title }}</h3>
        <p class="text-sm">{{ subtitle }}</p>
      </div>
      <div>
        <ul class="mb-10">
            <li class="flex items-center gap-2 mb-2" v-for="feature in features" :key="feature">
                <span :class="['pi', feature.icon, popular ? 'text-neutral-100' : 'text-orange-500']"></span>
                <p class="font-sora text-sm">{{ feature.label }}</p>
            </li>
        </ul>
      </div>
      <div :class="['flex mb-2 justify-between items-center flex-wrap font-proto-mono', !buttonHidden ? 'pb-2' : 'pb-0']">
        <span class="text-xs w-full mb-2 text-left font-proto-mono">start at</span>
        <div class="flex items-end text-sm font-proto-mono">
            <span v-if="currentPrice.startsWith('$')">$</span>
            <h4 class="text-7xl leading-[3.5rem] font-proto-mono">{{ currentPrice.replace('$', '') }}</h4>
            <span class="font-proto-mono">{{ currentPeriod === 'monthly' ? '/mo' : '/year' }}</span>
        </div>
      </div>
      <div v-if="buttonHidden">
        <Button :icon="'pi pi-chevron-right'" :label="buttonLabel" type="secondary" size="large" />      </div>
    </div>
</template>

<script setup>
import Button from '../Button/Button.vue'

import { computed } from 'vue'

const props = defineProps({
    popular: Boolean,
    title: String,
    subtitle: String,
    features: Array,
    monthlyPrice: String,
    annualPrice: String,
    currentPeriod: {
        type: String,
        default: 'monthly'
    },
    savings: String,
    buttonLabel: String,
})

const currentPrice = computed(() => {
    return props.currentPeriod === 'monthly' ? props.monthlyPrice : props.annualPrice
})
</script>
    