<template>
    <div :class="['p-6 flex flex-col justify-between h-full w-full md:w-[20rem] text-black', popular ? 'bg-orange-600' : 'bg-neutral-300', !buttonHidden ? 'rounded-t-xl md:rounded-xl pb-2' : 'rounded-xl']">
        <div class="pb-5">
            <div class="flex gap-4 "> 
                <h3 class="display-2 font-sora font-bold pb-4">{{ title }}</h3>
                <template v-if="popular">
                    <span class="h-fit text-xs flex font-proto-mono justify-center items-center text-neutral-100 bg-neutral-900 px-2 py-1 rounded">Popular</span>
                </template>
            </div>
            <p class="text-sm">{{ subtitle }}</p>
        </div>
        <div class="h-[13rem]">
            <ul class="mb-10">
                <li class="flex items-center gap-2 mb-2" v-for="feature in features" :key="feature">
                    <span v-if="feature.icon" :class="['pi', feature.icon, popular ? 'text-neutral-100' : 'text-orange-500']"></span>
                    <p class="font-sora text-sm">{{ feature.label }}</p>
                </li>
            </ul>
        </div>
        <div :class="['flex mb-2 justify-between items-center flex-wrap font-proto-mono', !buttonHidden ? 'pb-2' : 'pb-0']">
            <span class="text-xs w-full mb-2 text-left font-proto-mono">{{ priceLabel }}</span>
            <div class="flex items-end text-sm font-proto-mono">
                <span v-if="currentPrice.startsWith('$')">$</span>
                <h4 class="text-7xl leading-[3.5rem] tracking-tighter font-proto-mono">{{ currentPrice.replace('$', '') }}</h4>
                <span class="font-proto-mono">{{ currentPeriod === 'monthly' ? '/mo' : '/mo' }}</span>
            </div>
        </div>
      <div class="pb-4 hidden md:flex">
        <Button :icon="'pi pi-chevron-right'" :label="buttonLabel" type="secondary" size="small"/>
      </div>
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
    priceLabel: {
        type: String,
        default: 'start at'
    },
    buttonLabel: String,
})

const currentPrice = computed(() => {
    return props.currentPeriod === 'monthly' ? props.monthlyPrice : props.annualPrice
})
</script>
