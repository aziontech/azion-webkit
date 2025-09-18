<template>
  <div class="flex items-center  rounded-md justify-center bg-[#13131A] w-fit p-2">
    <div class="flex items-center relative">
      <!-- Animated background slider -->
      <div 
        :class="[
          'absolute top-1 bottom-1 rounded-sm transition-all duration-250 ease-out',
          'bg-[#B5B1F4]',
          'transform',
          selectedOption === 'monthly' ? 'left-1 translate-x-0' : 'left-1/2 translate-x-0'
        ]"
        :style="{ width: 'calc(50%)' }"
      ></div>
      
      <!-- Monthly clickable area -->
      <div
        @click="selectOption('monthly')"
        :class="[
          'relative z-10 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ease-in-out',
          'font-proto-mono tracking-wide uppercase flex-1 cursor-pointer text-center',
          selectedOption === 'monthly'
            ? 'text-neutral-900'
            : 'text-neutral-400 hover:text-neutral-200'
        ]"
      >
        Monthly
      </div>
      
      <!-- Annual clickable area -->
      <div
        @click="selectOption('annual')"
        :class="[
          'relative z-10 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ease-in-out',
          'font-proto-mono tracking-wide uppercase flex-1 cursor-pointer text-center',
          selectedOption === 'annual'
            ? 'text-neutral-900'
            : 'text-neutral-400 hover:text-neutral-200'
        ]"
      >
        Annual
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: 'monthly'
  },
  options: {
    type: Object,
    default: () => ({
      monthly: 'Monthly',
      annual: 'Annual'
    })
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const selectedOption = ref(props.modelValue)

const selectOption = (option) => {
  selectedOption.value = option
  emit('update:modelValue', option)
  emit('change', option)
}

// Watch for external changes to modelValue
import { watch } from 'vue'
watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue
})
</script>
