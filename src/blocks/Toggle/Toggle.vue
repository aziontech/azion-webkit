<template>
  <div class="flex flex-col items-center gap-3">
    <div class="flex items-center rounded-lg justify-center bg-[#13131A] w-fit p-2 px-3">
      <div class="flex items-center relative">
        <div 
          :class="[
            'absolute top-1 bottom-1 left-1 rounded-sm transition-transform duration-300 ease-out',
            'bg-[#B5B1F4]',
            selectedOption === 'main' ? 'translate-x-0' : 'translate-x-full'
          ]"
          :style="{ width: 'calc(50% - 4px)' }"
        ></div>
        <div
          @click="selectOption('main')"
          :class="[
            'relative z-10 px-3 py-1 rounded-md transition-all duration-300 ease-in-out',
            'font-proto-mono tracking-wide uppercase flex-1 cursor-pointer text-center',
            selectedOption === 'main'
              ? 'text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-200'
          ]"
        >
          {{ mainLabel }}
        </div>
        <div
          @click="selectOption('alternative')"
          :class="[
            'relative z-10 px-3 py-1 rounded-md transition-all duration-300 ease-in-out',
            'font-proto-mono tracking-wide uppercase flex-1 cursor-pointer text-center',
            selectedOption === 'alternative'
              ? 'text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-200'
          ]"
        >
          {{ alternativeLabel }}
        </div>
      </div>
    </div>
    <p v-if="description" class="text-xs font-sora text-neutral-100 text-center mt-3 mb-[3.75rem]">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: 'main'
  },
  mainLabel: {
    type: String,
    default: 'monthly'
  },
  alternativeLabel: {
    type: String,
    default: 'yearly'
  },
  description: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const selectedOption = ref(props.modelValue)

const selectOption = (option) => {
  selectedOption.value = option
  emit('update:modelValue', option)
  emit('change', option)
}

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue
})
</script>
