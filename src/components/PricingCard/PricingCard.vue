<template>
    <div :class="['p-6  min-w-[20rem] rounded-xl text-black', popular ? 'bg-orange-600' : 'bg-neutral-300']">
      <div class="flex flex-col gap-2 mb-5">
        <h3 class="text-xl font-medium">{{ title }}</h3>
        <p class="text-sm">{{ subtitle }}</p>
      </div>
      <div>
        <ul class="mb-10">
            <li class="flex items-center gap-2 mb-1" v-for="feature in features" :key="feature">
                <span :class="['pi', feature.icon, popular ? 'text-neutral-100' : 'text-orange-500']"></span>
                <p class="font-sora text-sm">{{ feature.label }}</p>
            </li>
        </ul>
      </div>
      <div class="flex mb-8 justify-between items-center flex-wrap font-proto-mono">
        <span class="text-xs w-full mb-2 text-left font-proto-mono">start at</span>
        <div class="flex items-end text-sm font-proto-mono">
            $
            <h4 class="text-7xl leading-[3.5rem] font-proto-mono">{{ price }}</h4>
            <span class="font-proto-mono">{{ priceLabel }}</span>
        </div>
      </div>
      <div>
        <Button :icon="'pi pi-chevron-right'" :label="buttonLabel" type="secondary" size="large" />      </div>
    </div>
</template>

<script setup>
import Button from '../Button/Button.vue'

defineProps({
    popular: Boolean,
    title: String,
    subtitle: String,
    features: Array,
    price: String,
    priceLabel: String,
    buttonLabel: String,
})
</script>
    