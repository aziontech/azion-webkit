<template>
  <div class="sticky top-16 z-10 bg-neutral-950 p-5 border border-neutral-900">
    <h3 class="font-sora display-3 font-medium text-neutral-300">Features</h3>
  </div>

  <div 
    v-for="(plan, index) in plans" 
    :key="plan.name"
    :class="[
      'sticky top-16 z-10 p-5 text-left border bg-neutral-950 border-neutral-900',
      index < plans.length - 1 ? 'border-r border-neutral-900' : 'border-r border-neutral-900'
    ]"
  >
    <div v-if="plan.popular" class="absolute inset-0 border-1 border-orange-500 rounded-sm"></div>
    <h3 class="display-2 mb-5 font-sora">{{ plan.name }}</h3>
    <Button 
      :label="plan.buttonLabel"
      :type="plan.buttonType || 'secondary'"
      :theme="plan.buttonTheme || 'dark'"
      size="small"
      @click="$emit('plan-selected', plan, index)"
    />
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue'

defineProps({
  plans: {
    type: Array,
    default: () => [
      { name: 'Free', buttonLabel: 'GET A DEMO', buttonType: 'primary', buttonTheme: 'light' },
      { name: 'Pro', buttonLabel: 'GET A DEMO', buttonType: 'primary', buttonTheme: 'light' },
      { name: 'Business', buttonLabel: 'START NOW', buttonType: 'secondary', popular: true, buttonTheme: 'light' },
      { name: 'Enterprise', buttonLabel: 'CONTACT US', buttonType: 'primary', buttonTheme: 'light' }
    ]
  },
  featuresLabel: {
    type: String,
    default: 'Features'
  }
})

defineEmits(['plan-selected'])
</script>
